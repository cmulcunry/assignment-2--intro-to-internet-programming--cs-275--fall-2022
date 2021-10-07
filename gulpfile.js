const { src, dest, series } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const jsLinter = require(`gulp-eslint`);

let validateHTML = () => {
    return src([`html/*.html`, `html/**/*.html`]).pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
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

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.HTMLProcessing = series(validateHTML, compressHTML);
exports.lintJS = lintJS;
