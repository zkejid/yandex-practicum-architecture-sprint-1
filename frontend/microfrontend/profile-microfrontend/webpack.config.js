// webpack.config.js for Profile
module.exports = {
    name: "profileMicrofrontend",
    filename: "index.js",
    exposes: {
        './Main': './src/components/Main.js',
    },
    shared: ["react", "react-dom"]
    }; 