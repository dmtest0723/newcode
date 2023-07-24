
describe('QUestion 2', () => {
  it('Validate MoneyCorp', () => {
    //Accessing Base URL
    cy.visit('/')
    //Handling Alerts
    cy.get("#onetrust-accept-btn-handler").click();
    //Selecting ENG-US
    cy.get("#language-dropdown-flag > span > img").click();
    cy.get("#nav-languages-overlay > div.nav-inner > ul > li:nth-child(9) > a > span > img").click();
    cy.url().should("eq","https://www.moneycorp.com/en-us/")
    //3.Click Find out more for “Foreign exchange solutions” Validate if you have arrived on the page
    cy.get("body > section > div:nth-child(4) > div:nth-child(5) > section > div > article:nth-child(1) > a > picture > img").click({ force: true });
    cy.url().should("eq","https://www.moneycorp.com/en-us/business/foreign-exchange-solutions/")
    //Search Text - issue with the search contol during execution in Chrome.
    //cy.get("body > section > header > div > div > div.u-flex.u-flex-align-center.u-flex-justify-end > div.c-header__search > form").type("international payments").click({ force: true }) 
    
  })
  it("Validates Moneycorp Links",() =>{

    //URL for Validating Links
    cy.visit('https://www.moneycorp.com/en-us/search/?q=international+payments')
    //Handling Alerts
    cy.get("#onetrust-accept-btn-handler").click();
    //Validating href for the en-us
    cy.get('a[href*="en-us"]')
      
    })

  })
  