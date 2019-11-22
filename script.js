

var cart = [];

var Item = function(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
}
function newCart() {
    var Apple = new Item('Apple', 1.22, 1);
    var Pear = new Item('Pear', 1.72, 1);
    cart.push(Apple);
    cart.push(Pear);
}

newCart();
function addItemToCart(name, price, count) {
    console.log('Add Item Clicked', name, price, count);
    for (var i in cart) { 
        if (cart[i].name === name) {
            cart[i].count = cart[i].count + 1;
            var list = document.getElementById("shopBinding");
            let index = 1;
            if(i === '1') {
                index = 2
            }
            list.childNodes[1].children[index].children[2].innerText = cart[i].count
            console.log(list);
        }
    }
    // var list = document.getElementById("shopBinding");
    // list.removeChild(list.childNodes[1])
    // bindElements();
}

// addItemToCart('Apple', 1.22, 1);
// addItemToCart('Pear', 1.72, 3);

console.log(cart);

function removeItemFromCart(name) {
    console.log(name);
    for (var i in cart) { 
        var list = document.getElementById("shopBinding");
        if (cart[i].name === name) {
            cart[i].count = cart[i].count - 1;
            let index = 0;
            if(i === '1') {
                index = 1
            }
            list.childNodes[1].children[index].children[2].innerText = cart[i].count;
            console.log(list);
        }

        if (cart[i].count === 0) {
            console.log('Zero Reached');
            console.log(cart, i);
            cart.splice(i, 1);
            console.log(cart, i);
            list.innerHTML = '';
            bindElements();
        }
    }
}

// removeItemFromCart('Apple');
// removeItemFromCart('Apple');
// removeItemFromCart('Apple');

function removeItemFromCartAll(name) {
    newCart()
}

// removeItemFromCartAll('Pear');

function clearCart() {
    newCart();
}

function countCart() {
    var totalCount = 0;
    for(var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}

console.log(cart);

function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price; 
    }
    return totalCost;
}

function listCart() {
    var cartCopy = [];
    for(var i in cart) {
        let item = cart[i];
        var itemCopy = {};
        for(var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

listCart();

console.log(listCart());


function bindElements() {

    let table = document.createElement('table');
    let shopBinding = document.getElementById('shopBinding');

    let tableHeadRow = document.createElement('tr');
    
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    let th5 = document.createElement('th');

    th1.appendChild(document.createTextNode('Product Name'));
    th2.appendChild(document.createTextNode('Price'));
    th3.appendChild(document.createTextNode('Quantity'));
    th4.appendChild(document.createTextNode('Add Item'));
    th5.appendChild(document.createTextNode('Remove Item'));

    tableHeadRow.appendChild(th1);
    tableHeadRow.appendChild(th2);
    tableHeadRow.appendChild(th3);
    tableHeadRow.appendChild(th4);
    tableHeadRow.appendChild(th5);

    table.appendChild(tableHeadRow);

    for(let i = 0; i < cart.length; i++) {
        let tableRow = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');

        let td4 = document.createElement('td');
        let td5 = document.createElement('td');

        let text1 = document.createTextNode(cart[i].name);
        let text2 = document.createTextNode(cart[i].price);
        let text3 = document.createTextNode(cart[i].count);

        let addButton = document.createElement('button');
        let removeButton = document.createElement('button');

        addButton.classList.add('add_btn');
        removeButton.classList.add('remove_btn');

        console.log(addButton, removeButton, td4, td5);

        addButton.appendChild(document.createTextNode('Add'));
        removeButton.appendChild(document.createTextNode('Remove'));

        addButton.classList.add('addClass');
        removeButton.classList.add('removeClass');
        addButton.setAttribute('id', i);
        removeButton.setAttribute('id', i);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);

        td4.appendChild(addButton);
        td5.appendChild(removeButton);

        tableRow.appendChild(td1);
        tableRow.appendChild(td2);
        tableRow.appendChild(td3);
        tableRow.appendChild(td4);
        tableRow.appendChild(td5);

        table.appendChild(tableRow);

        // for(let i = 0; i < addClass.length; i++) {

        // }

    }

    shopBinding.appendChild(table);

    console.log(table);
    // clearCart();
}

bindElements();


function testFunction() {
    console.log('Click Testing');
}

let addClassElement = document.querySelectorAll('.addClass');
let removeClassElement = document.querySelectorAll('.removeClass');

for (let i = 0; i < addClassElement.length; i++) {
    // console.log(addClassElement[i].target.id);
    addClassElement[i].addEventListener('click', function(event) {
        console.log(event);
        console.log('Element Clicked', cart);
        let name = cart[parseInt(event.target.id)].name;
        let price = cart[parseInt(event.target.id)].price;
        let count = cart[parseInt(event.target.id)].count;

        addItemToCart(name, price, count);
    });
}

for (let i = 0; i < removeClassElement.length; i++) {

    removeClassElement[i].addEventListener('click', function(event) {
        console.log(event);
        console.log('Element Clicked', cart);
        let name = cart[parseInt(event.target.id)].name;
        // let price = cart[parseInt(event.target.id)].price;
        // let count = cart[parseInt(event.target.id)].count;

        removeItemFromCart(name);
    });

}

console.log(addClassElement.length, removeClassElement.length);











