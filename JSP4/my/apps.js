const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list= document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount= document.getElementById("amount");

// for the local storage 
const localstorageTransactions = JSON.parse(
    localstorage.getItem("transactions"));

    let  transactions=
    localStoragegetItem("transactions") !== null ?
    localstorageTransactions:[];

    function addTransaction(e){

        e.preventDefault();

        if (text.nodeValue.trim() ===""|| amount.nodeValue.trim() ===""){
            alert("please add a text and amount");
        } else{ 
            const transactions ={
                id: generateID(),
                text: text.Value,
                amount:+amount.Value,
            };
            transaction.push(transaction);

            addTransactionDOM(transaction);

            updateValue();

            updateLocalStorage();

            text.value ="";
            amount.value =""; 
        }
    }

//  generate random ID 
function  generateID(){
    return Math.floor(Math.random() *100000000);
}

//  adding the transactions to the DOM list 
function addtransaction(transaction){
    // first we have to get the sign negative or positive
    const sign = transaction.amount <0 ?"-":"+";

    const item = document.createElement("li");
    // add to class based on the value entered by the user
    item.classList.add(transaction.amount< 0 ?  "minus" :"plus" );

    item.innerHTML = `${transaction.text}` <sign> ${ sign} ${Math.abs(transaction.amount)}</span><button class="delete-btn" onclick ="removeTrasaction(${transaction.id})></button>
}

List.appendChild(item);
}
//code to update the balance, income and expense

function updateValue(){
    const ammounts =transactions.map((transaction) =>transaction.amount);
    const total amounts.reduce((acc, item) =>( acc +=item), 0).toFixe(2);

    const income = amounts
    .filter((item) => 0)
    .reduce((item) => (acc += item), 0)
    .tofixed(2);

    const expense=(
        amount.filter((item) => item <0).reduce((acc, item))
    )

    const expense =(item => item < 0).reduce((acc, item) =>(acc += item), 0)*
    -1

    // updating the content of the html//

    balance.innerHTML=$$`(total);
    money_plus.innerHTML=`$$(income)`;
    money_minus.innerHTML=`$$(expense)`;
}
// code to removeTransaction
function removeTransaction(id){
    transactions = transactions.filter((transaction) => transaction.id !==id);

    updatelocalStorage();


    init();
}
//updating transactions in local storage//
function updateLocalStorage(){
    localStorage.setitem("transaction", JSON.stringify(transaction));
}

//start listing the items//
function init(){
    list.HTML ="";
    transactions
}