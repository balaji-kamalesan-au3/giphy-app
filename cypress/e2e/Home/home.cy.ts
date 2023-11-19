describe('Home Component', () => {
  it('renders the Home component with SearchBox and Link to Trendings', () => {
    loadPage()
    cy.get('.flex.justify-center').should('exist');
    cy.get('.bg-gradient-to-r').should('exist').contains('Trendings');
    cy.get('input[type="text"]').should('exist');
    cy.get('#search-action').should('exist');
  });

  it('loads images when a search term is entered and search button is clicked', () => {
    let query = "cats";
    loadPage(query);
    cy.get('input[type="text"]').type(query); // Replace 'cats' with your test search term
    cy.get('#search-action').click();

    cy.wait('@getSearch').its('request.url').should('include', `q=${query}`);
    cy.get('.image-container').should('have.length.greaterThan', 0);
  });

  it('displays a message when no search term is entered', () => {
    cy.visit('/');
    cy.get('.flex.justify-center').should('exist');

    // Do not enter any search term and click search button
    cy.get('#search-action').click();
    cy.contains('Please Enter a Search Term').should('exist');
    cy.get('.image-grid').should('not.exist'); // Replace '.image-grid' with your image grid component class
  });

  function loadPage(query: string = "") {
    cy.visit('/');
    cy.intercept(
      {
        method: "GET",
        pathname: '**/search**',
        query: {
          api_key: "eNiAGe2c3DEi7x0E1u9WT9bB4bFj6Dn0",
          q: query,
          limit: "25",
          offset: "0"
        }
      },
      { fixture: "search.json" },
    ).as("getSearch");
  }
});