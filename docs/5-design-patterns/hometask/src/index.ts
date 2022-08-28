import { getShipments } from "./mocks/api";
import { Client } from "./Client";


const client = new Client(getShipments());
client.shipAll();