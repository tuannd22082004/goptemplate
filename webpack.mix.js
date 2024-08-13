let mix = require("laravel-mix");

mix.js("public/js/app.js", "public/dist/js");

mix.sass("public/scss/global.scss", "public/dist/css");
mix.sass("public/scss/common.scss", "public/dist/css");

mix.sass("public/scss/home_page.scss", "public/dist/css");
mix.sass("public/scss/home_page_3.scss", "public/dist/css");
mix.sass("public/scss/home_page_4.scss", "public/dist/css");
