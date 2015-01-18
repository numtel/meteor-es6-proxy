Package.describe({
  name: 'numtel:es6-proxy',
  summary: 'Iron:Router Plugin for rendering transpiled ES6 -> ES5 to client',
  version: '0.0.1',
  git: 'https://github.com/numtel/meteor-es6-proxy.git'
});

Npm.depends({
  '6to5': '2.12.5'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('es6-proxy.js', 'server');
});
