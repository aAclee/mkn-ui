describe('authentication', () => {
  it('logins with correct username and password', () => {
    cy.visit('http://localhost:3000/')

    cy.get('[data-test="username"]').type('username')
    cy.get('[data-test="password"]').type('password')
    cy.get('[data-test="submit-btn"]').click()

    // This is not the correct assertion
    cy.location('/yay').should('equal', '/')
  })
});
