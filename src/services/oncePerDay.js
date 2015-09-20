app.service('oncePerDay', function(arr, alert){
    function scana(){
      var warnings = [];
      var arr = [94539, 82301]      //  = cityArray        array of zips specified by users, drawn from firebase
      window.setInterval(function(){
        arr.forEach(function(item) {
          getWarnings(item)}
          );
        function getWarnings(zip) {
          var promise = $.getJSON("http://api.wunderground.com/api/7a10e87424a9a29a/alerts/q/" + zip + ".json");
          promise.success(function(alerts) {
            console.log(alerts)
            var Warn = alerts.alerts[0].description
            if(typeof Warn !== 'undefined'){
              warnings.push({zip: Warn});
              console.log(Warn)
              SMSService(Warn);
            }
          });
          promise.fail(function(error) {
            console.log('error:', error);
          });
        }
      }, 24*3600*1000);
    }
});