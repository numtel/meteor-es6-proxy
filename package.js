Package.describe({
  name: 'numtel:es6-proxy',
  summary: 'Iron:Router Plugin for rendering transpiled ES6 -> ES5 to client',
  version: '0.0.2',
  git: 'https://github.com/numtel/meteor-es6-proxy.git'
});

Npm.depends({
  '6to5': '2.12.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('es6-proxy.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('http');
  api.use('templating');
  api.use('iron:router@1.0.7')
  api.use('numtel:es6-proxy');
  api.addFiles('test/empty.html');
  api.addFiles('test/router.js');
  api.addFiles('test/sample.es6', 'server', { isAsset: true });
  api.addFiles('test/proxy-root/working.es6', 'server', { isAsset: true });
  api.addFiles('test/es6-proxy.js', 'server');
});
