import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { vendingService } from "../Services/VendingService.js";


//Private
function _drawMoney() {
document.getElementById("total").innerText = ProxyState.money.toString();

}

//Public
export default class VendingController {
  constructor() {
    ProxyState.on("money", _drawMoney);
    _drawMoney()
  }

  buy(itemName) {
    console.log(`buy frose rose`)
    vendingService.buy(itemName)


  }

  addQuarter(){
      vendingService.addQuarter()
  }

}

