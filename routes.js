Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/news', function () {
  this.render('news');
});

Router.route('/tutorials', function () {
  this.render('tutorials');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/contact', function () {
  this.render('contact');
});

Router.route('/store', function () {
  this.render('store');
});

Router.route('/blog', function () {
  this.render('blogPage');
});

Router.route('/admin/blog', function () {
  this.render('admin');
});
