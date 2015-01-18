var path = Npm.require('path');
var fs = Npm.require('fs');
var to5 = Npm.require('6to5');

Iron.Router.plugins.es6Proxy = function (router, options) {
  options = options || {};
  var root = options.path || '';
  router.route('/_6to5', function(){
    var query = this.params.query;
    var filename = path.join('assets/app', root, query.path);
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
  }, { where: 'server' });
};

