define(function(require, exports, module) {
     
    'use strict';
    require('backbone');
    
    var ShapeModel = Backbone.Model.extend({

        initialize: function(coords) {
            
            this.set('xCoord', coords.xCoord);
            this.set('yCoord', coords.yCoord);

        },

        setType: function(str) {
            this.set('type', str);
        },

        toJSON: function() {
            var json = _.clone(this.attributes);
            // need to call toJSON on nested collections and models
            return json;
        }

    });

    return ShapeModel;

});