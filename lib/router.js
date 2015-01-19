Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  subscriptions: function() {
    this.articlesSub = Meteor.subscribe('articles');
  }
});

ArticlesListController = RouteController.extend({
  template: 'articlesList'
});

Router.route('/', {
  name: 'articlesList',
  controller: ArticlesListController
});

Router.route('/submit', {
  name: 'articleSubmit'
});
