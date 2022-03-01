describe('Error page', () => {
    it('Should display an error message and have a button that navigates back to dashboard page', () => {
        cy.visit('http://localhost:3000/error')
            .get('h1')
            .should('have.text', '"If everything I did failed — which it doesn\'t, it actually succeeds — just the fact that I\'m willing to fail is an inspiration. People are so scared to lose that they don\'t even try."')
            .get('a')
            .should('have.text', 'To Dashboard')
            .click()
            .server()
            .route("/dashboard")
            .get('h1')
            .contains('Welcome, Kaja!')
    })
});