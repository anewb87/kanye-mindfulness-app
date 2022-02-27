describe('Journal page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
        cy.visit('http://localhost:3000/journal')
    });

    it('Should display the quote of the day', () => {
        cy.get('h4')
            .should('have.text', 'You may be talented, but you’re not Kanye West.')
    });

    it('Should be able create a journal entry and submit/POST that entry', () => {
        cy.intercept('POST', '/', {
            statusCode: 201,
            body: {
                id: Date.now(),
                date: "02/14/2022",
                body: 'Kanye. What a guy.',
                type: 'journal'
            }
        })
            .get('textarea')
            .should('be.visible')
            .type('Kanye. What a guy.')
            .should('have.text', 'Kanye. What a guy.')
            .get('button')
            .should('have.text', 'Submit')
            .click()
            .url()
            .should('include', '/dashboard')
            .server()
            .route('/dashboard')
            .get('p')
            .last()
            .should('have.text', 'Kanye. What a guy.')
    });
})