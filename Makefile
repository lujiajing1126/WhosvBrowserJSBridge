build: src/WhosvJSBridge.js
	- uglifyjs ./src/WhosvJSBridge.js -o ./dest/WhosvJSBridge.min.js
docs: src/WhosvJSBridge.js
	- ./node_modules/.bin/jsdoc src/WhosvJSBridge.js
.PHONY:
	build docs
