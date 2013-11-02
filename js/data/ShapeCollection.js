define(function(require, exports, module) {

    require('backbone');
    var ShapeModel = require('data/ShapeModel');

    var ShapeCollection = Backbone.Collection.extend({
        model: ShapeModel
    });

    return ShapeCollection;
});