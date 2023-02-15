module.exports = function(config) {
    /* // Add a filter using the Config API
    config.addFilter("myFilter", function(value) {
        // return value;
    });
    
    // Add a shortcode using the Config API
    config.addShortcode("myShortcode", function(value) {
        // return value;
    });*/
    
    // Add a passthrough copy using the Config API
    config.addPassthroughCopy("src/js");
    
    return {
        dir: {
        input: "src",
        output: "dist"
        }
    };
}