var koa = require('koa');
var app = koa();
 
// x-response-time
 
app.use(function *(next){
	if(this.url == '/') {
	  var start = new Date;
	  console.log('before yield - response time')
	  yield next;
	  var ms = new Date - start;
	  this.set('X-Response-Time', ms + 'ms');
	  console.log('after yield - adding response time ' + ms)
  }
});
 
// logger
 
app.use(function *(next){
	if(this.url == '/') {
	  console.log('before yield - method')
	  var start = new Date;
	  yield next;
	  var ms = new Date - start;
	  console.log('after yield - %s %s - %s', this.method, this.url, ms);
	}
});
 
// response
 
app.use(function *(){
  console.log('Change Body');
  this.body = 'Hello World';
});
 
app.listen(3000);