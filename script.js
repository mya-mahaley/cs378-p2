let prices = {mac:5, pasta:8, tacos:8, enchiladas:10}
let quantities = {mac:0, pasta:0, tacos:0, enchiladas:0}
let subtotal = 0
let subtotal_text = document.getElementById("subtotal")

let mac_quantity = document.getElementById("quantity-0")
let mac_decrease = document.getElementById("decrease-0")
mac_decrease.addEventListener("click", () => {changeItem("mac", false, mac_quantity)})
let mac_increase = document.getElementById("increase-0")
mac_increase.addEventListener("click", () => {changeItem("mac", true, mac_quantity)})

let pasta_quantity = document.getElementById("quantity-1")
let pasta_decrease = document.getElementById("decrease-1")
pasta_decrease.addEventListener("click", () => {changeItem("pasta", false, pasta_quantity)})
let pasta_increase = document.getElementById("increase-1")
pasta_increase.addEventListener("click", () => {changeItem("pasta", true, pasta_quantity)})

let tacos_quantity = document.getElementById("quantity-2")
let tacos_decrease = document.getElementById("decrease-2")
tacos_decrease.addEventListener("click", () => {changeItem("tacos", false, tacos_quantity)})
let tacos_increase = document.getElementById("increase-2")
tacos_increase.addEventListener("click", () => {changeItem("tacos", true, tacos_quantity)})

let enchiladas_quantity = document.getElementById("quantity-3")
let enchiladas_decrease = document.getElementById("decrease-3")
enchiladas_decrease.addEventListener("click", () => {changeItem("enchiladas", false, enchiladas_quantity)})
let enchiladas_increase = document.getElementById("increase-3")
enchiladas_increase.addEventListener("click", () => {changeItem("enchiladas", true, enchiladas_quantity)})

let clear_button = document.getElementById("clear-button")
clear_button.addEventListener("click", clear_all)

let order_button = document.getElementById("order-button")
order_button.addEventListener("click", order)

function changeItem(item, increase, quantity) {
    if(increase) {
        quantities[item] = quantities[item] + 1
        quantity.innerHTML = quantities[item]
        subtotal += prices[item]
        subtotal_text.innerHTML = "$" + subtotal
    } else {
        if(quantities[item] > 0) {
            quantities[item] = quantities[item] - 1
            quantity.innerHTML = quantities[item]
            subtotal -= prices[item]
            subtotal_text.innerHTML = "$" + subtotal
        }
    }
}

function order() {
    if(subtotal === 0){
        alert("No items in cart")
    } else {

    }
}

function clear_all() {
    subtotal = 0;
    subtotal_text.innerHTML = "$0"

    quantities["mac"] = 0
    mac_quantity.innerHTML =  "0"

    quantities["pasta"] = 0
    pasta_quantity.innerHTML =  "0"

    quantities["tacos"] = 0
    tacos_quantity.innerHTML =  "0"

    quantities["enchiladas"] = 0
    enchiladas_quantity.innerHTML =  "0"
}

function order() {
    if(subtotal === 0) {
        alert("No items in cart")
    } else {
        let order = ""

        if(quantities["mac"] > 0){
            order += quantities["mac"] + " mac & cheese "
        }

        if(quantities["pasta"] > 0){
            order += quantities["pasta"] + " pasta "
        }

        if(quantities["tacos"] > 0){
            order += quantities["tacos"] + " tacos "
        }

        if(quantities["enchiladas"] > 0){
            order += quantities["enchiladas"] + " enchiladas "
        }

        alert(order)
    }
    
}