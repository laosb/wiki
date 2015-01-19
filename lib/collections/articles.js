Articles = new Mongo.Collection("articles");

Meteor.methods({
  addArticle: function (article) {
    Articles.insert({
      title: article.title,
      content: article.content,
      createdAt: new Date()
    });
  }
});
