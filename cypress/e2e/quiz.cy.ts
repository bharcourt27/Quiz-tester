describe('quiz component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should display a multiple choice question and answers', () => {
    cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('.card h2').should('be.visible');
    });
  
    it('should answer question and show next question then show results at the end of quiz', () => {
        cy.get('button').contains('Start Quiz').click();
        for (let i = 0; i < 10; i++) {
          cy.get('.card .btn').first().click();
          cy.get('.card').should('be.visible');
        }
        cy.get('button').contains('Take New Quiz').should('be.visible');
    });
  
})
