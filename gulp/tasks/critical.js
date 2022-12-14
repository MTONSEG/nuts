import log from 'fancy-log';
import { stream as critical } from "critical";


export const criticalStyles = () => {
	return app.gulp.src('docs/delivery.html')
		.pipe(
			critical({
				base: 'docs/',
				inline: true,
				css: ['docs/css/style.min.css']
			})
		)
		.on('error', err => {
			log.error(err.message);
		})
		.pipe(app.gulp.dest(app.path.build.html))
}