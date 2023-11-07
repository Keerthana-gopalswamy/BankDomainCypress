//Dummy website cucumber framework project

/// <reference types="Cypress"/>
import { Given, When,Then, And } from "cypress-cucumber-preprocessor/steps";
import Global from "../../support/POM/globalpomfile";
const g=new Global;

//Scenario:User opens the globalsqa page
Given('user opens the browser and enters the url',()=>{
g.getUrl();
})
Then('user navigated to the home page',()=>{
g.getHome();
})

//Scenario:Bank manager creates a customer
Given('the bank manager is logged in',()=>{
g.getBankmanager();
})
When('the bank manager creates a new customer',()=>{
g.getAddcustomer();
})
Then('the customer should be successfully created',()=>{
g.getCreatedcustomer();
})

//Scenario: Bank manager deletes a customer
When('the bank manager selects a customer for deletion',()=>{
g.getDeleteaccount();
})
And('confirms the deletion action',()=>{
g.getDeleteaction();
})
Then('the customer should be successfully deleted',()=>{
g.getDeletedsuccessfully();
})
//Scenario: Bank manager creates an account for a customer
When('the bank manager creates a new account for a customer',()=>{
    g.getOpenaccount();
    })
    Then('the account should be successfully created',()=>{
    g.getAddedaccount();
    })

//Scenario: Bank manager searches for a customer
    Given('the bank manager is on the customer search page',()=>{
     g.getCustomesearchpage();
    })
    When("the bank manager enters the customer's information",()=>{
g.getCustomerinfo();
    })
    Then('the search results for the customer are displayed',()=>{
g.getCustomerinfodisplay();
    })
    And('customer account number is printed',()=>{
g.getAccountno();
    })

//Scenario: Customer logs in successfully
Given('the customer is on the home page',()=>{
    g.getCustomerlogin();
    })
    When('the customer clicks on the customer login button',()=>{
    g.getCustomerloginbuttom()
    })
    Then('the customer should be successfully logged in',()=>{
    g.getSuccessfullylogin();
    })
    //Scenario: Customer deposits an amount
    Given('the customer has an account',()=>{
g.getAccountinfo();
    })
    When('the customer deposits a specific amount into the account',()=>{
g.getAccountdeposit();
    })
    Then('the account balance should reflect the deposited amount',()=>{
g.getAccoutbalnce();
    })
    //Scenario: Customer Deposits an Amount in Decimal
    When('the customer makes a deposit of a specific decimal amount',()=>{
        g.getDecimaldeposit();
    })
    Then('the account balance should not be updated to reflect the decimal deposit',()=>{

    })
    //Scenario: Verify deposit amount reflects on account balance
    Given('the customer has an account',()=>{
        g.getAccountinfo();
    })
    When('the customer makes a deposit of a specific amount',()=>{
       g.getDeposit();
    })
    Then('the deposit amount reflects on account balance',()=>{
g.getUpdateddeposit();
    })
    //Scenario: Customer withdrawls an amount
    When('the customer initiates a withdrawal of a specific amount',()=>{
g.getWithdrawl()
    })
    Then('the account balance should be reflect on the withdrawal',()=>{
g.getUpdatedwithdrawl();
    })
    //Scenario: Customer Resets the Account
    When('the customer initiates a reset of the account',()=>{
g.getReset();
    })
    Then('the account should be reset to a specified state',()=>{
g.getResetTransaction();
    })
    
//Scenario:Customer logout successfully
When('customer clicks on the logout button',()=>{
g.getLogoutbutton();
})
Then('the customer logout successfully',()=>{
g.getLogoutsuccess();
})