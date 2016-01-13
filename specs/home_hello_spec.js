var AngularHomePage = require('../pages/AngularHomePage');

const TEST_HELLO_ADDRESSEE = 'John';

describe("angularjs homepage 'hello' module", function() {

    var homePage = new AngularHomePage();

    beforeEach(function() {

        homePage.open();
    });

    it('should add a Hello addressee', function() {

        homePage.addHelloAddressee(TEST_HELLO_ADDRESSEE);

        expect(homePage.getHelloMessage()).toEqual(`Hello ${TEST_HELLO_ADDRESSEE}!`);
    });
});

describe("Parent suite", function() {
    var a;

    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });

    describe("Child suite", function() {
        var a;

        it("and so is a spec", function() {
            a = true;

            expect(a).toBe(true);
        });
    });
});