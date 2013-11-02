define(function(require, exports, module) {

    'use strict';

    require('backbone');


    var BoardModel = require('data/BoardModel');
    var ShapeView  = require('views/ShapeView');


    var BoardView = Backbone.View.extend({

        mode: "circle",

        events: {
            // connect save button to save
            // connect load button to load
            // make the circle and square change the mode property
        },

        initialize: function() {
            this.model = new BoardModel();
        },

        save: function() {

        },

        load: function() {

        },

        render: function() {
            var canvasDiv = document.createElement('div');
            canvasDiv.id = "canvas";
            canvasDiv.className = "canvas";
            this.canvasDiv = canvasDiv;

            this.el.appendChild(canvasDiv);
            
            this.renderShapes();

            return this;
        },

        renderShapes: function() {
            this.model.get('shapes').each(function(shapeModel) {

                if(shapeModel.get('type') == "circle") {
                    var coordinates = {
                        x: shapeModel.get('xCoord'),
                        y: shapeModel.get('yCoord')
                    };
                    var shapeView = new CircleView(coordinates);
                    this.canvasDiv.appendChild(shapeView.render().el);
                }
                // support Square shapes here
            }, this);
        }

    });


    return BoardView;
});