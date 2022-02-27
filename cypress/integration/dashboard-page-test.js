describe('Dashboard page', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
      cy.intercept('GET', 'https://localhost:4020/', { fixture: 'user.json' })
      cy.visit('http://localhost:3000/dashboard')
    });

    it('Should welcome a user, display the quote of the day, and have navigation buttons to navigate to the mood page', () => {
      cy.get("h1")
        .should("have.text", "Welcome, Kaja!")
        .get("[data-testid=dashboard-quote]")
        .should(
          "have.text",
          '"You may be talented, but you’re not Kanye West."'
        )
        .get("[data-testid=burger-button]")
        .click()
        .get("[data-testid=menu]")
        .should("be.visible")
        .get("[data-testid=dropdown-items]")
        .contains("Vibe Check")
        .click()
        .server()
        .route("/mood")
        .get('h1')
        .contains('Vibe Check')
    });
  
  it('Should be able to navigate to journal page', () => {
    cy.get("[data-testid=burger-button]")
      .click()
      .get("[data-testid=dropdown-items]")
      .contains("Journal")
      .click()
      .server()
      .route("/journal")
      .get('h1')
      .contains('Journal Page')
  });

  it('Should be able to navigate to the features page', () => {
    cy.get('a')
      .first()
      .should('have.attr', 'href', '/features')
      .click()
      .server()
      .route("/features")
  });

  it('Should see no more than 7 of my past moods', () => {
    cy.get("[data-testid=roll-in-left]")
      .its('length')
      .should('be.lessThan', 8)
  });

  it('Should display my journal entries, and have a method to delete them', () => {
    cy.get("[data-testid=journal-card]")
      .should("have.length")
      .get("button")
      .last()
      .click()
      .get("[data-testid=journal-card]")
      .should("have.length", -1)
  })
})