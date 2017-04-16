const {exec} = require('child_process');

const dependencies = {
  dev: [
    'babel-core',
    'babel-loader',
    'babel-preset-es2015',
    'babel-preset-react',
    'style-loader',
    'css-loader',
    'extract-text-webpack-plugin',
    'webpack'
  ],
  prod: [
    'react',
    'react-route',
    'redux',
    'react-redux'
  ]
};

module.exports = () => {
  return new Promise(resolve => {
    console.log('-- INSTALLING PACKAGES --');

    exec('npm install ' + dependencies.dev.join(' ') + ' --save-dev', (err, stdin, stdout) => {
      if (err) {
        console.error(err);
      } else {
        console.log(stdout);
      }
    });

    exec('npm install ' + dependencies.prod.join(' ') + ' --save', (err, stdin, stdout) => {
      if (err) {
        console.error(err);
      } else {
        console.log(stdout);
      }
    });

    resolve();  
  });
}