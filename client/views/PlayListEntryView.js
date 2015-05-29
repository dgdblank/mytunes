var PlayListEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= name %></td>'),

  events: {
    'click .removePlayList': 'handleRemovePlayList',
    'click': 'handleShowingPlayList'
  },

  handleShowingPlayList: function(){
    this.model.selected();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
