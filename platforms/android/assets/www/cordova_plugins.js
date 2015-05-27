cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/fr.smile.cordova.fileopener/www/FileOpener.js",
        "id": "fr.smile.cordova.fileopener.FileOpener",
        "clobbers": [
            "cordova.plugins.FileOpener"
        ]
    },
    {
        "file": "plugins/org.devgeeks.Canvas2ImagePlugin/www/Canvas2ImagePlugin.js",
        "id": "org.devgeeks.Canvas2ImagePlugin.Canvas2ImagePlugin",
        "clobbers": [
            "window.canvas2ImagePlugin"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "fr.smile.cordova.fileopener": "1.0.2",
    "org.devgeeks.Canvas2ImagePlugin": "0.6.0",
    "cordova-plugin-whitelist": "1.0.1-dev"
}
// BOTTOM OF METADATA
});