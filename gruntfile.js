module.exports = function(grunt) {
    
    //config task(s)
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
     
        //sass config
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'sass/dist/css/application.css' : 'sass/dev/scss/application.scss'
                }
            },

            dev2: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'bootstrap/css/application.css' : 'bootstrap/scss/application.scss'
                }
            }
        },

        //watch config
        watch: {
            css: {
                files: ['sass/dev/scss/**/*.scss'],
                tasks: ['sass:dev']
            },

            css2: {
                files: ['bootstrap/scss/**/*.scss'],
                tasks: ['sass:dev2']
            }
        },
    });
 
    //load the plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
 
    //Register Task(s)
    grunt.registerTask('default', []);
    //note: watch does not need to be registered, just run 'grunt watch'
 }