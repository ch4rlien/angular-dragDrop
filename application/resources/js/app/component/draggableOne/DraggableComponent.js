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

            $scope.itemClick = function(item){
                item.collapsed = !item.collapsed;
            };

            $scope.itemsList = [
                {
                    text: 'one'
                },
                {
                    text: 'two'
                }];
            $scope.shopping = [{
                text: 'none',
                collapsed: false,
                list:[
                    {
                        text: 'rohlik'
                    },
                    {
                        text: 'parek'
                    }
                ]
            }];
        })
        .directive('draggableOne', function(){
            return {
                template: template,
                restrict: "E"
            };
        })
});