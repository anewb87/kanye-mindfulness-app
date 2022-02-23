describe('Mood page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/mood')
  });
  it('Should have a kanye face', () => {
    cy.get('img')
      .should('have.attr', 'src', '/static/media/kanye3.42c9905149cdaf49e335.png')
  });
  it("Should have a slider that changes the kanye value and face", () => {

    const currentValue  = 3;
    const targetValue = 4;
    const increment = 1;
    const steps = (targetValue - currentValue) / increment;
    const arrows = '{rightarrow}'.repeat(steps);

    cy.get('.rc-slider-handle')
      .should('have.attr', 'aria-valuenow', 3)
      .type(arrows)

    cy.get('.rc-slider-handle')
      .should('have.attr', 'aria-valuenow', 4)
  });
  it("Should have a submit link", () => {
    cy.get('[data-testid=submit-link]')
      .click()
      .url()
      .should('include', '/dashboard')
    cy.get('[data-testid=mood-card]')
      .should('have.length', 5)
  });
});
