import {Config} from "protractor";

export let config: Config = {
    directConnect: true,
    // framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['testspecs.js'],
    capabilities: {
        browserName: 'chrome'
    }
}