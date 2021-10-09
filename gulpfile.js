const { src, dest, series, watch } = require(`gulp`);
const gulp = require('gulp');
const del = require(`del`);
const babel = require(`gulp-babel`);
const browserSync = require(`browser-sync`);

const htmlCompressor = require(`gulp-htmlmin`);
const htmlValidator = require(`gulp-html`);
const htmlLinter = require('gulp-html-lint');

const jsCompressor = require(`gulp-uglify`);
const jsValidator = require(`gulp-uglify`);

const cssCompressor = require(`gulp-uglifycss`);
const cssValidator = require('gulp-stylelint');

const reload = browserSync.reload;
let browserChoice = `default`;

async function firefox () {
    browserChoice = `firefox`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function opera () {
    browserChoice = `opera`;
}

async function edge () {
    browserChoice = `microsoft-edge`;
}

async function allBrowsers () {
    browserChoice = [
        `safari`,
        `firefox`,
        `google chrome`,
        `opera`,
        `microsoft-edge`
    ];
}

let lintHTML = () => {
    return src(`html/*.html`)
        .pipe(htmlLinter({
            failAfterError: true,
            reporters: [
                {formatter: `verbose`, console: true}
            ]
        }));
    };


let validateHTML = () => {
    return src([
        `html/*.html`,
        `html/**/*.html`])
        .pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`*.html`,`**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let transpileJSForDev = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(dest(`temp/js`));
};

let transpileJSForProd = () => {
    return src(`js/*.js`)
        .pipe(babel())
        .pipe(jsCompressor())
        .pipe(dest(`prod/js`));

};

let validateCSS = () => {
    return src([
        `css/*.css`,
        `css/**/*.css`])
        .pipe(cssValidator());
};

let compressCSS = () => {
    return src(`css/*.css`)
        .pipe(cssCompressor())
        .pipe(dest(`prod/css/`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter({
            parserOptions: {
                ecmaVersion: 2017,
                sourceType: `module`
            },
            rules: {
                indent: [2, 4, {SwitchCase: 1}],
                quotes: [2, `backtick`],
                semi: [2, `always`],
                'linebreak-style': [2, `unix`],
                'max-len': [1, 85, 4]
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

let serve = () => {
    browserSync({
        notify: true,
        port: 5500,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `dev`,
                `html`
            ]
        }
    });

    watch(`js/*.js`,
        series(lintJS, transpileJSForDev)
    ).on(`change`, reload);


    watch(`html/**/*.html`,
        series(validateHTML)
    ).on(`change`, reload);

    watch(`img/**/*`).on(`change`, reload);
};

async function clean() {
    let fs = require(`fs`),
        i,
        foldersToDelete = [`./temp`, `prod`];

    for (i = 0; i < foldersToDelete.length; i++) {
        try {
            fs.accessSync(foldersToDelete[i], fs.F_OK);
            process.stdout.write(`\n\tThe ` + foldersToDelete[i] +
                ` directory was found and will be deleted.\n`);
            del(foldersToDelete[i]);
        } catch (e) {
            process.stdout.write(`\n\tThe ` + foldersToDelete[i] +
                ` directory does NOT exist or is NOT accessible.\n`);
        }
    }

    process.stdout.write(`\n`);
}

async function listTasks () {
    let exec = require(`child_process`).exec;

    exec(`gulp --tasks`, function (error, stdout, stderr) {
        if (null !== error) {
            process.stdout.write(`An error was likely generated when invoking ` +
                `the “exec” program in the default task.`);
        }

        if (`` !== stderr) {
            process.stdout.write(`Content has been written to the stderr stream ` +
                `when invoking the “exec” program in the default task.`);
        }

        process.stdout.write(`\n\tThis default task does ` +
            `nothing but generate this message. The ` +
            `available tasks are:\n\n${stdout}`);
    });
}

exports.firefox = series(firefox, serve);
exports.chrome = series(chrome, serve);
exports.opera = series(opera, serve);
exports.edge = series(edge, serve);
exports.allBrowsers = series(allBrowsers, serve);

exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.transpileJSForProd = transpileJSForProd;
exports.lintJS = lintJS;

exports.serve = series(lintJS, transpileJSForDev, validateHTML, validateCSS, lintHTML, serve);

exports.dev=series(validateHTML, validateCSS, lintHTML, lintCSS, lintJS,
    transpileJSForDev, serve);
exports.build=series(compressHTML, compressCSS, compressJS, transpileJSForProd, serve);

exports.clean = clean;
exports.default = listTasks;
