var gutil   = require('gulp-util'),
    hateip = require('hateip')
    ;

module.exports = {
	run: function(opt, done) {
        
		var options = opt || {}
        
        hateip.run(options).then(
            function(res){
                done(res);
            },
            function(error){
                var err = new gutil.PluginError('gulp-hateip', error)
                done(err);
            }
        );
        
	}
}