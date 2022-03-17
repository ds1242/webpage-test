// const { describe } = require("yargs");
const { helloSelenium } = require('./firstScript');
const { test, expect } = require("@jest/globals");

test('test selenium script', () => {
    try {
        expect(helloSelenium()).toBeCalled();
        done();
    } catch (error) {
        done(error);
    };
})