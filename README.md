
Test:
Code:
Expected Output:

---------------------

Description: BankAccount (){}

Test: Should take an initial amount, store it an instance of BankAccount!
Code:let account1 = new BankAccount(666)
Expected Output:account1 = {checking : 666}

---------------------

Test:should be able to have multiple instances of BAnkAccount in our app.
Code:let account2 = new BankAccount(667)
      let bank = new Bank()
      bank.addAccount(account2)
Expected Output: Bank {accounts: {…}}

---------------------

Describe: Bank.prototype.assignId
Test: It should generate a unique id for each account added to the bank"
Code: let account2 = new BankAccount(667)
      let bank = new Bank()
      bank.addAccount(account2)
Expected Output: Bank { accounts: { 1: BankAccount, 2: BankAccount} }


Test: should store a mock account in a bigBANK
Code:  let account1 = new BAnkAccount(16000)
let bigBAnk = new Bank;
bigBank.addAccount(account1);
account1.withdrawal(20)
Expected Output: account1 = 15800 !!

---------------------

Describe: function handleDepositAndWithraw(e) {}
Test:should add and subtract from the checking account while updatig the UI to show the correct amount in our chacking account"
Code:
Expected Output: :)

---------------------