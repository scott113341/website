app.service('BlogPostService', function() {
  this.posts = function() {
    return [
      {
        title: 'The Great Car Experiment of 2015 is Over',
        path: '2015-10-19-the-great-car-experiment-of-2015-is-over',
        date: new Date(2015, 10-1, 19),
        tldr: "Living in the Subaru was great and easier than expected.  eBay perks definitely helped.  10/10 would/will do again."
      },
      {
        title: 'Living in my Car',
        path: '2015-8-30-living-in-my-car',
        date: new Date(2015, 8-1, 30),
        tldr: 'Starting September 1st, I\'ll be living out of my car.  Random thoughts and rudimentary planning within.'
      },
      {
        title: 'Big Sur Backpacking Trip',
        path: '2015-2-17-big-sur-backpacking',
        date: new Date(2015, 2-1, 17),
        tldr: 'Trip log from a 4-day backpacking trip with Matt, Ryan, and Vanessa in the Big Sur area.'
      },
      {
        title: 'The Colorado Trail',
        path: '2014-8-25-the-colorado-trail',
        date: new Date(2014, 8-1, 25),
        tldr: 'I just finished an 8-day 104-mile backpacking trip from Denver to Breckenridge on The Colorado Trail (the whole thing is 500 miles to Durango).  This is my trip log.'
      },
      {
        title: 'First Post',
        path: '2014-6-22-first-post',
        date: new Date(2014, 6-1, 22),
        tldr: 'My first blog post, mostly for testing purposes.  Nature and content of blog TBD.'
      }
    ];
  };
});
