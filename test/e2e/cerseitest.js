var config = require('../../nightwatch.conf.js');

module.exports = { // addapted from: https://git.io/vodU0
  '@tags': ['cerseiTests'],
  'Register Assert Title': function(browser) {
    browser
      .url('https://cersei.apps.stl.pcfstage00.mastercard.int/register')
      .waitForElementVisible('body')
      .assert.title('cersei')
      .saveScreenshot(config.imgpath(browser) + 'a-screenshot-description.png')
      .setValue('input[name="card"]', '5413850000000123')
      .setValue('input[name="month"]', '9')
      .setValue('input[name="year"]', '20')
     // .saveScreenshot(config.imgpath(browser) + 'nightwatch-roolz1.png')
      .end();
  }
};
