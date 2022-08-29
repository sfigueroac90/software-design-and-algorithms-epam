import { AbstractShipper } from "../Shipper";

/**
 * @class ChicagoSprintShipper concrete class for AbstractShipper
 */
 export class ChicagoSprintShipper extends AbstractShipper { 
    getLetterCost(weight:number){
        return 0.42 * weight;
    }

    getPackageCost(weight:number){
        return 0.20* weight;
    }

    getOversizedCost(weight:number){
        return this.getPackageCost(weight);
    }
}