module.exports = function (grunt) {
    const buildDirectory = '../app/assets/';
    const assetsDirectory = '../assets/';
    
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourceMap: true,
                    outputStyle: 'compressed'
                },
                files: [{
                    expand: true,
                    cwd: 'scss/',
                    src: ['app.scss'],
                    dest: buildDirectory + '/styles',
                    ext: '.css',
                    extDot: 'last'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: 'true',
                    src: ['js/**/*.js', '!js/lib/*.js'],
                    dest: buildDirectory,
                    ext: '.js'
                }]
            }
        },
        es3ify: {
            dist: {
                files: [{
                    expand: 'true',
                    src: [buildDirectory + 'js/**/*.js'],
                    dest: assetsDirectory,
                    ext: '.js'
                }]
            }
        },
        uglify: {
            dist: {
                files: [{
                    expand: 'true',
                    src: [buildDirectory + 'js/**/*.js'],
                    dest: assetsDirectory,
                    ext: '.js'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: 'true',
                    src: ['js/lib/**', 'plugins/**', 'jpeg/**'],
                    dest: buildDirectory
                }]
            }
        },
        jsdoc: {
            dist: {
                src:  ['js/**/*.js'],
                options: {
                    recurse: true,
                    destination: 'docs'
                }
            }
        },
        sprite:{
            all: {
                src: 'sprites/*.*',
                dest: '../app/assets/images/spritesheet.png',
                imgPath: '../images/spritesheet.png',
                destCss: 'scss/partials/_sprites.scss',
                padding: 20
            }
        },
        pngmin: {
            compile: {
                options: {
                    ext: '.png',
                    force: true
                },
                files: [
                    {
                        src: 'pngs/*.png',
                        dest: '../app/assets/images/'
                    }
                ]
            }
        },
        watch: {
            options: {
                spawn: false   
            },
            sass: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['babel', 'es3ify']
            },
            sprite: {
                files: ['sprites/*.*'],
                tasks: ['sprite']
            },
            pngmin: {
                files: ['pngs/*.png'],
                tasks: ['pngmin']
            }
        }
    });
    
    grunt.registerTask('build', ['sprite', 'sass', 'babel', 'es3ify', 'uglify', 'copy', 'pngmin']);
    grunt.registerTask('dev', ['sprite', 'sass', 'babel',  'es3ify', 'copy', 'pngmin', 'watch']);

    grunt.registerTask('default', 'build');
};