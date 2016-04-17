define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home.html',
  'views/song',
  'views/modal'
], function($, _, Backbone, template, SongView, ModalView) {
  var HomeView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(template),
    render: function() {
      this.$el.html(this.template({}));
      this.renderSongs();
      return this;
    },
    events: {
      'click .add-song': 'addSong'
    },
    initialize: function() {
      this.modalView = new ModalView({collection: this.collection});
      this.listenTo(this.collection, 'change add reset remove', this.renderSongs);
      this.songChannel = Backbone.Radio.channel('songs');
      this.songChannel.reply('edit',  this.editSong.bind(this));
    },
    addSong: function(e) {
      this.modalView.show();
    },
    editSong: function(id) {
      this.modalView.show(id);
    },
    renderSongs: function() {
      var that = this;
      that.$el.find('#list').empty();
      this.collection.map(function(model) {
        var song = new SongView({model: model});
        that.$el.find('#list').append(song.render().el)
      });
    }
  });
  return HomeView;
});
