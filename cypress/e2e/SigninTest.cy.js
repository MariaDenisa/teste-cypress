let email = "roni_cost@example.com";
let password = "roni_cost3@example.com";
let invalidEmail = "dnjanfia";
let emailErrorMessage = "Please enter a valid email address (Ex: johndoe@domain.com).";
let blankPassword = "  ";
let passwordError= "This is a required field.";
let requiredFieldMessage= "This is a required field.";
let requiredMessage = "Invalid Form Key. Please refresh the page.";

describe("Signin Tests", () => {
    // it("Captcha signin test", () => {
    //     cy.visit('https://magento.softwaretestingboard.com/');
    //     cy.contains('Sign In').click();
    //     cy.get("#email").type(email);
    //     cy.get("#pass").type(password);
    //     cy.get("#send2").click();
    //     cy.contains("Incorrect CAPTCHA", { timeout: 6000}).should("be.visible");
    //   });
      it("Wrong e-mail adress", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains ('Sign In').click();
        cy.get("#email").type(invalidEmail);
        cy.get("#pass").type(password);
        cy.get("#send2").click();
        cy.contains("Please enter a valid email address (Ex: johndoe@domain.com).").should("be.visible");
      });
      it("Invalid e-mail adress", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
        cy.get("#email").type(invalidEmail);
        cy.get("#pass").type(password);
        cy.get("#send2").click();
        cy.get("#email-error").invoke("text").should("eq", emailErrorMessage);
    });  
    it("Blank Password", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
        cy.get("#email").type(email);
        cy.get("#pass").type(blankPassword);
        cy.get("#send2").click();
        cy.get("#pass-error").invoke("text",{ timeout: 6000}).should("eq",passwordError );
    });  
    it("Blank Email", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
        cy.get("#pass").type(password);
        cy.get("#send2").click();
        cy.get("#email-error").invoke("text").should("eq", requiredFieldMessage);
    });  
    it("Blank Email and password", () => {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.contains('Sign In').click();
        cy.get("#pass").type(blankPassword);
        cy.get("#send2").click();
        cy.get(".message-error").invoke("text").should("eq", requiredMessage);
    });  
});  