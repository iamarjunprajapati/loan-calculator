
let amount = document.querySelector('#amount');
let percent = document.querySelector('#percentage');
let month = document.querySelector("#months");
let bill = document.querySelector(".bill");

function calculateBill() {
    let percentageCalculation = +amount.value * +percent.value / 100;
    let totalAmount = +amount.value + percentageCalculation;
    let emi = parseInt(totalAmount / +month.value).toFixed(2);
    bill.innerText = `EMI : ${emi}`;
}








