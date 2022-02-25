describe('Features page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000/features')
  });
  it('Should have feature tiles', () => {
    cy.get('[data-testid=single-feature-tile]')
      .should('have.length', 2)
  });
  it('Should have a mood tile/link that navigates to the mood page', () => {
    cy.get('[data-testid=single-feature-tile]')
      .first()
      .click()
      .url()
      .should('include', '/mood')
  });
  it('Should have a journal tile/link that navigates to the journal page', () => {
    cy.get('[data-testid=single-feature-tile]')
      .eq(1)
      .click()
      .url()
      .should('include', '/journal')
  });
  it('Should have a dashboard link that navigates to the dashboard page', () => {
    cy.get('[data-testid=dashboard-link]')
      .should('have.text', 'Dashboard')
      .click()
      .url()
      .should('include', '/dashboard')
  })
})
