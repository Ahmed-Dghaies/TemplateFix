module.exports = {
    devServer: {
        port: 4200,
        proxy: "https://api.ipify.org?format=json"
    }
}