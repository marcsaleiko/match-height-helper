window.MatchHeightHelper = function () {
  var app = {};
  var settings = {
    defaultTriggerSelector: '.match-height',
    defaultTargetSelector: '.match-height-target'
  };

  app.init = function (options) {
    $.extend(settings, options); 
    
    // this one walks through all match-height class
    // instances and applies the match-height plugin to every match-height-target
    // this is a better approach than .match-height .match-height-target selector
    // because the height will be calculated for each match-height context individually
    $(settings.defaultTriggerSelector).each(function () {
      $(this).find(settings.defaultTargetSelector).matchHeight();
    });
  };

  app.registerSet = function (triggerSelector, targetSelector) {
    if (typeof triggerSelector !== 'undefined' && typeof targetSelector !== 'undefined') {
      $(triggerSelector).each(function () {
        $(this).find(targetSelector).matchHeight();
      });
    }
  };

  return app;
}();