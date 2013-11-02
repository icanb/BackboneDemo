define(function(require, exports, module) {

    'use strict';

    require('backbone');

    var BoardView = Backbone.View.extend({

        mode: "circle",

        events: {

        },

        initialize: function() {

        },

        render: function() {
            var canvasDiv = document.createElement('div');
            canvasDiv.id = "canvas";
            canvasDiv.className = "canvas";

            this.el.appendChild(canvasDiv);

            return this;
        }

    });


    return BoardView;
});