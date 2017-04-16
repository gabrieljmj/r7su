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
    console.log('This should take a while...');

    exec('yarn add ' + dependencies.dev.join(' ') + ' --dev', (err, stdin, stdout) => {
      if (err) {
        console.error(err);
      } else {
        console.log(stdout);
      }
    });

    exec('yarn add ' + dependencies.prod.join(' '), (err, stdin, stdout) => {
      if (err) {
        console.error(err);
      } else {
        console.log(stdout);
      }
    });

    resolve();  
  });
}