(function () {
    'use strict';

    angular
        .module('angularBootstrapFileinput', [])
        .directive('angularBfi', angularBootstrapFileinput);

    function angularBootstrapFileinput() {
        var directive = {
            restrict: 'A',
            scope: {
                options: '=angularBfi',
                watchOptions: '@?watchOptions'
            },
            link: linkFunc,
            controller: AngularBootstrapFileinputController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, element) {
            element.fileinput(scope.vm.options);
            scope.vm.refresh = refresh;
            activate();

            function activate() {
                if (scope.vm.watchOptions){
                    scope.$watch('vm.options', refresh, true);
                }
            }
            function refresh() {
                element.fileinput('refresh', scope.vm.options);
            }
        }
    }

    function AngularBootstrapFileinputController(){
        var vm = this;
        vm.watchOptions = angular.isDefined(vm.watchOptions) && vm.watchOptions === "true";
    }
})();
