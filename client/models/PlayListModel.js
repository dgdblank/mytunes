var PlayListModel = Backbone.Model.extend({

  initialize(name) {
    this.set('name', name);
    this.set('collection', new SongQueue());
  },

  selected: function(){
    this.trigger('selected', this);
  }
});
