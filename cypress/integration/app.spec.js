describe("App", () => {
  beforeEach(() => {
    // go to main page
    cy.visit("/");
  });

  it("should display main page", () => {
    // check our page header
    cy.contains("Welcome to cypress-tests");

    cy.window().then(win => {
      // get the root component of our app
      const root = win.ng.probe(win.getAllAngularRootElements()[0])
      const component = root.componentInstance;

      // set the title of the component (see app.component.ts)
      component.title = "Angular";

      // trigger change detection, so we can actually see the new title
      root.injector.get(win.ng.coreTokens.ApplicationRef).tick();

      // and there it is
      cy.contains("Welcome to Angular");
    });
  });
});
