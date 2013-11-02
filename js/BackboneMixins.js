define(['backbone'], function() {

    Backbone.Model.prototype.saveLocal = function(key) {
        if (typeof(Storage) !== "undefined") {
            // Yes! localStorage and sessionStorage support!
            // Some code.....
            var json = this.toJSON();
            localStorage.setItem(key, JSON.stringify(json));

        } else {
            console.error('This browser does not support local storage.');
        }
    };

    Backbone.Model.prototype.loadLocal = function(key) {
        if (typeof(Storage) !== "undefined") {
            // Yes! localStorage and sessionStorage support!
            // Some code.....
            var retrievedObject = localStorage.getItem(key);
            var json = JSON.parse(retrievedObject);

            console.log(json);
            this.initialize(json);
            this.trigger('reset');

        } else {
            console.error('This browser does not support local storage.');
        }
    };

});