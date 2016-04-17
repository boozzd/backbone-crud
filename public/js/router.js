define([
  'backbone',
  'jquery',
  'controllers/home',
  'controllers/about',
  'collections/songs'
], function(Backbone, $, HomeCtrl, AboutCtrl, SongsCollection) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'home',
      'home': 'home',
      'about': 'about'
    }
  });
  var intitialize = function() {
    var appRouter = new AppRouter();
    appRouter.collections = {
      songs: new SongsCollection()
    }
    appRouter.main = $('#main');
    appRouter.on('route:home', HomeCtrl);
    appRouter.on('route:about', AboutCtrl);
    Backbone.history.start();
  };
  return {
    initialize: intitialize
  }
});
