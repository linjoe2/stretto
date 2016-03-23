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
  console.log(state); 
  if (state = 'play') {
    var now = new Date(ts.now());
    var currenttime = player.PlayMethodAbstracter.getCurrentTime() * 1000;
    var startedAt = Number(now.valueOf()) - Number(currenttime);
    return console.log('started at: ' + startedAt);
  }else {
    return console.log('music paused');
  }
}