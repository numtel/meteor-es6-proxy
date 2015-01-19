// numtel:es6-proxy
// MIT License, ben@latenightsketches.com
var path = Npm.require('path');
var fs = Npm.require('fs');
var to5 = Npm.require('6to5');

Iron.Router.plugins.es6Proxy = function (router, options) {
  options = options || {};
  var baseDir = path.join('assets/app', options.path || '');
  router.route('/_6to5', function(){
    var query = this.params.query;
    var filename = path.join(baseDir, query.path);
    if(filename.substr(0, baseDir.length) !== baseDir){
      // Security breach trying to access file outside of baseDir
      this.response.end();
    }else{
      fs.readFile(filename, function(err, data){
        if(err){
          options.debug && console.log(err);
          this.response.end();
        }else{
          try{
            var to5Output = to5.transform(data)
          }catch(err){
            options.debug && console.log(err);
          }
          this.response.end(to5Output ? to5Output.code : null);
        }
      }.bind(this));
    }
  }, { where: 'server' });
};

