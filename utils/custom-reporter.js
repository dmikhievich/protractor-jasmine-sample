'use strict';

class CustomReporter {

    jasmineStarted(suiteInfo) {

        console.log('Running suite with ' + suiteInfo.totalSpecsDefined);

        console.log(suiteInfo);
    }

    suiteStarted(result){

        console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);

        console.log(result)
    }

    specStarted(result) {

        console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
    }

    specDone(result) {

        console.log('Spec: ' + result.description + ' was ' + result.status);

        for(var i = 0; i < result.failedExpectations.length; i++) {

            console.log('Failure: ' + result.failedExpectations[i].message);

            console.log(result.failedExpectations[i].stack);
        }

        console.log(result.passedExpectations.length);
    }

    suiteDone(result) {

        console.log('Suite: ' + result.description + ' was ' + result.status);

        for(var i = 0; i < result.failedExpectations.length; i++) {

            console.log('AfterAll ' + result.failedExpectations[i].message);

            console.log(result.failedExpectations[i].stack);
        }
    }

    jasmineDone(result) {

        console.log('Finished suite');
    }
}

module.exports = CustomReporter;