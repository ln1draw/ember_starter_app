App = Ember.Application.create();

App.Router.map(function(){
  this.resource('about');
  this.resource('posts');
  this.resource('post', { path: ':post_id' });
});

App.PostsRoute = Ember.Route.extend({
  model: function(){
    return posts;
  }
});

var posts = [{
  id: '1',
  title: 'WOW',
  author: { name: 'ellen'},
  date: new Date('03-09-2014'),
  excerpt: 'such ember, much post',
  body: 'wow. much generator. such generator. such text. many github. much typography. such graphic. very HTML. much github.'
}, {
  id: '2',
  title: "kittens",
  author: {name: 'ellen'},
  date: new Date('03-09-2014'),
  excerpt: 'kittens need loving, too',
  body: 'Bat eat the grass nunc tincidunt a feed me vulputate, fluffy fur hiss nibh iaculis suscipit et. Climb the curtains enim egestas nam nibh iaculis, justo tincidunt a mauris a et egestas. Faucibus tincidunt a kittens justo, nam lick lay down in your way purr stuck in a tree vulputate. Rutrum in viverra toss the mousie give me fish attack your ankles, hairball eat the grass nibh attack vel. Toss the mousie pharetra tortor sollicitudin enim rip the couch, kittens orci turpis pharetra pharetra. Quis nunc quis nunc purr feed me puking enim ut, suspendisse meow run neque libero. Eat run knock over the lamp sleep in the sink sagittis, purr iaculis sunbathe hiss adipiscing attack your ankles hairball'
}];