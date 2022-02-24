describe('Dashboard page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
        cy.visit('http://localhost:3000/dashboard')
    });

    it('Should welcome a user, display the quote of the day, and display buttons to navigate to other pages', () => {
        cy.get('h2')
            .should('have.text', 'Welcome, User! 💎 ')
            .get('[data-testid=dashboard-quote]')
            .should('have.text', 'You may be talented, but you’re not Kanye West.')
    });

})