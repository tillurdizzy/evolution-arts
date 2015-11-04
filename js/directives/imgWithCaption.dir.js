app.directive('imgWithCaption', function () {
    return {
      restrict: 'E',
      scope:{
        title:'@',
        cap:'@',
        imgsrc:'@'
      },
      templateUrl:'js/directives/templates/imageWithCaption.html',
      link: function(scope, elm, attrs) {
      }
    }
});