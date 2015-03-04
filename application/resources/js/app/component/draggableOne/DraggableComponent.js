define([
    'app/main',
    'text!app/component/draggableOne/DraggableTemplate.html'
], function (app, template) {
    app
        .controller('DraggableController', function($scope){
            $scope.dragControlListeners = {
                accept: function (sourceItemHandleScope, destSortableScope) {
                    return true;
                },
                itemMoved: function (event) {
                },
                orderChanged: function (event) {
                },
                dragEnd: function() {
                    console.log(arguments);
                }
            };
            $scope.itemsList = [
                {
                    text: 'one'
                },
                {
                    text: 'two'
                }];
            $scope.shopping = [{
                text: 'none'
            }];
        })
        .directive('draggableOne', function(){
            return {
                template: template,
                restrict: "E"
            };
        })
});