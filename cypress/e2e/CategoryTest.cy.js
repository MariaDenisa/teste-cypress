

describe("Category Tests", () => {
    // it("Check number of products matchs the listed number", () => {
    //     cy.visit('https://magento.softwaretestingboard.com/women.html');
    //     cy.get("#page-title-heading > span").invoke("text").should("eq", "Women");
    //     let count = cy.get('a:contains("Tops")+span').invoke("text");
    //     cy.get('#narrow-by-list2 a:contains("Tops")').click();
    //     cy.get('#toolbar-amount').invoke('text').should("contain",count)
     

    //   });
      it("Check number of products matchs the listed number", () => {
        cy.visit('https://magento.softwaretestingboard.com/women.html');
        cy.get('#narrow-by-list2 a:contains("Tops")').click();
        cy.get('#select').select("24");
     

      });


      
       
    

    });