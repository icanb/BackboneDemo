require.config({
  paths: {
    "jquery" : "./libs/jquery.min",
    "underscore" : "./libs/underscore-min",
    "backbone" : "./libs/backbone"
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

require(['backbone'], function() {

  'use strict';

  $(document).ready(function() {
      console.log("HELLO");
  });

});
