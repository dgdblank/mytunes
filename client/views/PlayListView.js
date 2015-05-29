var PlayListView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.render();
  },

  events: {
    'click .addPlayList': 'handleAddPlayList',
  },

  handleAddPlayList: function() {

    var name = prompt("Enter Playlist name:");

    var newPL = new PlayListModel(name, new SongQueue());

    this.collection.add(newPL);
  },

  render: function() {

    this.$el.html('<th>PlayLists <span class="addPlayList"> || add Playlist</span></th>').append(
      this.collection.map(function(songQueue){
        return new PlayListEntryView({model: songQueue}).render();
      })
    );
    return this.$el;
  }

});
