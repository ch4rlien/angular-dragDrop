define([
    'app/main',
    'text!app/component/draggableOne/DraggableTemplate.html'
], function (app, template) {
    app
        .controller('DraggableController', function($scope){
            $scope.dragControlListeners = {
                accept: function (sourceItemHandleScope, destSortableScope) {
                    console.log('asfasf')
                    return true;
                },
                itemMoved: function (event) {//Do what you want
                    console.log('asfasf')
                },
                orderChanged: function (event) {//Do what you want
                    console.log('asfasf')
                },
                containment: '#board'//optional param.
            };
            $scope.items = [{
                text: 'asdf'
            }]
        })
        .directive('draggableOne', function(){
            return {
                template: template,
                restrict: "E"
            };
        })
});