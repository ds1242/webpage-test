const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert')
require('chromedriver');



let driver = new Builder().forBrowser('chrome').build();

// async function login() {  

//   // Log into tech blog to add a post
//   let login =  await driver.wait(until.elementLocated(By.id('login')))
//   login.click();

//   let email = await driver.wait(until.elementLocated(By.id('email-login')));
//   let password = await driver.wait(until.elementLocated(By.id('password-login')));
//   let loginClick = await driver.wait(until.elementLocated(By.className('btn-secondary')));
//   let home = await driver.wait(until.elementLocated(By.id('home')));
//   await email.sendKeys('tt25@tt25.com');
//   await password.sendKeys('password');
//   await loginClick.click();
//   await home.click();

// }


// async function createPost() {
  
  

// }

// describe block

describe('Login into trailforks as a user', function() {

  it("successfully log into trailforks as a user", async function() {
    // this.timeout(10000);
    // Navigate to Url
    await driver.get('https://www.trailforks.com/');
    
    // Log into trailforks
    
    // click side bar
    let login =  await driver.wait(until.elementLocated(By.id('login')));
    login.click();
    
    // find the correct fields before adding data and submitting
    let username = await driver.wait(until.elementLocated(By.id('username')));
    let password = await driver.wait(until.elementLocated(By.id('password')));
    let loginClick = await driver.wait(until.elementLocated(By.name("submitbutton['Login']")));
    await username.sendKeys('webTest12');
    await password.sendKeys('webTest12!!');
    await loginClick.click();
    
    // if successfully logged in from home page the current URL will be the main trailforks url
    let userProfilePage = await driver.getCurrentUrl();
    
    
    // assert using node assertion  
    assert.equal(userProfilePage, 'https://www.trailforks.com/');
    
    await driver.quit();
    
  });

});



async function login() {

  // Navigate to Url
  await driver.get('https://www.trailforks.com/');
  
  // Log into trailforks

  // click side bar
  let login =  await driver.wait(until.elementLocated(By.id('login')));
  login.click();
  

  let username = await driver.wait(until.elementLocated(By.id('username')));
  let password = await driver.wait(until.elementLocated(By.id('password')));
  let loginClick = await driver.wait(until.elementLocated(By.name("submitbutton['Login']")));
  await username.sendKeys('webTest12');
  await password.sendKeys('webTest12!!');
  await loginClick.click();
  
  // let homePage = await driver.wait(until.elementLocated(By.id('logo')))
  // homePage.click();
  
  // let userMenu = await driver.wait(until.elementLocated(By.id('userMenu')));

  let userProfilePage = await driver.getCurrentUrl();
  

  // assert using node assertion  
  assert.strictEqual(userProfilePage, 'https://www.trailforks.com/');

  await driver.quit();
  
    
  };


// login();
