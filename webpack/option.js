// Libary import.
let path = require('path');

// Initiate paths.
let paths = {};
paths.source = 'src';
paths.application = paths.source + '/' + 'app';
paths.dist = paths.source + '/' + 'dist';

exports = module.exports = {
    paths: {
        /*
        * Get source file directory.
        * */
        getSource: (root) => {
            return path.resolve(root, paths.source);
        },

        /*
        * Get directory which contains application.
        * */
        getApplication: (root) => {
            return path.resolve(root, paths.application);
        },

        /*
        * Get distribution folder.
        * */
        getDist: (root) => {
            return path.resolve(root, paths.dist);
        }
    }
};

return module.exports;