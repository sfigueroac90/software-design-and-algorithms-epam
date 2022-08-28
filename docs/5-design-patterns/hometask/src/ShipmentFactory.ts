import { Shipment } from './Shipment';
import { ConcreteShipper } from './Shipper';
import { shipperCompanies } from './shipperCompanies';
import { IShipmentState } from "Shipment"

interface ShipmentFactory{
    createShipment(shipment?:IShipmentState)
}

class ConcreteShipmentFactory implements ShipmentFactory{
    private createShipper(shipment?:IShipmentState){
        const shiperConfig =  shipperCompanies.find(shipConfig => shipConfig.fromZipCodeStart.indexOf(parseInt(shipment.fromZipCode.slice(0,1)))!== -1)
        if(shiperConfig) return new ConcreteShipper(shiperConfig);
        
        const defaultShipperConfig = shipperCompanies.find(shiperConfig => shiperConfig.isDefault)
        return new ConcreteShipper(defaultShipperConfig);
    }

    createShipment(shipment?:IShipmentState){
        const shipper = this.createShipper(shipment);
        return new Shipment(shipment,shipper);
    }


}


export const defaultShipmentFactory = new ConcreteShipmentFactory();



