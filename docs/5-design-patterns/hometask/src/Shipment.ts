/**
 * @interface IShipment
 * @member {number}  ShipmentID - that represents an existing ID, or 0, which means you have to generate a new, unique ID at construction time
 * @member {string} weight - a number, storing the weight of the item in ounces
 * @member {string} fromAddress - a string containing street, city, and state, should be changeable
 * @member {string} fromZipCode - a string containing exactly 5 characters, should be changeable
 * @member {string} toAdddress  - a string containing street, city, and state, should be changeable
 * @member {string} toZipCode - a string containing exactly 5 characters, should be changeable
*/
export interface IShipmentState {
    shipmentID: number, 
    weight: number,
    fromAddress: string,
    fromZipCode: string,
    toAddress:string,
    toZipCode:string
}



export class Shipment implements IShipmentState{
    
    private static count: number = 0;
    private rate = 0.39;
    shipmentID: number 
    weight: number
    fromAddress: string
    fromZipCode: string
    toAddress:string
    toZipCode:string

    constructor(shipmentState:IShipmentState){    
        Object.assign(this,{...shipmentState})
    }
   
    getShipmentID(){
       
        if(this.shipmentID === 0){
            Shipment.count = Shipment.count + 1;
            this.shipmentID = Shipment.count;
        }

        return this.shipmentID;
    }

    getCost(){
        return this.rate * this.weight;
    }

    ship(){
        return `Shipment: ${this.getShipmentID()} from: ${this.fromAddress}(${this.fromZipCode}) has been shipped to: ${this.toAddress
        }(${this.toZipCode}) with a cost of ${this.getCost().toFixed(2)}`
    }
    
}