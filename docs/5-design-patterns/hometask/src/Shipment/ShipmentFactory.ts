import { defaultShipperFactory } from '../Shipper/ShipperFactory';
import { shipperCompanies } from '../shipperCompanies';
import { IShipmentState, Shipment } from './Shipment';
import { decoratorsMap } from './ShipmentDecorator';

interface ShipmentFactory{
    createShipment(shipment?:IShipmentState)
}

class ConcreteShipmentFactory implements ShipmentFactory{
    private createShipper(shipment?:IShipmentState){
        const shiperConfig =  shipperCompanies.find(shipConfig => shipConfig.fromZipCodeStart.indexOf(parseInt(shipment.fromZipCode.slice(0,1)))!== -1)
        if(shiperConfig) return defaultShipperFactory.createShipper(shiperConfig);
        
        const defaultShipperConfig = shipperCompanies.find(shiperConfig => shiperConfig.isDefault)
        return defaultShipperFactory.createShipper(defaultShipperConfig);
    }

    createShipment(shipment?:IShipmentState){
        const shipper = this.createShipper(shipment);

        //Compose decorators
        return  (shipment.marks ||[]).reduce((p,c) => { 
            const decorator=decoratorsMap[c]
            return decorator ? decorator(p):p
        }
            ,new Shipment(shipment,shipper)); 
       
    }


}


export const defaultShipmentFactory = new ConcreteShipmentFactory();



