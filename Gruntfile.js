module.exports = function(grunt) {

  grunt.initConfig({      
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    connect: {
        example: {
      port: 3000,
      base: 'app',
      livereload:true
    }
    // default_options: {
    //   src : 'index.html'
    // }
    },
    watch: {
      files: ['js'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-connect');
  grunt.loadNpmTasks('grunt-serve');
  //grunt.loadNpmTasks('grunt-browser-sync');
//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect']);
  //grunt.registerTask('default', ['browserSync', 'watch']);

};