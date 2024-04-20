import Sida from "../fixtures/infofile.json"
it("Register User", () => {

    cy.visit("http://automationexercise.com");
    cy.get('[href="/login"]').click();
    cy.contains("New User Signup!").should("be.visible");
    cy.get('[data-qa="signup-name"]').type(Sida.Info.name);
    cy.get('[data-qa="signup-email"]').type(Sida.Info.email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get("#id_gender1").check();
    cy.get('[data-qa="email"]').should("have.value", "atest666@test.ge")
    cy.get('[data-qa="password"]').type(Sida.Info.Password)
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get('[data-qa="days"]').select(Sida.Info.Day)
    cy.get('[data-qa="months"]').select(Sida.Info.Month)
    cy.get('[data-qa="years"]').select(Sida.Info.Year)
    cy.get('[data-qa="first_name"]').type(Sida.Info.Firstname)
    cy.get('[data-qa="last_name"]').type(Sida.Info.Lastname)
    cy.get('[data-qa="company"]').type(Sida.Info.Company)
    cy.get('[data-qa="address"]').type(Sida.Info.Address)
    cy.get('[data-qa="address2"]').type(Sida.Info.Address2)
    cy.get('[data-qa="state"]').type(Sida.Info.State)
    cy.get('[data-qa="city"]').type(Sida.Info.City)
    cy.get('[data-qa="zipcode"]').type(Sida.Info.Zipcode)
    cy.get('[data-qa="mobile_number"]').type(Sida.Info.MobileNumber)
    cy.get('[data-qa="create-account"]').click()
    cy.contains('Account Created!').should('be.visible')
    cy.contains('Continue').click()
    cy.contains('Logged in as Mishkaaa1').should('be.visible')
    cy.get('[class="fa fa-trash-o"]').click()
    cy.contains('Account Deleted!').should('be.visible')
    cy.contains('Continue').click()
  
  // 1. Launch browser
  // 2. Navigate to url 'http://automationexercise.com'
  // 3. Verify that home page is visible successfully
  // 4. Click on 'Signup / Login' button
  // 5. Verify 'New User Signup!' is visible
  // 6. Enter name and email address
  // 7. Click 'Signup' button
  // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
  // 9. Fill details: Title, Name, Email, Password, Date of birth
  // 10. Select checkbox 'Sign up for our newsletter!'
  // 11. Select checkbox 'Receive special offers from our partners!'
  // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
  // 13. Click 'Create Account button'
  // 14. Verify that 'ACCOUNT CREATED!' is visible
  // 15. Click 'Continue' button
  // 16. Verify that 'Logged in as username' is visible
  // 17. Click 'Delete Account' button
  // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  
  })
  
describe('Login User with correct email and password', () => {
  it('passes', () => {

    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
    cy.get('[href="/login"]').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type(Sida.Info2.email)
    cy.get('[data-qa="login-password"]').type(Sida.Info2.Password)
    cy.get('[data-qa="login-button"]').click()
    cy.contains('Logged in as sidatest').should('be.visible')
    cy.get('[class="fa fa-trash-o"]').click()
    cy.contains('Account Deleted!').should('be.visible')
    
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter correct email address and password
    // 7. Click 'login' button
    // 8. Verify that 'Logged in as username' is visible
    // 9. Click 'Delete Account' button
    // 10. Verify that 'ACCOUNT DELETED!' is visible

  })
})

describe('Login User with incorrect email and password', () => {
  it('passes', () => {

    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible')
    cy.get('[href="/login"]').click()
    cy.contains('Login to your account').should('be.visible')
    cy.get('[data-qa="login-email"]').type(Sida.Info1.IncorrectEmail)
    cy.get('[data-qa="login-password"]').type(Sida.Info1.Password)
    cy.get('[data-qa="login-button"]').click()
    cy.get('.login-form > form > p').should('be.visible')


    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'Login to your account' is visible
    // 6. Enter incorrect email address and password
    // 7. Click 'login' button
    // 8. Verify error 'Your email or password is incorrect!' is visible
    
  })
})
