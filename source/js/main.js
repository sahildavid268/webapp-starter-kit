/**
 * This code must set up require and load the app.
 * ES6 module loading is not safe to be used here
 */

require.config({
    shim: {
        'lib/TweenMax': {
            exports: 'gsap',
            init: function () {
                return {
                    tweenMax: window.TweenMax,
                    power0: window.Power0,
                    power1: window.Power1,
                    power2: window.Power2,
                    power3: window.Power3,
                    power4: window.Power4,
                    back: window.Back,
                    stepped: window.SteppedEase,
                    expo: window.Expo
                };
            }
        }
    }
});

// Start the app
require(['scripts/app']);