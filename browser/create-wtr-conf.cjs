import arrify from 'arrify';

// Creates a `karma.conf` implementation that runs a specific set of files
const createWtrConf = function (files) {
	return karma => {
		karma.set({
			frameworks: [
				'mocha'
			],
			files: arrify(files),
			/*
			preprocessors: {
				'tests/*.js': [
				]
			},
			*/
			customLaunchers: {
				ChromeHeadlessNoSandbox: {
					base: 'ChromeHeadless',
					flags: [
						'--no-sandbox'
					]
				}
			},
			browsers: [
				process.env.CI ? 'ChromeHeadlessNoSandbox' : 'ChromeHeadless'
			],
			autoWatch: false,
			singleRun: true
		});
	};
};

export default createWtrConf;
