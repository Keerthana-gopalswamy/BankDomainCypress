
Feature:Using cucumber framework in cypress creating a demo poject for banking domain
using url:https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login

Scenario:User opens the globalsqa page
    Given user opens the browser and enters the url 
    Then user navigated to the home page

Scenario:Bank manager creates a customer
    Given the bank manager is logged in
    When the bank manager creates a new customer
    Then the customer should be successfully created

Scenario: Bank manager deletes a customer
    When the bank manager selects a customer for deletion
    And confirms the deletion action
    Then the customer should be successfully deleted

Scenario: Bank manager creates an account for a customer
    When the bank manager creates a new account for a customer
    Then the account should be successfully created
   
Scenario: Bank manager searches for a customer
    Given the bank manager is on the customer search page
    When the bank manager enters the customer's information
    Then the search results for the customer are displayed
    And customer account number is printed
  
Scenario: Customer logs in successfully 
    Given the customer is on the home page
    When the customer clicks on the customer login button
    Then the customer should be successfully logged in

Scenario: Customer deposits an amount
    Given the customer has an account
    When the customer deposits a specific amount into the account
    Then the account balance should reflect the deposited amount

Scenario: Customer Deposits an Amount in Decimal
    Given the customer has an account
    When the customer makes a deposit of a specific decimal amount
    Then the account balance should not be updated to reflect the decimal deposit
  
Scenario: Verify deposit amount reflects on account balance
    Given the customer has an account 
    When the customer makes a deposit of a specific amount
    Then the deposit amount reflects on account balance

Scenario: Customer withdrawls an amount
    Given the customer has an account
    When the customer initiates a withdrawal of a specific amount
    Then the account balance should be reflect on the withdrawal  

Scenario: Customer Resets the Account
    Given the customer has an account
    When the customer initiates a reset of the account
    Then the account should be reset to a specified state
  



Scenario:Customer logout successfully
    When customer clicks on the logout button
    Then the customer logout successfully
