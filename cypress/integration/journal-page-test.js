describe('Journal page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://api.kanye.rest/', { fixture: 'kanyeQuote.json' })
        cy.visit('http://localhost:3000/journal')
    });

    it('Should welcome a user, display the quote of the day, and have navigation buttons to navigate to the mood page', () => {
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
            .contains("Vibe Check")
            .click()
            .server()
            .route("/mood")
            .get('h1')
            .contains('Vibe Check')
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
            .last()
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