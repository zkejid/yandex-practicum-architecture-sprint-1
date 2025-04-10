// webpack.config.js for Catalog
module.exports = {
    name: "catalogMicrofrontend",
    filename: "index.js",
    exposes: {
        './Main': './src/components/Main.js',
    },
    shared: ["react", "react-dom"]
    }; 