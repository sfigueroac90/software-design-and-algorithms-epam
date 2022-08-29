import { AbstractShipper } from "../Shipper";

/**
 * @class AirEastShipper concrete class for AbstractShipper
 */
 export class AirEastShipper extends AbstractShipper {
    getLetterCost(weight:number){
        return 0.39 * weight;
    }

    getPackageCost(weight:number){
        return 0.25* weight;
    }

    getOversizedCost(weight:number){
        return 10 + this.getPackageCost(weight);
    }
}