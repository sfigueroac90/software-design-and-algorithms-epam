import { IShipmentState } from './Shipment/Shipment';
import { defaultShipmentFactory } from './Shipment/ShipmentFactory';

/**
 * Client code only is initialized with sihpments hand generates al shipments objects when shipAll is called
 */
export class Client{
    private shipments:IShipmentState[];
    constructor(shipments:IShipmentState[]){
        this.shipments = shipments;
    }

    shipAll(){
        this.shipments.forEach((shipmentState)=>{
            const shipment =  defaultShipmentFactory.createShipment(shipmentState);
            console.log(shipment.ship())
        })
        
    }
}