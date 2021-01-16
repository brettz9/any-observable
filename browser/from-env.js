// Import a web-test-runner config that reads an environment variable to
//   decide which test to run
import createWtrConf from './create-wtr-conf.js';

const fromEnv = createWtrConf(process.env.ANY_OBSERVABLE_TEST_PATH);
export default fromEnv;
