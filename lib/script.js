/**
 * Issue a license
 * @param {org.gov.fts.IssueLicense} tx - issue license
 * @transaction
 */
async function IssueLicense(tx) {
    const factory = getFactory();
  const namespace = 'org.gov.fts';
  const license = factory.newResource(namespace, 'License', tx.licenseNumber);
  license.licenseType = tx.licenseType;
  license.licenseStatus = 'Active';
  const assetRegistry = await getAssetRegistry(namespace + '.License');
  await assetRegistry.add(license);
}

/**
* Revoke a license
* @param {org.gov.fts.RevokeLicense} tx - revoke license
* @transaction
*/
async function RevokeLicense(tx) {
  const namespace = 'org.gov.fts';
    const licenseNumber = tx.licenseNumber;
    licenseNumber.licenseStatus = 'Inactive';
  const assetRegistry = await getAssetRegistry(namespace + '.License');
  await assetRegistry.update(licenseNumber);
}

/**
* Manufacture a firearm
* @param {org.gov.fts.ManufactureFirearm} tx - manufacture firearm
* @transaction
*/
async function ManufactureFirearm(tx) {
    const factory = getFactory();
  const namespace = 'org.gov.fts';
  const firearm = factory.newResource(namespace, 'Firearm', tx.serialNumber);
  firearm.firearmType = tx.firearmType;
  firearm.manufacturedBy = tx.manufacturedBy;
  const assetRegistry = await getAssetRegistry(namespace + '.Firearm');
  await assetRegistry.add(firearm);
}

/**
* Forward a firearm
* @param {org.gov.fts.ForwardFirearm} tx - forward firearm
* @transaction
*/
async function ForwardFirearm(tx) {
  const namespace = 'org.gov.fts';
    const firearm = tx.firearm;
    if(firearm.firearmStatus == 'Manufactured') {
        firearm.firearmStatus = 'Forwarded';
        firearm.soldBy = tx.soldBy;
         const assetRegistry = await getAssetRegistry(namespace + '.Firearm');
         await assetRegistry.update(firearm);
  }
    else if(firearm.firearmStatus == 'Forwarded') {
    throw new Error ("The firearm is already forwarded.")
  }
    else if(firearm.firearmStatus == 'Destroyed') {
    throw new Error ("The firearm is destroyed.")
  }
    else {
    throw new Error ("The firearm needs to be manufactured first");
  }
}

/**
* Sell a firearm
* @param {org.gov.fts.SellFirearm} tx - sell firearm
* @transaction
*/
async function SellFirearm(tx) {
  const namespace = 'org.gov.fts';
    const firearm = tx.firearm;
    if(firearm.firearmStatus == 'Forwarded') {
        firearm.firearmStatus = 'Sold';
        firearm.possessedBy = tx.possessedBy;
         const assetRegistry = await getAssetRegistry(namespace + '.Firearm');
         await assetRegistry.update(firearm);
  }
    else if(firearm.firearmStatus == 'Sold') {
    throw new Error ("The firearm is already sold.")
  }
    else if(firearm.firearmStatus == 'Destroyed') {
    throw new Error ("The firearm is destroyed.")
  }
    else {
    throw new Error ("The firearm needs to be forwarded first");
  }
}

/**
* Return a firearm
* @param {org.gov.fts.ReturnFirearm} tx - return firearm
* @transaction
*/
async function ReturnFirearm(tx) {
  const namespace = 'org.gov.fts';
    const firearm = tx.firearm;
    if(firearm.firearmStatus == 'Sold') {
        firearm.firearmStatus = 'Returned';
         const assetRegistry = await getAssetRegistry(namespace + '.Firearm');
         await assetRegistry.update(firearm);
  }
    else if(firearm.firearmStatus == 'Returned') {
    throw new Error ("The firearm is already returned.")
  }
    else if(firearm.firearmStatus == 'Destroyed') {
    throw new Error ("The firearm is destroyed.")
  }
    else {
    throw new Error ("The firearm needs to be sold first");
  }
}

/**
* Destroy a firearm
* @param {org.gov.fts.DestroyFirearm} tx - destroy firearm
* @transaction
*/
async function DestroyFirearm(tx) {
  const namespace = 'org.gov.fts';
    const firearm = tx.firearm;
    if(firearm.firearmStatus == 'Returned') {
        firearm.firearmStatus = 'Destroyed';
         const assetRegistry = await getAssetRegistry(namespace + '.Firearm');
         await assetRegistry.update(firearm);
  }
    else if(firearm.firearmStatus == 'Destroyed') {
    throw new Error ("The firearm is already destroyed.")
  }
    else {
    throw new Error ("The firearm needs to be returned first");
  }
}