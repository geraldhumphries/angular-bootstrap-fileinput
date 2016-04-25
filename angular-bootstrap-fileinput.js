(function () {
    'use strict';

    angular
        .module('angularBootstrapFileinput', [])
        .directive('angularBfi', angularBootstrapFileinput);

    function angularBootstrapFileinput() {
        var directive = {
            restrict: 'A',
            scope: {
                options: '=angularBfi'
            },
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            element.fileinput(scope.options);
            scope.$watch('options', refresh, true);

            function refresh() {
                element.fileinput('refresh', scope.options);
            }
        }
    }
})();
