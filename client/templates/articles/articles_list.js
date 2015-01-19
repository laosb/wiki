Template.articlesList.helpers({
  articles: function () {
    return Articles.find({}, { sort: { createdAt: -1 }});
  }
});

