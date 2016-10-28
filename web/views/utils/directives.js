angular.module('directives', [])
        .directive('companyInfo', function () {
            return {
                restrict: 'EA',
                template: [
                    '<div>' +
                            'Company: {{user.companyName}}<br>' +
                            'URL:     {{user.companyUrl}}<br>' +
                            'Created: {{user.created | date:"MMM d, y"}}' +
                            '</div>'
                ]
            };

        })
        .directive('myDirective', function () {

            return {
                restrict: 'EA',
                link: function (scope, element, attrs) {

                    var attributeParts = attrs.content.split(',');
                    for (var i = 0; i < attributeParts.length; i++) {
                        element.append('<img src="images/' + attributeParts[i] + '.png" alt="could not find image" height="50" width="50"/>');
                        console.log(attributeParts[i]);
                    }
                }
            };
        });