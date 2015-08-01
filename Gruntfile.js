/* global module, require */

module.exports = function ( grunt ) {

  var os = require("os");

  grunt.registerTask('build', [
    'jshint',
    'clean:build',
    'copy:build'
  ]);
  grunt.registerTask('test', [
    'build',
    'test:unit'
  ]);
  grunt.registerTask('test:unit', [
    'karma:headless_unit'
  ]);
  grunt.registerTask('package', [
    'clean:package',
    'concat:package',
    'uglify:package'
  ]);
  grunt.registerTask('workflow:dev', [
    'connect:dev',
    'build',
    'open:dev',
    'watch:dev'
  ]);

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-open');

  grunt.initConfig({
    app : {
      name: 'angular-all-ordinal',
      source_dir: 'app/src',
      build_dir: 'app/build',
      package_dir: 'app/package',
      connect_port: grunt.option('connect_port') || 9000,
      hostname: os.hostname()
    },
    jshint: {
      source: [
        '<%= app.source_dir %>/**/*.js',
        '!<%= app.source_dir %>/bower_components/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    karma: {
      headless_unit: {
        options: {
          configFile: 'karma-unit.conf.js',
          browsers: [ 'PhantomJS' ]
        }
      }
    },
    concat: {
      package: {
        src: [
          '<%= app.build_dir %>/*.js',
          '!<%= app.build_dir %>/*.spec.js'
        ],
        dest: '<%= app.package_dir %>/<%= app.name %>.js'
      }
    },
    uglify: {
      package: {
        files: {
          '<%= app.package_dir %>/<%= app.name %>.min.js': [
            '<%= app.package_dir %>/<%= app.name %>.js'
          ]
        }
      }
    },
    connect: {
      options: {
        hostname: '*'
      },
      dev: {
        options: {
          port: '<%= app.connect_port %>',
          base: '<%= app.build_dir %>',
        }
      }
    },
    open: {
      dev: {
        url: 'http://<%= app.hostname %>:<%= app.connect_port %>'
      }
    },
    watch: {
      dev: {
        files: ['<%= app.source_dir %>/**/*'],
        tasks: ['build', 'test:unit'],
        options: {
          livereload: true
        }
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            cwd: '<%= app.source_dir %>',
            src: ['**', '!css/**'],
            dest: '<%= app.build_dir %>'
          },
          {
            expand: true,
            src: 'bower.json',
            dest: '<%= app.build_dir %>'
          }
        ]
      },
      package: {
        files: [
          {
            expand: true,
            cwd: '<%= app.build_dir %>',
            src: ['bower.json', '*.js', '!*.spec.js'],
            dest: '<%= app.package_dir %>'
          }
        ]
      }
    },
    clean: {
      build : '<%= app.build_dir %>',
      package : '<%= app.package_dir %>'
    }
  });
};
