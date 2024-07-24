let mix = require('laravel-mix');

mix.js('public/js/app.js', 'dist/js').setPublicPath('public');
mix.sass('public/scss/style.scss', 'public/dist/css');
