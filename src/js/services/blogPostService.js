app.service('blogPostService', function() {
  this.posts = function() {
    return [
      {
        title: 'Test Post 2',
        path: '2014-6-6-test-post-2',
        date: new Date(2014, 5, 6, 12, 50),
        tldr: 'This is a short tl;dr of the blog post.'
      },
      {
        title: 'Test Post',
        path: '2014-6-5-test-post',
        date: new Date(2014, 5, 5, 18, 24),
        tldr: 'This is a short tl;dr of the blog post.'
      }
    ];
  };
});
