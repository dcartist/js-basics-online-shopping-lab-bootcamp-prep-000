var cart = [];

Array.prototype.clean = function(deleteValue) {
for (var i = 0; i < this.length; i++) {
if (this[i] == deleteValue) {
  this.splice(i, 1);
  i--;
}
}
return this;
};


function clearCart(){
  cart.length = 0
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function addToCart(item) {
 // write your code here
 var itemName = item
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 item = new Object()
 item.itemName = itemName
 item.itemPrice = itemPrice
 cart.push(item)
 var message = item.itemName + ' has been added to your cart.'
 return cart, item, message
}

function viewCart() {
  // write your code here

  if (cart.length === 0){
    var empty = 'Your shopping cart is empty.'
    return empty
  } else if(cart.length === 1){
    var something = 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice+'.'
    return something
  } else {
    var i = 1
    var somethingelse = 'In your cart, you have '+cart[0].itemName+' at $'+cart[0].itemPrice
    var somethingtoo = ''
    while (cart.length > i ){
      if (cart.length - 1 === i){
        somethingtoo += ', and '+cart[i].itemName+' at $'+cart[i].itemPrice
         i++
      } else {
        somethingtoo += ', '+cart[i].itemName+' at $'+cart[i].itemPrice
        i++
      }

     }
    var alltogether = somethingelse + somethingtoo+'.'
    return alltogether
  }
}

function total() {
  // write your code here
  var i = 0, cost = 0
  while(cart.length > i){
    cost += cart[i].itemPrice
    i++
  }
  return cost
}

function removeFromCart(item) {
  // write your code here

  var nocart = 'That item is not in your cart.'
  var cartmatch = cart, cart1
  for (var i = cart.length - 1; i >= 0; i--){
      if(cart[i].itemName == item){
        cart = cart.slice(i)
        return cart
      }

    // if (typeof cart[i].itemName != undefined){
    //   if(cart[i].itemName == item){
    //     cart = cart.slice(i,1)
    //   }
    // }else {
    //
    // }

  }

// No changes in the cart
  if (cartmatch === cart){
    return nocart
  }

}




function placeOrder(cardNumber) {
  // write your code here
  // cardNumber = int(cardNumber)

  var noNumber = 'Sorry, we don\'t have a credit card on file for you.'
  var cost = 0
  // var card = cardNumber.length
   if (cardNumber === undefined){
    return noNumber
  } else {
    var i = 0, cost = 0
    while(cart.length > i){
      cost += cart[i].itemPrice
      i++
    }
    var processed = 'Your total cost is $'+cost+', which will be charged to the card '+cardNumber+'.'
    clearCart()
    return processed
  }
}
