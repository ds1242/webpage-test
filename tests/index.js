const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert')
require('chromedriver');


let driver = new Builder().forBrowser('chrome').build();

async function login() {  

  // Log into tech blog to add a post
  let login =  await driver.wait(until.elementLocated(By.id('login')))
  login.click();

  let email = await driver.wait(until.elementLocated(By.id('email-login')));
  let password = await driver.wait(until.elementLocated(By.id('password-login')));
  let loginClick = await driver.wait(until.elementLocated(By.className('btn-secondary')));
  let home = await driver.wait(until.elementLocated(By.id('home')));
  await email.sendKeys('tt25@tt25.com');
  await password.sendKeys('password');
  await loginClick.click();
  await home.click();

}


async function createPost() {
  
  

}

async function example() {

  // Navigate to Url
  await driver.get('https://guarded-cliffs-83768.herokuapp.com/');
  
  // Log into tech blog to add a post
  let login =  await driver.wait(until.elementLocated(By.id('login')))
  login.click();

  let email = await driver.wait(until.elementLocated(By.id('email-login')));
  let password = await driver.wait(until.elementLocated(By.id('password-login')));
  let loginClick = await driver.wait(until.elementLocated(By.className('btn-secondary')));
  let home = await driver.wait(until.elementLocated(By.id('home')));
  await email.sendKeys('tt25@tt25.com');
  await password.sendKeys('password');
  await loginClick.click();
  await home.click();
  // await home.click();

  // // navigate to post page
  // let dashboardButton = await driver.findElement(By.className('btn-info'));
  // dashboardButton.click();

  // // enter post informaiton
  // let postTitle = await driver.wait(until.elementLocated(By.id('post-title')));
  // let postInfo = await driver.findElement(By.id('post-text'));
  // let createPost = await driver.findElement(By.id('create-blog'));

  // await postTitle.sendKeys('New Post With Selenium');
  // await postInfo.sendKeys('This is the text section of a new post created as I am testing this webpage');
  // await createPost.click();

  // let createButton = await driver.findElement(By.id('create-blog'));
  // createButton.click();
  



  

  // assert
  // let allHeaderText = await driver.findElements(By.className("post")).getText().then(function(values) {
  //   return values;
  // });
  // console.log(allHeaderText)
  
  // assert.strictEqual(allHeaderText, 'New Post With Selenium');

  // await driver.quit();
  
    
  };

example();

