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
Bank.prototype.search = function(id) {
    if (this.accounts[id] !== undefined ) {
        return this.accounts[id];
    } 
    return false;
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
	let account = Object.keys(bigBank.accounts).pop()
	if (inputtedDeposit !== "") {
			bigBank.accounts[account].deposit(inputtedDeposit);
			document.querySelector("img").removeAttribute("class");
	}
	if (inputtedWithdraw !== "") {
			bigBank.accounts[account].withdraw(inputtedWithdraw);
	}
	displayCurrentBalance()
	document.getElementById("deposit").value = null;
	document.getElementById("withdraw").value = null;
}

function handleSearchSubmit(e) {
	e.preventDefault();
	const inputtedSearch = document.getElementById("searchInput").value;
	const searchResult = bigBank.search(inputtedSearch);
	displaySearchResult(searchResult);
	document.getElementById("searchResult").removeAttribute("class");
	document.getElementById("current-balance").setAttribute("class", "hidden");
	document.getElementById("initiate-account").removeAttribute("class");
	document.getElementById("searchInput").value = null;
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
		document.getElementById("searchResult").setAttribute("class", "hidden")
}

function displaySearchResult(account) {
	document.getElementById("search-amount").innerText = "$" + account.checking;
	document.getElementById("search-accountNumber").innerText = account.id;
	document.getElementById("search-accountHolder").innerText = account.name;
}

window.addEventListener("load", function() {
	document.querySelector("form#search").addEventListener("submit", handleSearchSubmit);
	document.querySelector("form#initiate-account").addEventListener("submit", handleAccountSubmit);
	document.querySelector("form#deposit-withdraw").addEventListener("submit", handleDepositAndWithraw)
	document.querySelector("button#accountMaker").addEventListener("click", showAccountCreater)
});