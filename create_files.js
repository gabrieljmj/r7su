const fs = require('fs');

const files = [
  './package.json',
  './index.html',
  './.editorconfig',
  './.gitignore',
  './webpack.config.js',
  './app/app.js'
];

module.exports = () => {
  console.log('-- CREATING FILES --');

  return new Promise(resolve => {
    files.forEach(file => {
      console.log('Creating ' + file);

      fs.stat(file, (err, stat) => {
        if (err && err.code === 'ENOENT') {
          fs.readFile(`${__dirname}/templates/${file}`, 'utf8', (err, content) => {
            fs.writeFile(file, content, err => {
              if (err) throw err;
            });
          });
        }
      });
    });

    resolve();
  });
}