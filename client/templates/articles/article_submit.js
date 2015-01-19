Template.articleSubmit.events({
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
