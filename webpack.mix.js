let mix = require("laravel-mix");

mix.js('public/js/app.js', 'dist/js').setPublicPath('public');

mix.sass("public/scss/global.scss", "public/dist/css");
mix.sass("public/scss/common.scss", "public/dist/css");

mix.sass("public/scss/home_page.scss", "public/dist/css");
