define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/modal.html',
  'models/song'
], function($, _, Backbone, template, SongModel) {
  var ModalView = Backbone.View.extend({
    tagName: 'div',
    id: 'add_song',
    className: 'modal fade',
    template: _.template(template),
    events: {
      'click .close-btn': 'closeModal',
      'submit form': 'formSubmit'
    },
    render: function(data) {
      this.$el.html(this.template(data));
      return this;
    },
    show: function(id) {
      if (this.collection.get(id)) {
        this.model = this.collection.get(id);
      } else {
        this.model = new SongModel();
      }
      this.render(this.model.toJSON());
      this.$el.modal('show');
      Backbone.Validation.bind(this);
    },
    closeModal: function() {
      this.$el.modal('hide');
    },
    formSubmit: function(e) {
      e.preventDefault();
      var that = this;
      var data = Backbone.Syphon.serialize(this);
      this.model.set(data);
      if (this.model.isValid(true)) {
        this.collection.create(this.model, {
          wait: true,
          success: function() {
            that
            that.closeModal.call(that);
          }
        });
      }
    }
  });
  return ModalView;
})
