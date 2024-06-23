describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("displays a dropdown menu with all the routes as options", () => {
    cy.get("select").then($selects => {
      cy.wrap($selects.eq(0))
        .should("be.visible")
        .select("Agriculture, environmental and animal care")
        .select("Business and administration")
        .select("Care services")
        .select("Catering and hospitality")
        .select("Construction and the built environment")
        .select("Creative and design")
        .select("Digital")
        .select("Education and early years")
        .select("Engineering and manufacturing")
        .select("Hair and beauty")
        .select("Health and science")
        .select("Legal, finance and accounting")
        .select("Protective services")
        .select("Sales, marketing and procurement")
        .select("Transport and logistics")
    })
  })

  it("displays a second dropdown menu that is enabled by a selection in the first", () => {
    cy.get("select").then($selects => {
      cy.wrap($selects.eq(1)).should("be.disabled")
      
      cy.wrap($selects.eq(0)).select('Digital')
      cy.wrap($selects.eq(1)).should("not.be.disabled")
    })
  })
})
