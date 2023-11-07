/// <reference types="Cypress"/>
class Global{
 
    getUrl(){
        cy.fixture("globaldata").then((data)=>{
            cy.visit(data.url);
        })
    }
getHome(){
    cy.get('[class="btn home"]').should('be.visible')
}
getBankmanager(){
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.border').should('be.visible');
}
getAddcustomer(){
    cy.get('[ng-class="btnClass1"]').click();
    cy.get(':nth-child(1) > .form-control').type("cypress");
    cy.get(':nth-child(2) > .form-control').type("cucumber");
    cy.get(':nth-child(3) > .form-control').type("112");
    cy.get('[class="btn btn-default"]').click();
    

}
getCreatedcustomer(){
    let fngiven ="cypress"
    let fndeclared;
    cy.get('[ng-class="btnClass3"]').click();
    cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > form > div > div > input').click().type(fngiven);
    
    
    // Get the text of an element and log it
    cy.get('tbody > .ng-scope > :nth-child(1)').invoke('text').then((text) => {
        fndeclared=text;
    cy.log(fndeclared);
    if(fngiven === fndeclared){
        cy.get('tbody > .ng-scope > :nth-child(1)').should('be.visible')
        cy.log('the customer is added successfully')
    }
    else{
        cy.log('the customer is not added ')
    }

  });
  



}
getDeleteaccount(){
    cy.get('[ng-class="btnClass3"]').click();
    cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > form > div > div > input').click()
    .clear()
    .type("cypress");
    cy.get('tr.ng-scope > :nth-child(1)').should('be.visible')
    
}
getDeleteaction(){
    cy.get(':nth-child(5) > button').click();
}
getDeletedsuccessfully(){
    let deletecustomer ="cypress";
    cy.get('.form-control').clear().type(deletecustomer)
    cy.get('[style="height:250px;"]').should('not.contain','cypress')
    cy.log('the customer is deleted successfully :'+ deletecustomer)
    
}
getOpenaccount(){
    cy.get('[ng-class="btnClass2"]').click();
    cy.get('#userSelect').select(2);
    cy.get('#currency').select(2);
    cy.get('form.ng-dirty > button').click()
}
getAddedaccount(){
    cy.get('[ng-class="btnClass3"]').click()
}
getCustomesearchpage(){
    cy.get('.border').should('be.visible')
    cy.log("the customer search page is displayed")
}
getCustomerinfo(){
    cy.get('.form-control').clear().type("Hermoine")   

}
getCustomerinfodisplay(){
    
    cy.get('body > div > div > div.ng-scope > div > div.ng-scope > div > div > table > tbody').should('be.visible')
    .and('contain',"Hermoine")
   
}
getAccountno(){
    let acc_no;
    cy.get('tr.ng-scope > :nth-child(4)').invoke('text').then((text) => {
        acc_no=text;
    cy.log("the account holder account number is " + acc_no);
    })
}
getCustomerlogin(){
    cy.get('.home').click();
    cy.get('.borderM').should('be.visible')
    cy.log("the home page is visible")
}
getCustomerloginbuttom(){
    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('[id="userSelect"]').select("Hermoine Granger")
    cy.get('form.ng-valid > .btn').click()
}
getSuccessfullylogin(){
    cy.get('.fontBig').should('be.visible').and('have.text','Hermoine Granger');

}
  getAccountinfo(){
    let acc_name;
    this.getSuccessfullylogin();
    cy.get('.fontBig').invoke('text').then((text)=>{
acc_name = text

cy.get('.borderM > :nth-child(3)').invoke('text').then((text)=>{
    cy.log("the account holder name "+ acc_name+  " and account holder details "+text)
})
    })
    
  }
 getAccountdeposit(){
    let amountdeposit ="500"
   
    cy.get('[ng-class="btnClass2"]').click();
    cy.get('.form-control').type(amountdeposit)
    cy.get('form.ng-dirty > .btn').click();
    // cy.get('.error').invoke('text').then((text)=>{
    //     cy.log(text)
    // })
    // cy.get('.error').should('be.visible')
   
 }
 getAccoutbalnce(){
    let acc_balance ; 
     
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').invoke('text').then((text)=>{
        acc_balance = text
       cy.log("the account balance afrer the deposit" +acc_balance)
    
    })
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('be.visible')

 }
 getDeposit(){
    let before_deposit;
    
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').invoke('text').then((text)=>{
        before_deposit = text;
cy.log(before_deposit)
this.getAccountdeposit();
 })
 } 
 getUpdateddeposit(){
    let before_deposit;

    let after_deposit;
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').invoke('text').then((text)=>{
        after_deposit = text;
        cy.log(after_deposit)
        cy.log(before_deposit +"!="+after_deposit);
        if(before_deposit != after_deposit){
            cy.log("the deposit is success")
        }
        else{
            cy.log("the deposit in fail")
        }
    })
       
    
 }
 getWithdrawlamount(){
    let withdrawl = "100";
    cy.get('[ng-class="btnClass3"]').click()    
    cy.get('.form-control').clear().type(withdrawl)
    cy.get('form.ng-dirty > .btn').click();
 }
 getWithdrawl(){
    let before_withdrawl;
    this.getWithdrawlamount();
    cy.get('.error').invoke('text').then((text)=>{
        cy.log(text)
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').invoke('text').then((text)=>{
            before_withdrawl = text;
    cy.log( before_withdrawl)
   
     })
        
    })
    
 }
 
 getUpdatedwithdrawl(){
    let before_withdrawl;

    let after_withdrawl;
    cy.get('.borderM > :nth-child(3) > :nth-child(2)').invoke('text').then((text)=>{
        after_withdrawl = text;
        cy.log( after_withdrawl)
        cy.log(before_withdrawl +"!="+after_withdrawl);
        if(before_withdrawl !=after_withdrawl){
            cy.log("the withdrawl is success")
        }
        else{
            cy.log("the withdrawl in failure")
        }
    })
       
    
 }
 getReset(){
    cy.get('[ng-class="btnClass1"]').click();
    cy.get('[style="float:right;margin-top:-30px;"]').click();

 }
 getResetTransaction(){
    cy.get('[style="height:300px;"]').should('be.visible')
    cy.get('.fixedTopBox > [style="float:left"]').click();
 }
 
getLogoutbutton(){
    
    cy.get('.logout').should('contain','Logout').click()
}
getLogoutsuccess(){
   
    cy.get('[id="userSelect"]').select("Hermoine Granger")
    cy.get('form.ng-valid > .btn').should('contain',"Login")
    cy.log('the user is successfully logout')

}
getDecimaldeposit(){
    cy.get('.form-control').type(1.4)
}
}
export default Global;