describe('Dashboard page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
        cy.visit('http://localhost:3000/dashboard')
    });

    it('Should welcome a user, display the quote of the day, and have navigation buttons to navigate to other pages', () => {
        cy.get('h1')
            .should('have.text', 'Welcome, Kaja!')
            .get('[data-testid=dashboard-quote]')
            .should('have.text', '"You may be talented, but you’re not Kanye West."')
            .get('[class=burger-button]')
            .click()
            .get('[class=menu]')
            .should('be.visible')
            .get('[class=dropdown-items]')
            .contains('Vibe Check')
            .click()
    });

})