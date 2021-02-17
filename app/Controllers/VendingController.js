import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { vendingService } from "../Services/VendingService.js";


//Private
function _drawMoney() {
document.getElementById("total").innerText = ProxyState.money.toString();

}
function _drawQuantity(itemName) {
    document.getElementById(itemName).innerText = ProxyState[itemName].quantity.toString();
    
    }

//Public
export default class VendingController {
  constructor() {
    ProxyState.on("money", _drawMoney);
    _drawMoney()
    ProxyState.on("quantity", _drawQuantity);
    // _drawQuantity()
  }

  buy(itemName) {
    // console.log(`buy frose rose`)
    vendingService.buy(itemName)
    _drawQuantity(itemName)


  }

  draw(){
      vendingService.draw()
  }

  addDollar(){
      vendingService.addDollar()
    //   console.log(`hey`)
  }

  addQuarter(){
      vendingService.addQuarter()
  }

}

