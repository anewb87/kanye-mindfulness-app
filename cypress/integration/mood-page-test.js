describe('Mood page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/mood')
  });

  it('Should welcome a user, display the quote of the day, and have navigation buttons to navigate to the journal page', () => {
    cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
      .visit('http://localhost:3000/dashboard')
      .get("h1")
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
      .contains("Journal")
      .click()
      .server()
      .route("/journal")
      .get('h3')
      .contains('Journal')
  });

  it('Should be able to navigate to the features page', () => {
    cy.visit('http://localhost:3000/dashboard')
      .get('a')
      .first()
      .should('have.attr', 'href', '/features')
      .click()
      .server()
      .route("/features")
  });

  it('Should have a cook Kanye album-art inspired background image', () => {
    cy.get('[data-testid=mood-page]')
      .should('have.css', 'background-image')
  });

  it('Should display a Kanye mood face', () => {
    cy.get('img')
      .eq(2)
      .should('have.attr', 'src', '/static/media/kanye3.42c9905149cdaf49e335.png')
  });

  it("Should have a slider that changes the Kanye value and face", () => {

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

  it("Should have a submit link that posts the mood", () => {
    cy.get('[data-testid=submit-link]')
      .click()
      .url()
      .should('include', '/dashboard')
    cy.get('[data-testid=roll-in-left]')
      .its('length')
      .should('be.gt', 4)
  });

})
