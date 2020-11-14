module.exports = {
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Vue-Django-Stuff";
                return args;
            })
    }
}
