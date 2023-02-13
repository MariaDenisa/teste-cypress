let no_resultds_term= "test";
let searched_term="pants";

describe("Search Tests", () => {
  it("Search for no results", () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('#search').type(no_resultds_term + "{enter}");
    cy.contains( "Your search returned no results").should("be.visible");
    cy.contains("Search results for: '"+ no_resultds_term +"'").should("be.visible");
    cy.get('#sorter').should("not.exist");
    cy.get('.products-grid').should('not.exist');
  });
  it("Search with results", () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('#search').type(searched_term + "{enter}");
    cy.contains("Search results for: '"+ searched_term +"'").should("be.visible");
    cy.get('#sorter').should("be.visible");
    cy.get('.products-grid').should('be.visible');
  });
  it("Header links exist", () => {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('.header.panel').should('be.visible');
  });
 


});