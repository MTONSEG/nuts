import webpack from "webpack-stream";

export const js = () => {
	return app.gulp.src(app.path.src.js, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'app.min.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}

export const jsSwiper = () => {
	return app.gulp.src(app.path.src.jsSwiper, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'swiper.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}

export const jsForms = () => {
	return app.gulp.src(app.path.src.jsForms, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'forms.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}

export const jsTabs = () => {
	return app.gulp.src(app.path.src.jsTabs, { sourcemaps: app.isDev })
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "JS",
				message: "Error: <%= error.message %>"
			}))
		)
		.pipe(webpack({
			mode: app.isBuild ? 'production' : 'development',
			output: {
				filename: 'tabs.js',
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browsersync.stream());
}