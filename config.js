exports.config = {

    baseUrl: "https://angularjs.org",

    seleniumAddress: "http://192.168.99.100:32768/wd/hub",

    framework: 'jasmine2',

    multiCapabilities: [
        {
            browserName: 'chrome',
            shardTestFiles: 'true',
            maxInstances: 2
        },
        {
            browserName: 'internet explorer',
            'nativeEvents': false,
            shardTestFiles: 'true',
            maxInstances: 2
        },
        {
            browserName: 'firefox',
            shardTestFiles: 'true',
            maxInstances: 2
        }
    ],

    suites: {
        smoke: 'specs/*_spec.js'
    },


    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 300000
    },

    onPrepare: function() {

        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

        var CustomReporter = require('./utils/custom-reporter');

        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './reports/',
                screenshotsFolder: 'screenshots',
                takeScreenshots: true
                //takeScreenshotsOnlyOnFailures: true
            })
        );

        jasmine.getEnv().addReporter(
            new CustomReporter()
        );
    }
};