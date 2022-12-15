import log from 'fancy-log';
import { stream as critical } from "critical";


export const criticalStyles = () => {
	return app.gulp.src('dist/*.html')
		.pipe(
			critical({
				base: 'dist/',
				inline: true,
				css: ['dist/css/style.css'],
			})
		)
		.on('error', err => {
			log.error(err.message);
		})
		.pipe(app.gulp.dest(app.path.build.html))
}