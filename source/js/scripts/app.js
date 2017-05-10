// Core modules
import Global from './global';

/**
 * Loads in core modules and initalises them on DOM ready
 */
$(() => {
    const api = {
        global: Global.init()
    };

    if(window.location.search.includes('dev=true')) {
        const dev = {
            global: Global.init(),
        }
        window.webapp = dev;
    }
});