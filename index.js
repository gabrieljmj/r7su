const createPaths = require('./create_paths'),
  createFiles = require('./create_files'),
  installDependencies = require('./install_dependencies');

createPaths()
  .then(createFiles)
  .then(installDependencies);