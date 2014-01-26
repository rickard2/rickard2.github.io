/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
            concat: {
                dist: {
                    src: ['template/header.html', 'slides/*', 'template/footer.html'],
                    dest: 'index.html'
                }
            },
            watch: {
                build: {
                    files: ['template/*', 'slides/*'],
                    tasks: ['default']
                }
            }
        }
    );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['concat']);

};
