describe('Landing page', () => {
  beforeEach(() => {
        cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
        cy.intercept('GET', 'https://localhost:4020', { fixture: 'kanyeQuote.json' })
        cy.visit('http://localhost:3000')
    });

  it('Should have a wicked awesome background image', () => {
    cy.get('[data-testid=landing-page]')
      .should('have.css', 'background-image')
  });

  it('Should have a title', () => {
    cy.get('h1')
      .should('have.text', 'GETTING MINDFUL WITH KANYE')
  });

  it('Should show us a Kanye quote', () => {
    cy.get('h3')
      .should('have.text', '"You may be talented, but you’re not Kanye West."')
  });

  it('Should have a button that appears in 2 seconds that, upon click, takes you to the features page', () => {
    cy.wait(2000)
    cy.get('[data-testid=landing-button]')
      .should('be.visible')
      .click()
      .server()
      .route('/features')
  });
  
})
