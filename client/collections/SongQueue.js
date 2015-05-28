// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // this.on('ended', function(song) {
    //    this.remove(song);
    //    // this.playFirst();
    // }, this);

    //  this.on('enqueue', function(song) {
    //   this.add(song);
    //   // this.playFirst();
    // }, this);

    // this.on('dequeue', function(song) {
    //     this.remove(song);
    //     // this.playFirst();
    // }, this);
  },

  playFirst: function() {
    // console.log(this.at(0).attributes);
    if(this.length > 0){
      this.at(0).play();
    }
  }
});
