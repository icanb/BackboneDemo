require.config({
  paths: {
    "jquery"     : "./libs/jquery.min",
    "underscore" : "./libs/underscore-min",
    "backbone"   : "./libs/backbone",
    "views"      : "./views",
    "data"       : "./data"
  },

  shim: {
    "underscore": {
      exports: "_"
    },
    "backbone": {
      exports: "Backbone",
      deps: ["underscore", "jquery"]
    }
  }

});

require(['views/BoardView', 'backbone'], function(BoardView) {

  'use strict';

  $(document).ready(function() {
      console.log("Document is loaded.");

      // getting the board node
      var boardDiv = document.getElementById('board');
      // initialized
      var boardView = new BoardView();
      // element set and then rendered
      boardView.setElement(boardDiv).render();
  });

});
