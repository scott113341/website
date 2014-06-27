app.service('projectService', function() {
  this.projects = function() {
    return [
      {
        name: 'SCU•classes',
        img: 'https://s3-us-west-2.amazonaws.com/scotthardy/scuclasses.png',
        link: 'http://scuclasses.com',
        src_link: 'https://github.com/scott113341/SCUclasses',
        description: 'SCU•classes is a website I made for Santa Clara Students to streamline the process of registering for classes.  It launched in January 2013, and is now used by over 90% of the undergraduate population (about 5000 unique students each quarter).',
        technologies: ['Angular.js', 'Ruby on Rails', 'SASS', 'Bootstrap', 'PostgreSQL', 'Nokogiri', 'Rake']
      },
      {
        name: 'SCU•books',
        img: 'https://s3-us-west-2.amazonaws.com/scotthardy/scubooks.png',
        link: 'http://scubooks.com',
        description: 'I\'ve long disliked how absurd college textbook prices are, so I built SCU•books for Santa Clara University students to find the lowest prices on their textbooks.  It pulls up the book list for your class schedule, then searches several online retailers for prices.',
        technologies: ['Angular.js', 'Ruby on Rails', 'API libraries', 'SASS', 'Bootstrap', 'Nokogiri', 'Rake']
      },
      {
        name: 'Powder Keg Brewing Company Website',
        img: 'https://s3-us-west-2.amazonaws.com/scotthardy/pkbc.png',
        link: 'http://www.powderkegbrewingcompany.com',
        description: 'This is the website for Powder Keg Brewing Comapany, a new craft microbrewery in Niwot, Colorado.  The website is still under development (as is the brewery).',
        technologies: ['Angular.js', 'Ruby on Rails', 'SASS']
      },
      {
        name: 'Appicenter',
        img: 'https://s3-us-west-2.amazonaws.com/scotthardy/appicenter.png',
        src_link: 'https://github.com/scott113341/appicenter',
        description: 'Ryan Tsao and I entered this for the 24-hour Broncohack hackathon.  The prompt was for an in-game app experience for the San Jose Earthquakes soccer team.  Our project consisted of a jumbotron display, mobile phone display, and admin interface.  The app implemented a real-time auctioning system and Instagram feed.',
        technologies: ['Firebase', 'Angular.js', 'Gulp.js', 'LESS', 'Bootstrap']
      }
    ];
  };
});
