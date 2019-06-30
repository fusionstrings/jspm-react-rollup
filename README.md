# jspm-react-rollup
Showcases difference between jspm build and rollup build using jspm resolver

JSPM build in [dist/jspm/main.js](dist/jspm/main.js) 
outputs differently than

Rollup build in [dist/rollup/main.js](dist/jspm/main.js)

The difference per se is not my concern but rollup build adds dependency of 'process' module. 
[`System.register(['process'], function () {`](dist/rollup/main.js#L1)
It works after manually removing it.

JSPM build works out of the box.
[`System.register([], function () {`](dist/jspm/main.js#L1)

The issue is same with other modules formats than "system".