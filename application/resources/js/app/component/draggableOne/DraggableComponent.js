define([
    'app/main',
    'text!app/component/draggableOne/DraggableTemplate.html'
], function (app, template) {
    app
        .controller('DraggableController', function($scope){
            $scope.onItemDrop = function (event, ui) {
                //ui.draggable.draggable();
                //ui.draggable.draggable('option', 'revert', false)
            }
        })
        .directive('draggableOne', function(){
            return {
                template: template,
                restrict: "E"
            };
        })
});