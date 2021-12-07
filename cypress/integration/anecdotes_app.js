describe('Anecdote app', function() {

  beforeEach(function() {
    cy.visit('http://localhost:5000')
  })

  it('page can be opened', function(){

    cy.contains('Anecdotes')
    cy.contains('create new')
  })

  it('anecdote can be added', function(){

    cy.get('input:last').type('new anecdote')
    cy.get('button').contains('create').click()
    cy.contains('new anecdote')
  })
})