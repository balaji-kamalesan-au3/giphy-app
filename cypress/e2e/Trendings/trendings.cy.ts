describe('Trendings Component', () => {

	it('renders the Trendings component', () => {
		loadPage();
		cy.get('.flex.items-center').contains('Trendings');
		cy.get('.flex.justify-center').should('exist');
	});

	it('loads more trending images when the load more button is clicked', () => {
		cy.intercept(
			{
				method: "GET",
				pathname: "**/gifs/trending**",
				query: {
					api_key: "eNiAGe2c3DEi7x0E1u9WT9bB4bFj6Dn0",
					limit: "25",
					offset: "25"
				}
			},
			{ fixture: "trendings.json" },
		).as("getNextPage");
		loadPage();

		cy.get('.flex.justify-center').should('exist');
		cy.get('.image-container').should('exist').should('have.length', 25);

		// Simulate loading more images
		cy.get('button').contains('Load More').click();

		// Check if the API call was made with the updated URL
		cy.wait('@getNextPage').its('request.url').should('include', 'offset=25');
	});

	it('should not display loading indicator in infinite scroll fetching data', () => {
		loadPage();

		cy.get('.flex.justify-center').should('exist');

		// Click on the load more button
		cy.get('button').contains('Load More').click();

		cy.get('#loading').should('not.exist');
	});

	function loadPage() {
		cy.visit('/trendings');
		cy.intercept(
			{
				method: "GET",
				pathname: '**/trending**',
				query: {
					api_key: "eNiAGe2c3DEi7x0E1u9WT9bB4bFj6Dn0",
					limit: "25",
					offset: "0"
				}
			},
			{ fixture: "trendings.json" },
		).as("getTrending");
	}
});