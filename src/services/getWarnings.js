app.service('getAlert', function($http, arr, alert){
this.getWarnings = function(zip) {
  $http.get(`http://api.wunderground.com/api/7a10e87424a9a29a/alerts/q/${zip}.json`)
  .then(function(data){
    console.log(data)
    // if
  })
}
// );




//     var Warn = alerts.alerts[0].description
//     if(typeof Warn !== 'undefined'){
//       warnings.push({zip: Warn});
//       console.log(Warn)
//       SMSService(Warn);
//     }
//   arr.forEach(getWarnings(zip));          );
//   promise.fail(function(error) {
//     console.log('error:', error);
//   });
// }
//
//
//
//
// window.setInterval(function(){
// }, 24*3600*1000);
// }
// });
