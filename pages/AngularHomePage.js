"use strict";

class AngularHomePage {

    open() {

        browser.get('/');
    }

    addHelloAddressee(addresseeName) {

        element(By.model('yourName')).sendKeys(addresseeName);
    }

    getHelloMessage() {

        return element(By.css('h1.ng-binding')).getText()
    }

    addTodoItem(todoDescription) {

        element(by.model('todoList.todoText')).sendKeys(todoDescription);

        element(by.css('[value="add"]')).click();

        return this
    }

    getAllTodoItems() {

        return element.all(by.repeater('todo in todoList.todos'))
    }

    getTodoItem(index) {

        return this.getAllTodoItems().get(index)
    }

    getLastToDoItem() {

        return this.getAllTodoItems().last()
    }

    markTodoItemAsCompleted(todoItem) {

        todoItem.element(by.css('input')).click()
    }

    getCompletedTodoItems() {

        return this.getAllTodoItems().filter(function(item){

            return item.$('span').getAttribute('class').then(function (classValue) {

                return classValue == 'done-true'
            });
        })
    }
}

module.exports = AngularHomePage;