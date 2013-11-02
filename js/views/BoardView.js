define(function(require, exports, module) {

    'use strict';

    require('backbone');

    var BoardModel = require('data/BoardModel');
    var ShapeModel = require('data/ShapeModel');
    var CircleView = require('views/CircleView');
    var SquareView = require('views/SquareView');


    var BoardView = Backbone.View.extend({

        mode: "circle",

        events: {
            'click .alert' : 'alert',
            'click .canvas': 'addShape',
            'click .save'  : 'save',
            'click .load'  : 'load',
            'click .square': 'switchToSquare',
            'click .circle': 'switchToCircle'
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

            this.$el.find('.circle').addClass('active');

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
                this.renderShape(shapeModel);
            }, this);
        },

        renderShape: function(shapeModel) {

            // support Square shapes here
            if (shapeModel.get('type') == "circle") {
                var shapeView = new CircleView(shapeModel);
                this.canvasDiv.appendChild(shapeView.render().el);
            }

            if (shapeModel.get('type') == "square") {
                var squareView = new SquareView(shapeModel);
                this.canvasDiv.appendChild(squareView.render().el);
            }

        },

        addShape: function(e) {
            var coord = this.getCoordinates(e);

            var shapeModel = new ShapeModel(coord);
            if (this.mode == "circle") {
                shapeModel.setType('circle');
            }
            if (this.mode == "square") {
                shapeModel.setType('square');
            }
            this.model.get('shapes').add(shapeModel);
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

            x -= this.canvasDiv.getBoundingClientRect().left + 30;
            y -= this.canvasDiv.getBoundingClientRect().top + 30;

            return {xCoord: x, yCoord: y};
        },

        switchToSquare: function() {
            this.mode = "square";
            this.$el.find('.active').removeClass('active');
            this.$el.find('.square').addClass('active');
        },

        switchToCircle: function() {
            this.mode = "circle";
            this.$el.find('.active').removeClass('active');
            this.$el.find('.circle').addClass('active');
        }

    });

    return BoardView;
});