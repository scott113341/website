app.service('blogPostService', function() {
  this.posts = function() {
    return [
      {
        title: 'First Post',
        path: '2014-6-22-first-post',
        date: new Date(2014, 6-1, 22),
        tldr: 'My first blog post, mostly for testing purposes.  Nature and content of blog TBD.'
      }
    ];
  };
});
