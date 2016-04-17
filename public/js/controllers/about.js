define(['views/about'], function(AboutView) {
  return function() {
    var view = new AboutView();
    this.main.empty().html(view.render().el);
  }
});
