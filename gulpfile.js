const { src, dest, series, watch } = require(`gulp`);
const htmlValidator = require(`gulp-html`);
const htmlCompressor = require(`gulp-htmlmin`);
const CSSLinter = require(`gulp-stylelint`);
const cssCompressor = require(`gulp-uglifycss`);
const babel = require(`gulp-babel`);
const jsCompressor = require(`gulp-uglify`);
const jsLinter = require(`gulp-eslint`);
const css = require(`css`);
const browserSync = require(`browser-sync`);
const reload = browserSync.reload;
const del = require(`del`);
let browserChoice = `default`;


async function brave () {
    browserChoice = `brave browser`;
}

async function chrome () {
    browserChoice = `google chrome`;
}

async function edge () {
    // In Windows, the value might need to be “microsoft-edge”. Note the dash.
    browserChoice = `microsoft edge`;
}

async function firefox () {
    browserChoice = `firefox`;
}

async function opera () {
    browserChoice = `opera`;
}

async function safari () {
    browserChoice = `safari`;
}

async function vivaldi () {
    browserChoice = `vivaldi`;
}

async function allBrowsers () {
    browserChoice = [
        `brave browser`,
        `google chrome`,
        `microsoft edge`,
        `firefox`,
        `opera`,
        `safari`,
        `vivaldi`
    ];
}

let validateHTML = () => {
    return src([`html/*.html`, `html/**/*.html`]).pipe(htmlValidator());
};

let compressHTML = () => {
    return src([`html/*.html`,`html/**/*.html`])
        .pipe(htmlCompressor({collapseWhitespace: true}))
        .pipe(dest(`prod`));
};

let compressCSS = () => {
    return src([`css/*.css`, `css/**/*.css`])
        .pipe(cssCompressor())
        .pipe(dest(`prod`));
};

let compileCSSForProd = () => {
    return src(`css/style.css`)
        .pipe(css.sync({
            outputStyle: `compressed`,
            precision: 10
        }).on(`error`, css.logError))
        .pipe(dest(`prod/css`));
};

let compileCSSForDev = () => {
    return src(`css/style.css`)
        .pipe(css.sync({
            outputStyle: `expanded`,
            precision: 10
        }).on(`error`, css.logError))
        .pipe(dest(`temp/css`));
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
        .pipe(dest(`prod`));
};

let lintJS = () => {
    return src(`js/*.js`)
        .pipe(jsLinter())
        .pipe(jsLinter.formatEach());
};

let lintCSS = () => {
    return src(`css/*.css`)
        .pipe(CSSLinter({
            failAfterError: false,
            reporters: [
                {formatter: `string`, console: true}
            ]
        }));
};

let dev = () => {
    browserSync({
        notify: true,
        port: 9000,
        reloadDelay: 50,
        browser: browserChoice,
        server: {
            baseDir: [
                `temp`,
                `html`,
                `css`,
                `js`
            ]
        }
    });

    watch(`js/*.js`, series(lintJS, transpileJSForProd))
        .on(`change`, reload);

    watch(`html/**/*.html`, validateHTML)
        .on(`change`, reload);


    watch(`css/*.css`,
        series(compileCSSForProd, lintCSS)
    ).on(`change`, reload);
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
exports.brave = series(brave, dev);
exports.chrome = series(chrome, dev);
exports.edge = series(edge, dev);
exports.firefox = series(firefox, dev);
exports.opera = series(opera, dev);
exports.safari = series(safari, dev);
exports.vivaldi = series(vivaldi, dev);
exports.allBrowsers = series(allBrowsers, dev);
exports.validateHTML = validateHTML;
exports.compressHTML = compressHTML;
exports.compressCSS = compressCSS;
exports.compileCSSForProd = compileCSSForProd;
exports.compileCSSForDev = compileCSSForDev;
exports.transpileJSForProd = transpileJSForProd;
exports.transpileJSForDev = transpileJSForDev;
exports.lintCSS = lintCSS;
exports.lintJS = lintJS;
exports.build = series(
    compressHTML,
    transpileJSForProd,
    compressCSS
);
exports.dev = series(
    validateHTML,
    lintJS,
    transpileJSForProd,
    transpileJSForDev,
    dev
);
exports.clean = clean;
exports.default = listTasks;
