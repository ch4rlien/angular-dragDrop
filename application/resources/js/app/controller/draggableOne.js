define([
    'app/main',
    'app/component/draggableOne/DraggableComponent'
], function (app) {
    app.controller('DraggableOneCtrl', function ($scope) {
        $scope.dragControlListeners = {
            accept: function (sourceItemHandleScope, destSortableScope) {
                console.log('sfsd');
                return true;
            },
            itemMoved: function (event) {
                console.log('sfsd');
            },
            orderChanged: function (event) {
                console.log('sfsd');
            },
            dragEnd: function() {
                console.log(arguments);
            }
        };

        $scope.treeFamily = {
            name : "Parent",
            collapsed: false,
            children: [{
                name : "Child1",
                collapsed: false,
                children: [{
                    name : "Grandchild1",
                    collapsed: false,
                    children: []
                },{
                    name : "Grandchild2",
                    collapsed: false,
                    children: []
                },{
                    name : "Grandchild3",
                    collapsed: false,
                    children: []
                }]
            }, {
                name: "Child2",
                collapsed: false,
                children: []
            }]
        };
    });
});