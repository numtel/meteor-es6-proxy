var PREFIX = 'numtel:es6-proxy - ';

Router.plugin('es6Proxy', {
  path: '../packages/local-test_numtel_es6-proxy/test/proxy-root',
  debug: true
});

Tinytest.add(PREFIX + 'Success', function(test){
  var url = Meteor.absoluteUrl('_6to5?path=working.es6');
  var result = HTTP.get(url);
  test.include(result.content, 'Some file here');
});

Tinytest.add(PREFIX + 'Out of directory', function(test){
  var url = Meteor.absoluteUrl('_6to5?path=../sample.es6');
  var result = HTTP.get(url);
  test.equal(result.content, '');
});
