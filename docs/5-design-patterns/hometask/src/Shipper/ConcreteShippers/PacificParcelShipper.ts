import { AbstractShipper } from "../Shipper";

/**
 * @class PacificParcelShipper concrete class for AbstractShipper
 */
 export class PacificParcelShipper extends AbstractShipper {
    getLetterCost(weight:number){
        return 0.51 * weight;
    }

    getPackageCost(weight:number){
        return 0.19* weight;
    }

    getOversizedCost(weight:number){
        return 0.02*weight + this.getPackageCost(weight);
    }
}
