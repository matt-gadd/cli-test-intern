module.exports = function (grunt) {
	require('grunt-dojo2').initConfig(grunt, {
		copy: {
			webpack: { expand: true, cwd: 'src/', src: '**/**.js', dest: 'dist/umd/' },
			intern: { src: 'src/run.html', dest: 'dist/umd/run.html' }
		}
	});

	grunt.registerTask('ci', [
		'intern:node'
	]);

	grunt.registerTask('dist', grunt.config.get('distTasks').concat(['copy:webpack', 'copy:intern']));
};
