define(function(require, exports, module) {

    'use strict';
    require('backbone');

    var CircleView = Backbone.View.extend({

        className: 'shape-widget circle',

        events: {
            // TODO: remove the element on click
        },

        initialize: function(shapeModel) {
            _.bindAll(this);
            this.model = shapeModel;
        },

        render: function() {
            
            this.el.style.left = this.model.get('xCoord') + 'px';
            this.el.style.top  = this.model.get('yCoord') + 'px';

            return this;
        }

    });


    return CircleView;
});