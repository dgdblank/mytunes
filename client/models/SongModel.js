// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  addToQueue: function() {
    this.trigger('addToQueue', this);
  },

  removefromQueue: function() {
    this.trigger('removeFromQueue', this);
  }

});
