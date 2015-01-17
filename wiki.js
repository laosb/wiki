Articles = new Mongo.Collection("articles");

if (Meteor.isClient) {
  Meteor.subscribe("articles");

  Template.body.helpers({
    articles: function () {
      return Articles.find({}, { sort: { createdAt: -1 }});
    }
  });

  Template.body.events({
    "submit form.new-article": function (event) {
      event.preventDefault();

      var article = {
        title: $(event.currentTarget).find("[name=title]").val(),
        content: $(event.currentTarget).find("[name=content]").val()
      };

      Meteor.call("addArticle", article);

      event.target.title.value = "";
      event.target.content.value = "";
    }
  });
}

Meteor.methods({
  addArticle: function (article) {
    Articles.insert({
      title: article.title,
      content: article.content,
      createdAt: new Date()
    });
  }
});

if (Meteor.isServer) {
  Meteor.publish("articles", function () {
    return Articles.find();
  });
}
