(function() {
  var cfg, shapeways;

  shapeways = require('shapeways');

  cfg = require('./cfg/config.js');

  /* Run the App*/
  shapeways.connect({
    username: cfg.SHAPEWAYS_USERNAME,
    password: cfg.SHAPEWAYS_PASSWORD
  }, function(err, conn) {
    
    return conn.upload({
      title: 'Test Model',
      model_filename: 'models/test2_Textures_wrl.zip'
    }, function(tmp, callback) {
      if(tmp) {
        return console.log("Error: " + tmp);
      }
      else {
        return console.log("Upload Successful! \n Model ID: " + callback);  
      }
    });
  });
}).call(this);