# craco-favicons

A craco plugin to leverage [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin), which in turn leverages [favions](https://github.com/itgalaxy/favicons) to generate icons.

## Usage

1. Add the _craco-favicons_ plugin into your `craco.config.js`.

2. Add a `logo.png` file to the root directory of the project.

3. Profit.

```
/* craco.config.js */

const CracoFavIconsPlugin = require("craco-favicons");

module.exports = {
    plugins: [{
        plugin: CracoFavIconsPlugin
    }]
}
```

Or specify your own options:

```
/* craco.config.js */

const CracoFavIconsPlugin = require("craco-favicons");

module.exports = {
    plugins: [{
        plugin: CracoFavIconsPlugin,
        options: {
            logo: "./src/assets/images/app-logo.svg",
            inject: true,
            prefix: "static/icons/",
            favicons: {
                icons: {
                    android: { offset: 10 },
                    appleIcon: { offset: 10 },
                    coast: false,
                    yandex: false,
                    appleStartup: { offset: 10 },
                    firefox: false,
                    windows: false
                }
            }

        }
    }]
}
```

All options supplied are passed to _favicons-webpack-plugin_.

Please see https://github.com/jantimon/favicons-webpack-plugin#advanced-usage and https://github.com/itgalaxy/favicons#usage for more configuration info.

### Prerequisites

[Craco](https://github.com/gsoft-inc/craco)

### Installing

npm

```
npm i craco-favicon -D
```

Or Yarn

```
yarn add craco-favicon -D
```

## Acknowledgments

- https://github.com/itgalaxy/favicons
- https://github.com/jantimon/favicons-webpack-plugin
