define(function(require, exports, module) {
     
    'use strict';
    require('backbone');
    
    var BoardModel = Backbone.Model.extend({

        initialize: function(coords) {
            
            this.set('xCoord', coords.xCoord);
            this.set('yCoord', coords.yCoord);
            this.set('type', "none");

        },

        setType: function(str) {
            this.set('type', str);
        },

        toJSON: function() {
            var json = _.clone(this.attributes);

            // need to call toJSON on nested collections and models
            json.shapes = json.shapes.toJSON();
            return json;
        }

    });

    return BoardModel;

});