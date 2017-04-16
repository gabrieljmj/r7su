const fs = require('fs');

const paths = [
  './app',
  './app/components',
  './app/components/containers',
  './app/components/views',
  './app/reducers',
  './app/actions',

  './public',
  './public/css',
  './public/js',
  './public/images'
];

module.exports = () => {
  console.log('-- CREATING PATHS --');
  
  return new Promise(resolve => {
    paths.forEach(path => {
      console.log('Creating ' + path);

      fs.stat(path, (err, stat) => {
        if (err && err.code === 'ENOENT') {
          fs.mkdirSync(path);
        }
      });
    });

    resolve();
  });
}