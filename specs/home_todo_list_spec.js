var AngularHomePage = require('../pages/AngularHomePage');

const DEFAULT_TODO_ITEMS_COUNT = 2;
const DEFAULT_TODO_COMPLETED_ITEMS_COUNT = 1;
const TEST_TODO_ITEM = 'write first protractor test';

describe("angularjs homepage todo list", function() {

    var homePage = new AngularHomePage();

    beforeEach(function() {

        homePage.open();
    });

    it('should add a todo', function() {

        homePage.addTodoItem(TEST_TODO_ITEM);

        expect(homePage.getAllTodoItems().count()).toEqual(DEFAULT_TODO_ITEMS_COUNT + 1);

        var lastTodoItem = homePage.getLastToDoItem();

        expect(lastTodoItem.getText()).toEqual(TEST_TODO_ITEM);

        homePage.markTodoItemAsCompleted(lastTodoItem);

        expect(homePage.getCompletedTodoItems().count()).toEqual(DEFAULT_TODO_COMPLETED_ITEMS_COUNT + 1);
    });
});