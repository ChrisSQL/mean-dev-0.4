'use strict';

module.exports = {
    client: {
        lib: {
            css: [
                'public/lib/bootstrap/dist/css/bootstrap.css',
                'public/lib/bootstrap/dist/css/bootstrap-theme.css',
                'public/lib/angular-material/angular-material.css',
                'http://netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css'
            ],
            js: [
                'public/lib/angular/angular.js',
                'public/lib/angular-aria/angular-aria.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-material/angular-material.js',
                'public/lib/angular/angular-route.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-messages/angular-messages.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-file-upload/angular-file-upload.js',
                'public/lib/angular-utils-pagination/dirPagination.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/textAngular/dist/textAngular-rangy.min.js',
                'public/lib/textAngular/dist/textAngular-sanitize.js',
                'public/lib/textAngular/dist/textAngularSetup.js',
                'public/lib/textAngular/dist/textAngular.js',
                'public/lib/angular-wysiwyg/dist/angular-wysiwyg.js',
                'public/lib/angular-wysiwyg/dist/bootstrap-colorpicker-module.js',
                'public/lib/jquery/dist/jquery.js',
                'public/lib/moment/moment.js',
                'public/lib/angular-moment/angular-moment.js',
                'public/lib/angulike/angulike.js'


            ],
            tests: ['public/lib/angular-mocks/angular-mocks.js']
        },
        css: [
            'modules/*/client/css/*.css'

        ],
        less: [
            'modules/*/client/less/*.less'
        ],
        sass: [
            'modules/*/client/scss/*.scss'
        ],
        js: [
            'modules/core/client/app/config.js',
            'modules/core/client/app/init.js',
            'modules/*/client/*.js',
            'modules/*/client/**/*.js'
        ],
        views: ['modules/*/client/views/**/*.html'],
        templates: ['build/templates.js']
    },
    server: {
        gruntConfig: 'gruntfile.js',
        gulpConfig: 'gulpfile.js',
        allJS: ['server.js', 'config/**/*.js', 'modules/*/server/**/*.js'],
        models: 'modules/*/server/models/**/*.js',
        routes: ['modules/!(core)/server/routes/**/*.js', 'modules/core/server/routes/**/*.js'],
        sockets: 'modules/*/server/sockets/**/*.js',
        config: 'modules/*/server/config/*.js',
        policies: 'modules/*/server/policies/*.js',
        views: 'modules/*/server/views/*.html'
    }
};
