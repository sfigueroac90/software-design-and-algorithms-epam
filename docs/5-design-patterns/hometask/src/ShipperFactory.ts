import { Shipper } from './Shipper';
import { AirEastShipper, ChicagoSprintShipper, PacificParcelShipper, ShipperConfig } from './Shipper';
export interface ShipperFactory {
    createShipper(config:ShipperConfig):Shipper
}



const factoryMap= {
    "AirEastShipper": AirEastShipper,
    "ChicagoSprintShipper": ChicagoSprintShipper,
    "PacificParcelShipper": PacificParcelShipper,
}

export class DefaultShipperFactory {
    createShipper(config:ShipperConfig):Shipper{
        const className = factoryMap[config.name];
        if(className) return new className(config);

        return new AirEastShipper(config);
    }
}

export const defaultShipperFactory = new DefaultShipperFactory();