import { IShipmentState, Shipment } from './Shipment';
import { getShipments } from "./mocks/api";

export class Client{
    private shipments:IShipmentState[];
    constructor(shipments:IShipmentState[]){
        this.shipments = shipments;
    }

    shipAll(){
        this.shipments.forEach((shipmentState)=>{
            const shipment = new Shipment(shipmentState);
            console.log(shipment.ship())
        })
        
    }
}