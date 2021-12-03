function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity 
}

let quantity = 1

const quantityDown = document.querySelector('#quantity-down')

const quantityUp = document.querySelector('#quantity-up')

quantityDown.addEventListener('click', function(e){
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})

quantityUp.addEventListener('click', function(){
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})

function updateTotalprice(displayTotalprice) {
    let Totalprice = document.querySelector('.total-price')
    Totalprice.innerhtml = displayTotalprice
}

