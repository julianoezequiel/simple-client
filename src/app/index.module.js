(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Apps
            'app.simple',
            'app.dashboards',
            'app.pages.auth.login',

            //itens adicionais
            'ngStorage',
            'app.calendar',
            'app.mail',
            'app.file-manager',
            'app.scrumboard',
            'app.gantt-chart',
            'app.todo',

            // Pages
            'app.pages',

            // User Interface
            'app.ui',

            // Components
            'app.components'
        ]);
})();