describe('working with other element', () => {
  before(()=> {
    cy.log('before')
  });

  beforeEach(()=> {
    cy.visit('https://mingo.vn');
    cy.log('before each')
  })
  it('one click button', () => {
    cy.get('#clickButton').click();
    cy.get('#message').should('have.text','Button clicked!')
  })

  it(('double click button'), ()=> {
    cy.get('#dblClickButton').dblclick();
    cy.get('#message').should('have.text','Button double-clicked!')
  })

  it(('right click button'), ()=> {
    cy.get('#rightClickButton').rightclick();
    cy.get('#message').should('have.text','Right button clicked!');
  })

  it(('check on alert window'),()=> {
    cy.get('#alertButton').click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal('This is an alert message!')
    })
  })

  it(('check on confirm window click on yes'), ()=> {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('Do you confirm this action?');
      return true
    } );
    cy.get('#confirmResult').should('have.text','Confirm result: true');
  })

  it(('check on confirm window click on cancel'),()=> {
    cy.get('#confirmButton').click();
    cy.on('window:confirm', (text1)=> {
      expect(text1).to.equal('Do you confirm this action?')
      return false
    })
    // cy.get('#confirmButton').click();
    cy.get('#confirmResult').should('have.text','Confirm result: false')
  })

  it(('check with prompt alert window'), ()=> {
    cy.window().then((text) =>{
      cy.stub(text,'prompt').returns('this is a long text')
    })
    cy.get('#promptButton').click();
    cy.get('#promptResult').should('have.text','Prompt result: this is a long text');  
  })

  it(('check with screen size and screenshot'),()=>{
    cy.visit('https://mingo.vn')
    cy.viewport(800,600);
    // cy.screenshot();
  })

  it(('change property in tag'),()=> {
    cy.visit('https://mingo.vn')
    cy.get('#some-text').invoke('css','color','rgb(0, 0, 0)')
    .should('have.css','color','rgb(0, 0, 0)')
  })

  afterEach(()=> {
    cy.log('after each')
  })

  after(()=> {
    cy.log('after ')
  })
})