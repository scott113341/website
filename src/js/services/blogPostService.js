app.service('blogPostService', function() {
  this.posts = function() {
    return [
      {
        title: 'First Post',
        path: '2014-6-22-first-post',
        date: new Date(2014, 6-1, 22),
        tldr: 'My first blog post, mostly for testing purposes.  Nature and content of blog TBD.'
      },
      {
        title: 'The Colorado Trail',
        path: '2014-8-25-the-colorado-trail',
        date: new Date(2014, 8-1, 25),
        tldr: 'I just finished an 8-day 104-mile backpacking trip from Denver to Breckenridge on The Colorado Trail (the whole thing is 500 miles to Durango).  This is my trip log.'
      }
    ].reverse();
  };
});
