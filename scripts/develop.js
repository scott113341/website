const express = require('express');
const fs = require('fs');
const less = require('less');
const livereload = require('livereload');

const CSS_PATH = './css/app.less';

const app = express();

app.use(express.static('./static'));
app.use(express.static('./html'));

app.set('view engine', 'pug');
app.set('views', './html');

app.get('/app.css', (req, res) => {
  const app = fs.readFileSync(CSS_PATH, 'utf8');
  const options = { paths: ['./css'] };
  less.render(app, options, (e, output) => {
    res.type('css').send(output.css);
  });
});

app.use('*', (req, res) => {
  const baseUrl = req.baseUrl;
  const thing = baseUrl === '' ? 'index' : baseUrl.slice(1) + '/index';
  res.render(thing, { basedir: './', __DEV: true });
});

app.listen(3000, () => console.log('started on port 3000'));

const exts = [
  'html',
  'pug',
  'png',
  'md',
  'jpg',
  'svg',
  'less',
];
const server = livereload.createServer({ exts });
server.watch([
  './css',
  './html',
  './static'
]);
