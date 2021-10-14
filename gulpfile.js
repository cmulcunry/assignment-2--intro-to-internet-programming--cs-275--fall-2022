const { src, dest, series, watch } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const babel = require(`gulp-babel`);
const jsLinter = require(`gulp-eslint`);
const cssLinter = require(`gulp-stylelint`);
const cssCompressor = require(`css-minify`)
const browserSync = require(`browser-sync`);
const jsCompressor = require(`gulp-uglify`);
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

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/scripts`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));
};

let compileCSSForProd = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/css`));
};

let lintJS = () => {
  return src(`js/*.js`)
        .pipe(jsLinter({
          parserOptions: {
            ecmaVersion: 2018,
            sourceType: `module`
          },
          rules: {
            'no-console': 0,
            'no-debugger': 0,
            indent: [2, 4, {SwitchCase: 1}],
            quotes: [2, 'backtick'],
            'linebreak-style': [2, 'windows'], //changed to remove "Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style" error
            semi: [2, 'always'],
            'max-len': [2, 85, 4]
          },
          env: {
            es6: true,
            node: true,
            browser: true
          },
          extends: `eslint:recommended`
      }))
      .pipe(jsLinter.formatEach(`compact`, process.stderr));
};

let lintCSS = () => {
  return src(`css/*.css`)
        .pipe(cssLinter({
            failAfterError: false,
            reporters: [
              {formatter: "string", console: true}
            ]
      }));
};
let serve = () => {
    browserSync({
        notify: true,
        port: 9000,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `html`,
                `js`,
                `css`,
            ]
        }
    });

    watch(`js/*.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);

    watch(`css/*css`,
        series(lintCSS)
    ).on(`change`, reload);

    watch(`html/*.html`,
        series(validateHTML)
    ).on(`change`, reload);
};

let copyUnprocessedAssetsForProd = () => {
    return src([
        `/*.*`,       // Source all files,
        `/**`,        // and all folders,
        `!/html/`,    // but not the HTML folder
        `!/html/*.*`, // or any files in it
        `!/html/**`,  // or any sub folders;
        `!/**/*.js`,  // ignore JS;
        `!/css/**` // and, ignore Sass/CSS.
    ], {dot: true}).pipe(dest(`prod`));
};

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.HTMLProcessing = series(validateHTML, compressHTML);
exports.lintJS = lintJS;
exports.lintCSS = lintCSS;
exports.transpileJSForDev = transpileJSForDev
exports.transpileJSForProd = transpileJSForProd;
exports.compileCSSForProd = compileCSSForProd;
exports.copyUnprocessedAssetsForProd = copyUnprocessedAssetsForProd;
exports.dev = series(lintCSS, lintJS, transpileJSForDev, validateHTML, serve);
exports.build = series(compressHTML, transpileJSForProd, compileCSSForProd, copyUnprocessedAssetsForProd);
