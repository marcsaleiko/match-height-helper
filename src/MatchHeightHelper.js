/*!
 * MatchHeightHelper v1.1.0
 * MatchHeight Wrapper with helper functions for easy integration and initialisation.
 * ISC License
 */
window.MatchHeightHelper = function () {
  var app = {};
  var settings = {
    defaultTriggerSelector: '.match-height',
    defaultTargetSelector: '.match-height-target'
  };
  var matchHeightOptions = {
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  };

  app.setMatchHeightOptions = function(options) {
    matchHeightOptions = $.extend( matchHeightOptions, options );
  }

  app.init = function (options) {
    settings = $.extend(settings, options);
    
    // this one walks through all match-height class
    // instances and applies the match-height plugin to every match-height-target
    // this is a better approach than .match-height .match-height-target selector
    // because the height will be calculated for each match-height context individually
    $(settings.defaultTriggerSelector).each(function () {
      $(this).find(settings.defaultTargetSelector).matchHeight(matchHeightOptions);
    });
  };

  app.registerSet = function (triggerSelector, targetSelector, matchHeightOptionsOverrides ) {
    if (typeof triggerSelector !== 'undefined' && typeof targetSelector !== 'undefined') {

      var customMatchHeightOptions = matchHeightOptions;
      if( typeof matchHeightOptionsOverrides !== 'undefined' ) {
        customMatchHeightOptions = $.extend( matchHeightOptions, matchHeightOptionsOverrides );
      }

      $(triggerSelector).each(function () {
        $(this).find(targetSelector).matchHeight(customMatchHeightOptions);
      });
    }
  };

  return app;
}();