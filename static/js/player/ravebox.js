// create a timesync instance 
var ts = timesync.create({
  server: '/timesync',
  interval: 10000
});

ts.on('change', function(offset) {
  console.log('changed offset: ' + offset + ' ms');
});

// get synchronized time 
// setInterval(function() {
//   var now = new Date(ts.now());
//   var currenttime = player.PlayMethodAbstracter.getCurrentTime() * 1000;
//   var startedAt = Number(now.valueOf()) - Number(currenttime);
//   // console.log('now: ' + now.valueOf() + ' ms');
//   // console.log('song timer: ' + currenttime)
//   console.log('song started at: ' + startedAt)
// }, 5000);

timesync = function(state) {
  if (state == 'play') {
    var now = new Date(ts.now());
    var currenttime = player.PlayMethodAbstracter.getCurrentTime() * 1000;
    var startedAt = Number(now.valueOf()) - Number(currenttime);
    var currentSong = player.playing_id
    console.log('started at: ' + startedAt);
    var time = {'started':startedAt, 'state':state, 'song':currentSong};
     socket.emit('Timing', time);
  } else {
    console.log('music paused');
    var time = {'started':startedAt, 'state':'--',  'song':'--'};
     socket.emit('Timing', time);
  }
}


socket.on('Timestamp', function(req) {
  var currTime = req.started - Number(now.valueOf())
  console.log('state: ' + req.state + ' started: ' + req.started + 'song: ' + req.currSong)
  if(req.state == 'play'){
    player.playSong(req.currSong)
    player.PlayMethodAbstracter.play();
    } else {
    player.PlayMethodAbstracter.pause();
  }
    player.setIsPlaying(!player.is_playing);
    console.log(player.playing_id)
  })