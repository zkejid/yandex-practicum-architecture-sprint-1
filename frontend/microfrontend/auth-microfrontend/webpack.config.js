// webpack.config.js for Auth
module.exports = {
    name: "authMicrofrontend",
    filename: "index.js",
    exposes: {
        './App': './src/components/App.js',
    },
    shared: ["react", "react-dom"]
    }; 