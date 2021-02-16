import { ProxyState } from "../AppState.js";
import Value from "../Models/Value.js";

class VendingService {

    constructor(){
        console.log("hi service");
    }
  buy(itemName) {
    if (ProxyState.money >= ProxyState[itemName].price){
        ProxyState.money-= ProxyState[itemName].price}
console.log(`bought item`);
  }
  addQuarter(){
      ProxyState.money+= .25
      console.log(`add quarter`, ProxyState.money);
  }
  addDollar(){
    ProxyState.money+= 1
    console.log(`add dollar`, ProxyState.money);
}
}

export const vendingService = new VendingService();



