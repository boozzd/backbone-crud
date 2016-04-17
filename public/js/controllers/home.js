define(['collections/songs', 'views/home'], function(Songs, HomeView) {
  return function() {
    var that = this;
    that.collections.songs.fetch().done(function(data) {
      var view = new HomeView({
        collection: that.collections.songs
      });
      that.main.empty().html(view.render().el);
    });
  }
});
