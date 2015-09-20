app.service('getAlert', function($http, arr, alert){
this.getWarnings = function(zips, cb) {

  var alerts = [];
  async.each(zips, function(zip, callback){
    $http.get(`http://api.wunderground.com/api/7a10e87424a9a29a/alerts/q/${zip}.json`)
    .then(function(data){
      let dataAlerts = data.alerts;
      if(dataAlerts.length){
        var alert = {
          description: dataAlerts[0].description,
          message: dataAlerts[0].message,
          date: dataAlerts[0].date,
        }
        cb(null, alert);
      } else {
        cb(null)
      }
    })
    .catch(function(err) {
      cb(err);
    })
  }, callback);
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
