# gulp-hateip

gulp-hateip is a plugin to [hateip](https://www.npmjs.com/package/hateip) :)

HateIP is a DDNS serve for who hate enter ip everytime.

Auto get your Local/Public IP address and association with the domain : {name}.hateip.com

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
