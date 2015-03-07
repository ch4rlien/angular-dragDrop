define([
    'app/main',
    'text!app/component/draggableOne/treeDragDropTemplate.html',
    'text!app/component/draggableOne/DraggableTemplate.html'
], function (app, treeDragDrop, dragTemplate) {
    app
        .controller('DraggableController', function($scope){
            $scope.dragControlListeners = {
                text: 'adas',
                accept: function (sourceItemHandleScope, destSortableScope) {
                    return true;
                },
                itemMoved: function (event) {
                    console.log('sfseeeeed');
                },
                orderChanged: function (event) {
                    console.log('sfsd');
                },
                dragEnd: function() {
                    console.log(arguments);
                }
            };
            //$scope.treeClick = function(item){
            //    item.collapsed = !item.collapsed;
            //};
        })
        .directive('treeDragDrop', function(){
            return {
                template: treeDragDrop,
                restrict: "E",
                scope: {
                    family: '=',
                    action: '&'
                }
            }
        })
        .directive('draggableOne', function($compile){
            return {
                template: dragTemplate,
                restrict: "E",
                scope: {
                    family: '=',
                    action: '&',
                    callbacks: '='
                },
                compile: function(tElement, tAttr) {
                    var contents = tElement.contents().remove();
                    var compiledContents;
                    return function(scope, iElement, iAttr) {
                        if(!compiledContents) {
                            compiledContents = $compile(contents);
                        }
                        compiledContents(scope, function(clone, scope) {
                            iElement.append(clone);
                        });
                    };
                }
            };
        })
});