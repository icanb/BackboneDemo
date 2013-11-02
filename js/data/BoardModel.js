define(function(require, exports, module) {
     
    'use strict';

    
    var BoardModel = Backbone.Model.extend({

        initialize: function(bone) {
            this.set('shapes', new ShapeCollection(bone.shapes||[]));
        },

        toJSON: function() {

        }

    });

    return WidgetModel;

});