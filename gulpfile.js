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
            'linebreak-style': [2, 'unix'],
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
          rules: {
            "color-no-invalid-hex": true,
            "font-family-no-duplicate-names": true,
            "font-family-no-missing-generic-family-keyword": true,
            "function-calc-no-unspaced-operator": true,
            "function-linear-gradient-no-nonstandard-direction": true,
            "string-no-newline": true,
            "unit-no-unknown": true,
            "property-no-unknown": true,
            "keyframe-declaration-no-important": true,
            "declaration-block-no-duplicate-properties": true,
            "declaration-block-no-shorthand-property-overrides": true,
            "block-no-empty": true,
            "selector-pseudo-class-no-unknown": true,
            "selector-pseudo-element-no-unknown": true,
            "selector-type-no-unknown": true,
            "function-url-no-scheme-relative": true,
            "unit-blacklist": ["in", "pc", "pt", "cm", "mm", "Q"],
            "shorthand-property-no-redundant-values": true,
            "declaration-block-no-redundant-longhand-properties": true,
            "declaration-no-important": true,
            "declaration-block-single-line-max-declarations": 1,
            "selector-max-empty-lines": 0,
            "selector-max-universal": 1,
            "selector-no-qualifying-type": [
              true,
              {
                ignore: ["attribute"]
              }
            ],
            "selector-no-vendor-prefix": true,
            "media-feature-name-no-vendor-prefix": true,
            "at-rule-no-vendor-prefix": true,
            "no-unknown-animations": true,
            "color-hex-case": "lower",
            "color-hex-length": "short",
            "font-family-name-quotes": "always-where-recommended",
            "font-weight-notation": "numeric",
            "function-comma-newline-after": "never-multi-line",
            "function-comma-newline-before": "never-multi-line",
            "function-comma-space-after": "always",
            "function-comma-space-before": "never",
            "function-max-empty-lines": 0,
            "function-name-case": "lower",
            "function-parentheses-newline-inside": "never-multi-line",
            "function-parentheses-space-inside": "never",
            "function-url-quotes": "always",
            "function-whitespace-after": "always",
            "number-leading-zero": "never",
            "number-no-trailing-zeros": true,
            "string-quotes": "single",
            "length-zero-no-unit": true,
            "unit-case": "lower",
            "value-keyword-case": "lower",
            "value-list-comma-space-after": "always-single-line",
            "value-list-comma-space-before": "never",
            "value-list-max-empty-lines": 0,
            "custom-property-empty-line-before": "never",
            "property-case": "lower",
            "declaration-colon-newline-after": "always-multi-line",
            "declaration-colon-space-after": "always-single-line",
            "declaration-colon-space-before": "never",
            "declaration-empty-line-before": "never",
            "declaration-block-semicolon-newline-after": "always-multi-line",
            "declaration-block-semicolon-newline-before": "never-multi-line",
            "declaration-block-semicolon-space-before": "never",
            "declaration-block-trailing-semicolon": "always",
            "block-closing-brace-empty-line-before": "never",
            "block-closing-brace-newline-after": "always",
            "block-opening-brace-newline-after": "always",
            "block-opening-brace-space-before": "always",
            "selector-attribute-operator-space-before": "never",
            "selector-attribute-operator-space-after": "never",
            "selector-attribute-quotes": "always",
            "selector-combinator-space-before": "always",
            "selector-combinator-space-after": "always",
            "selector-descendant-combinator-no-non-space": true,
            "selector-pseudo-class-case": "lower",
            "selector-pseudo-class-parentheses-space-inside": "never",
            "selector-pseudo-element-case": "lower",
            "selector-pseudo-element-colon-notation": "double",
            "selector-type-case": "lower",
            "selector-list-comma-newline-before": "never-multi-line",
            "selector-list-comma-newline-after": "always",
            "selector-list-comma-space-before": "never",
            "selector-list-comma-space-after": "always-single-line",
            "rule-empty-line-before": [
              "always", {
                except: [
                  "after-single-line-comment"
                ],
                ignore: [
                  "after-comment",
                  "first-nested"
                ]
              }
            ],
            "media-feature-colon-space-before": "never",
            "media-feature-colon-space-after": "always",
            "media-feature-name-case": "lower",
            "media-feature-parentheses-space-inside": "never",
            "media-feature-range-operator-space-before": "always",
            "media-feature-range-operator-space-after": "always",
            "media-query-list-comma-newline-before": "never-multi-line",
            "media-query-list-comma-newline-after": "always",
            "media-query-list-comma-space-before": "never",
            "media-query-list-comma-space-after": "always-single-line",
            "at-rule-empty-line-before": [
              "always", {
                except: [
                  "first-nested",
                  "after-same-name",
                  "blockless-after-same-name-blockless",
                  "blockless-after-blockless"
                ],
                ignore: [
                  "after-comment",
                  "blockless-after-same-name-blockless",
                  "blockless-after-blockless"
                ],
                ignoreAtRules: [
                  "media",
                  "font-face",
                  "keyframes"
                ]
              }
            ],
            "at-rule-name-case": "lower",
            "at-rule-name-newline-after": "always-multi-line",
            "at-rule-name-space-after": "always",
            "at-rule-semicolon-space-before": "never",
            "at-rule-semicolon-newline-after": "always",
            "indentation": 2,
            "max-empty-lines": 1,
            "no-eol-whitespace": true,
            "no-missing-end-of-source-newline": true
          }
        }))
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
