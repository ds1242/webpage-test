const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert')
require('chromedriver');


let driver = new Builder().forBrowser('chrome').build();

describe('Search for a trail', function() {

    it('Search for a trail and return results', async function() {
        // Navigate to Url
        await driver.get('https://www.trailforks.com/');
        // find search box and button
        let searchBox = await driver.wait(until.elementLocated(By.id('search')));
        let searchButton = await driver.wait(until.elementLocated(By.name("submitbutton['search']")));
        // search for a trail and click search
        await searchBox.sendKeys('Bobsled');
        await searchButton.click();
        // check url to see if results are generated
        let searchPageUrl = await driver.getCurrentUrl();

        // assert using node assertion
        assert.equal(searchPageUrl, 'https://www.trailforks.com/search/?search=Bobsled');

        await driver.quit();
    });

    it('Pull up trail details and information page', async function() {
        await driver.get('https://www.trailforks.com/search/?search=Bobsled');

        let searchResult = await driver.wait(until.elementLocated(By.linkText('Bobsled')));
        console.log(searchResult.length);
    })
})