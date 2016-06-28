var gulp          = require('gulp');
var sequence      = require('run-sequence');

gulp.task('build', function(done) {
  sequence('clean', 'shopify-config', 'shopify-pages', 'shopify-layouts', 'shopify-locales', 'shopify-snippets', 'shopify-templates', ['sass', 'javascript', 'images'], done);
});
