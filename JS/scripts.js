// Buisness Logic ---------------

function Bank() {
    this.accounts = {};
    this.currentId = 0;
}

Bank.prototype.addAccount = function(account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
}

Bank.prototype.assignId = function() {
    this.currentId += 1
    return this.currentId;
}

function BankAccount(name, money) {
    this.name = name;
    this.checking = parseInt(money);
}

BankAccount.prototype.withdraw = function(withdrawal) {
    this.checking -= parseInt(withdrawal);
    return this.checking;
}
BankAccount.prototype.deposit = function(amount) {
    this.checking += parseInt(amount);
    return this.checking;
}



//Interface Logic -------------
let bigBank = new Bank();

function handleAccountSubmit(e) {
    e.preventDefault();
    const inputtedName = document.getElementById("name").value;
    const inputtedFunds = parseInt(document.getElementById("money").value);
    let newAccount = new BankAccount(inputtedName, inputtedFunds);
    bigBank.addAccount(newAccount);
    displayCurrentBalance()
    document.getElementById("name").value = null;
    document.getElementById("money").value = null;

    document.getElementById("initiate-account").setAttribute("class", "hidden");
    document.getElementById("current-balance").removeAttribute("class")
}

function handleDepositAndWithraw(e) {
    e.preventDefault();
    const inputtedDeposit = document.getElementById("deposit").value;
    const inputtedWithdraw = document.getElementById("withdraw").value;
    if (inputtedDeposit !== "") {
        bigBank.accounts["1"].deposit(inputtedDeposit);
    }
    if (inputtedWithdraw !== "") {
        bigBank.accounts["1"].withdraw(inputtedWithdraw);
    }
    displayCurrentBalance()
    document.getElementById("deposit").value = null;
    document.getElementById("withdraw").value = null;
}

function showAccountCreater() {
    document.getElementById("initiate-account").removeAttribute("class");
    document.getElementById("current-balance").setAttribute("class", "hidden")
}

function displayCurrentBalance() {
    let account = Object.keys(bigBank.accounts).pop()
    document.getElementById("amount").innerText = "$" + bigBank.accounts[account].checking;
    document.getElementById("accountNumber").innerText = bigBank.accounts[account].id;
    document.getElementById("accountHolder").innerText = bigBank.accounts[account].name;
}

window.addEventListener("load", function() {
    document.querySelector("form#initiate-account").addEventListener("submit", handleAccountSubmit);
    document.querySelector("form#deposit-withdraw").addEventListener("submit", handleDepositAndWithraw)
    document.querySelector("button#accountMaker").addEventListener("click", showAccountCreater)
});