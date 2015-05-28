# gulp-hateip

gulp-hateip is a plugin to [hateip](https://github.com/xunuo/hateip) :)

## Install

```
npm install gulp-hateip
```

## Usage(in gulpfile.js)

```javascript
var gulp = require('gulp'),
    gulpHateip = require('gulp-hateip')
    ;

gulp.task('runGulpHateip', function(cb){
    gulpHateip.run({
        name: 'snow'
    }, cb);
});

gulp.task('default', ['runGulpHateip']);
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
