const { src, dest, series, watch } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const jsLinter = require(`gulp-eslint`);
const sass = require(`gulp-sass`)(require(`sass`));
const babel = require(`gulp-babel`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;

let browserChoice = `default`;

let validateHTML = () => {
    return src([`html/*.html`, `html/**/*.html`]).pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compileCSSForDev = () => {
    return src(`../css/style.css`)
        .pipe(sass.sync({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, sass.logError))
        .pipe(dest(`temp/styles`));
};

let lintJS = () => {
    return src(`../js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach(`compact`));
};

let transpileJSForDev = () => {
    return src(`../js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let serve = () => {
    browserSync({
        notify: true,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `dev`,
                `dev/html`
            ]
        }
    });

    watch(`dev/scripts/*.js`, series(lintJS, transpileJSForDev))
        .on(`change`, reload);

    watch(`dev/styles/scss/**/*.scss`, compileCSSForDev)
        .on(`change`, reload);

    watch(`dev/html/**/*.html`, validateHTML)
        .on(`change`, reload);

    watch(`dev/img/**/*`)
        .on(`change`, reload);
};
exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.HTMLProcessing = series(validateHTML, compressHTML);
exports.lintJS = lintJS;
exports.compileCSSForDev = compileCSSForDev;
exports.transpileJSForDev = transpileJSForDev;
exports.serve = series(
    validateHTML,
    compileCSSForDev,
    lintJS,
    transpileJSForDev,
    serve
);
