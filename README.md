# Firearm Tracking System

A blockchain-based system built using [Hyperledger Composer](https://github.com/hyperledger/composer) to track a firearm throughout its lifecycle from its inception till its destruction. 

_Developed as a part of the coursework for the module CST4025 Blockchain Development at Middlesex University, London during the academic year 2019-20._

## Model
* **Assets** ```License```  ```Firearm```  
    * License - A mandatory document issued distinctively to the participant in the system.  
    * Firearm - The primary product in the system.

* **Participants** ```Government``` ```FirearmControlUnit``` ```Manufacturer``` ```Vendor``` ```Posessor```
    * Government - Keeps a check on the distribution of the firearms to maintain law and order.  
    * Firearm Control Unit - Manages the operation of the whole system.  
    * Manufacturer - Manufactures the firearm and forwards it to the vendor.  
    * Vendor - Sells the firearm to the possessor.  
    * Possessor - Holds a firearm in possession.

* **Transactions** ```IssueLicense``` ```RevokeLicense``` ```ManufactureFirearm``` ```ForwardFirearm``` ```SellFirearm``` ```ReturnFirearm``` ```DestroyFirearm```
    * IssueLicense - Issue a license to a participant in the system.
    * RevokeLicense - Revoke a license of a participant in the system.
    * ManufactureFirearm - Manufacture a new firearm and register it in the system.
    * ForwardFirearm - Forward a firearm to a vendor selling it in retail and update the status in the system.
    * SellFirearm - Sell a firearm to an authorised license holder and update the status in the system.
    * ReturnFirearm - Return a firearm to the vendor on the orders of a law enforcing agency or at will, and update the status in the system.
    * DestroyFirearm - Destroy the firearm and update the status in the system.

---

### [Installing and running Hyperledger Composer Playground locally](https://hyperledger.github.io/composer/latest/installing/development-tools.html)

❗️Hyperledger Composer project is now in [deprecated state](https://github.com/hyperledger/composer#hyperledger-composer).