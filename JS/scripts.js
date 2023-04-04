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

function BankAccount(money) {
    this.checking = money;
}

BankAccount.prototype.withdraw = function(withdrawal) {
    this.checking -= withdrawal;
    return this.checking;
}

