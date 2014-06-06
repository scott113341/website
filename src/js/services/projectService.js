app.service('projectService', function() {
  this.projects = function() {
    return [
      {
        name: 'SCU•classes',
        link: 'http://scuclasses.com/',
        src_link: 'https://github.com/scott113341/SCUclasses',
        description: 'This is a description of the project.',
        technologies: ['Angular.js', 'Ruby on Rails', 'SASS', 'Bootstrap', 'PostgreSQL', 'Nokogiri', 'Rake']
      },
      {
        name: 'SCU•books',
        link: 'http://scubooks.com/',
        src_link: 'https://github.com/scott113341/SCUclasses',
        description: 'This is a description of the project.',
        technologies: ['Angular.js', 'Ruby on Rails', 'API libraries', 'SASS', 'Bootstrap', 'Nokogiri', 'Rake']
      },
      {
        name: 'Powder Keg Brewing Company Website',
        link: 'http://www.powderkegbrewingcompany.com/',
        src_link: 'https://github.com/scott113341/SCUclasses',
        description: 'This is a description of the project.',
        technologies: ['Angular.js', 'Ruby on Rails', 'SASS']
      }
    ];
  };
});
