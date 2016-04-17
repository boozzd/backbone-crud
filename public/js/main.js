requirejs.config({
  paths: {
    'jquery': '../libs/jquery/dist/jquery.min',
    'backbone': '../libs/backbone/backbone-min',
    'underscore': '../libs/underscore/underscore-min',
    'text': '../libs/text/text',
    'bluebird': '../libs/bluebird/js/browser/bluebird.min',
    'bootstrap': '../libs/bootstrap/dist/js/bootstrap.min',
    'backbone.Radio': '../libs/backbone.radio//build/backbone.radio',
    'backbone.Syphon': '../libs/backbone.syphon/lib/backbone.syphon.min',
    'backbone.Validation': '../libs/backbone.validation/dist/backbone-validation-min'
  },

  shim: {
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'backbone.Validation': {
      deps: ['backbone']
    },
    'backbone.Radio': {
      deps: ['backbone']
    },
    'backbone.Syphon': {
      deps: ['backbone']
    }
  }
});
requirejs(['underscore','app', 'bootstrap', 'backbone.Radio', 'backbone.Syphon', 'backbone.Validation'], function(_, App) {
  App.initialize();
});
