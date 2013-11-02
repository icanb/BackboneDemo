define(function(require, exports, module) {

    'use strict';

    require('backbone');

    var BoardModel = require('data/BoardModel');
    var ShapeModel = require('data/ShapeModel');
    var CircleView = require('views/CircleView');


    var BoardView = Backbone.View.extend({

        mode: "circle",

        events: {
            'click .alert' : 'alert'
            // click on .canvas should call addShape
            // connect save button to save
            // connect load button to load
            // make the circle and square change the mode property
        },

        initialize: function() {
            _.bindAll(this);

            this.model = new BoardModel({});

            // listeners (read(or ask me) more about observer pattern)
            this.listenTo(this.model.get('shapes'), 'add', this.renderShape);
            this.listenTo(this.model, 'reset', this.reset);

        },

        save: function() {
            this.model.saveLocal('paint');
        },

        load: function() {
            this.model.loadLocal('paint');
        },

        alert: function() {
            alert('Hey Girl, Are you caffeine?');
        },

        reset: function() {
            this.listenTo(this.model.get('shapes'), 'add', this.renderShape);
            this.canvasDiv.innerHTML = '';
            this.renderShapes();
        },

        render: function() {

            var canvasDiv = document.createElement('div');
            canvasDiv.id = "canvas";
            canvasDiv.className = "canvas";
            this.canvasDiv = canvasDiv;

            this.el.appendChild(canvasDiv);

            this.renderShapes();

            console.log(this.el);
            return this;
        },

        renderShapes: function() {
            this.model.get('shapes').each(function(shapeModel) {
                console.log(shapeModel);
                this.renderShape(shapeModel);
            }, this);
        },

        renderShape: function(shapeModel) {

            // support Square shapes here
            if (shapeModel.get('type') == "circle") {
                var shapeView = new CircleView(shapeModel);
                this.canvasDiv.appendChild(shapeView.render().el);
            }

        },

        addShape: function(e) {
            console.log("add shape");
            var coord = this.getCoordinates(e);

            var circleModel = new ShapeModel(coord);
            console.log(this.mode);
            if (this.mode == "circle") {
                circleModel.setType('circle');
            }
            console.log(circleModel);
            this.model.get('shapes').add(circleModel);
        },

        getCoordinates: function(e) {
            var x;
            var y;
            if (e.pageX || e.pageY) {
                x = e.pageX;
                y = e.pageY;
            } else {
                x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            console.log(this.canvasDiv.offsetLeft);
            x -= this.canvasDiv.getBoundingClientRect().left + 30;
            y -= this.canvasDiv.getBoundingClientRect().top + 30;

            return {xCoord: x, yCoord: y};
        }

    });

    return BoardView;
});