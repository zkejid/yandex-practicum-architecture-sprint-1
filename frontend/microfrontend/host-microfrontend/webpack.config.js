// webpack.config.js for Host
module.exports = {
    name: "hostMicrofrontend",
    filename: "index.js",
    remotes: {
        "authMicrofrontend": "authMicrofrontend@http://example.com/authMicrofrontend/remoteEntry.js",
        "profileMicrofrontend": "profileMicrofrontend@http://example.com/profileMicrofrontend/remoteEntry.js",
        "catalogMicrofrontend": "catalogMicrofrontend@http://example.com/catalogMicrofrontend/remoteEntry.js",
    },
    shared: ["react", "react-dom", "react-router-dom", "react-scripts", "web-vitals"]
    };     