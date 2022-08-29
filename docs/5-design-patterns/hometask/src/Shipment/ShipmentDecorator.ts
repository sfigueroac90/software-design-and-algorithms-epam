
export const ShipDecorator = (message) => <T extends {ship:()=>string}>(wrapee:T) => ({...wrapee,ship:()=> wrapee.ship() + "\n" + message})

export const DoNotLeaveDecorator = ShipDecorator("**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**");
export const FragileDecorator = ShipDecorator("**MARK FRAGILE**");
export const ReturnReceiptRequested = ShipDecorator("***MARK RETURN RECEIPT REQUESTED**");

export const decoratorsMap = {
    "DoNotLeave":DoNotLeaveDecorator,
    "ReturnReceiptRequested":ReturnReceiptRequested,
    "Fragile":FragileDecorator
}