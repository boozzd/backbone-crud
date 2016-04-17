define(['jquery', 'underscore', 'backbone', 'text!templates/about.html'], function($, _, Backbone, template) {
  var AboutView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(template),
    render: function() {
      this.$el.html(this.template({}));
      return this;
    }
  });
  return AboutView;
});