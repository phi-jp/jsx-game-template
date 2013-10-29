/*
 * gruntfile.js
 */

module.exports = function(grunt) {

  var pkg = grunt.file.readJSON('package.json');

  grunt.initConfig({
    watch: {
      test: {
        files: ['src/**/*.jsx'],
        tasks: ['jsx:build'],
      },
    },
    jsx: {
      build: {
        src: 'src/main.jsx',
        dest: 'build/main.js',
        add_search_path: ['plugins/tmlib.jsx/src/'],
        executable: "web",
      },
    },
  });

  for (var key in pkg.devDependencies) {
    if (/grunt-/.test(key)) {
      grunt.loadNpmTasks(key);
    }
  }
  
  grunt.registerTask('default', ['jsx']);
}