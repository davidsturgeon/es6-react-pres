require("babel/register");

var koa = require('koa');
var route = require('koa-route');
var serve = require('koa-static');
var mount = require('koa-mount');
var React = require('react');
var _ = require('lodash');
var fs = require('fs');
 
var baseTemplate = fs.readFileSync('./baseTemplate.html');
var ClientApp = require('./jsx/index.jsx');

var app = koa();

app.use(mount('/fa', serve('../node_modules/font-awesome')));
app.use(mount('/public', serve('./public')));

app.use(route.get('/', function *() {
  var ClientApp = requireUncached('./jsx/index.jsx'); //dont do this in production. I just want to be able to show changes. 
  var rendered = React.renderToString(React.createElement(ClientApp));
  this.body = _.template(baseTemplate)({body:rendered});
}));

app.listen(3000);

function requireUncached(module){
    delete require.cache[require.resolve(module)]
    return require(module)
}