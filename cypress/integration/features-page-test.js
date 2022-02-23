describe('Features page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/features')
  });
  it('Should have feature tiles', () => {
    cy.get('[data-testid=single-feature-tile]')
      .should('have.length', 4)
  });
  it('Should have mood feature tile', () => {
    cy.get('[data-testid=single-feature-tile]')
      .first()
      .get('p')
      .contains('Mood')
      .click()
      .url()
      .should('include', '/mood')
  });
  it('Should have journal feature tile', () => {
    cy.get('[data-testid=single-feature-tile]')
      .eq(1)
      .get('p')
      .contains('Journal')
      .click()
      .url()
      .should('include', '/journal')
  });
  it('Should have a dashboard link', () => {
    cy.get('[data-testid=dashboard-link]')
      .should('have.text', 'Dashboard')
      .click()
      .url()
      .should('include', '/dashboard')
  })
})
