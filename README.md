# jQuery MatchHeightHelper
MatchHeight Wrapper with helper functions for easy integration and initialisation.

## Installation
```
npm install @marcsaleiko/match-height-helper --save
```

Then run `window.MatchHeightHelper.init();` to initialize the module. Note that jQuery and the jQuery Plugin match-height need to be included in your build package.

After that you can use the build in CSS classes `.match-height` (for the outer container) and `.match-height-target` (for the actual match height element) in your HTML to trigger the match height plugin.

With `window.MatchHeightHelper.registerSet('.container', '.element');` your can register your own new match height trigger sets.

You can also override the default set by initializing the module with options:

```
window.MatchHeightHelper.init({
    defaultTriggerSelector: '.my-container',
    defaultTargetSelector: '.my-element'
});
```

## Changelog 

Since Version 1.0.0 this wrapper is a browser-only package and does not support node or es6 features. This might be added in future versions. 

The entrypoint for browser usage has been moved from `dist/legacy/MatchHeightHelper.js` to `src/MatchHeightHelper.js`.