define(function(require, exports, module) {
     
    'use strict';

    require('backbone');
    var ShapeCollection = require('data/ShapeCollection');

    var BoardModel = Backbone.Model.extend({

        initialize: function(bone) {
            var collection = new ShapeCollection(bone.shapes||[]);
            this.set('shapes', collection);
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