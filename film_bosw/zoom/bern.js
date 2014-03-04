var args = require('system').args;

var WebPage = require('webpage');
page = WebPage.create();
page.viewportSize = {
  width: 1920,
  height: 1080
};
page.open('http://localhost:8000/api.html?resolution='+args[1]+'&layer='+args[2]);
window.setTimeout(function () {
  page.render('bern_'+args[1]+'_'+args[2]+'.png');
  phantom.exit();
  },4000); 