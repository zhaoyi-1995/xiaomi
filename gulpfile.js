let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let babel = require('gulp-babel');



gulp.task('watchall',async ()=>{
	//监听html文件，并且复制
	gulp.watch('*.html',async ()=>{
		gulp.src('*.html')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomiyoupin'));
	});
	
	//监听img文件，并且复制
	gulp.watch('img/**/*',async ()=>{
		gulp.src('img/**/*')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomiyoupin\\img'));
	});
	
	//监听js文件 压缩 复制
	gulp.watch('js/*.js',async ()=>{
		gulp.src('js/*.js')
		.pipe(babel({
			presets:['es2015']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomiyoupin\\js'));
	});
	
	//监听scss文件 编译 复制
	gulp.watch('sass/*.scss',async ()=>{
		gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('xiaomi\\css'));
	});
	
	gulp.watch('sass/*.scss',async ()=>{
		gulp.src('sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\xiaomiyoupin\\css'));
	});
	
})
