const {Builder, By, Key, until} = require('selenium-webdriver');
const assert = require('assert')
require('chromedriver');


let driver = new Builder().forBrowser('chrome').build();

describe('Search for a trail', function() {
    
})