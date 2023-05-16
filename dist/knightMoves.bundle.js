/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/knightMoves.js":
/*!****************************!*\
  !*** ./src/knightMoves.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knightMoves\": () => (/* binding */ knightMoves)\n/* harmony export */ });\nconst knightMoves = (start, end) => {\r\n    function _isOnBoard(x, y) {\r\n        return (x >= 0 && x < 8 && y >= 0 && y < 8);\r\n    }\r\n    function knightNode(coords) {\r\n        let x = coords[0];\r\n        let y = coords[1];\r\n        let parent = null;\r\n        return {parent, coords, x, y}\r\n    }\r\n    function returnPath(path){\r\n        let fullPath = [];\r\n        while(path != null){\r\n            fullPath.push([path.x, path.y]);\r\n            path = path.parent;\r\n        }\r\n        console.log('The shortest path is:');\r\n        console.log(fullPath);\r\n        return fullPath;\r\n    }\r\n    const _moveX = [1, 2, -1, -2, 2, 1, -1, -2];\r\n    const _moveY = [2, 1, 2, 1, -1, -2, -2, -1];\r\n    let startNode = knightNode(start);\r\n    let endNode = knightNode(end);\r\n    \r\n    let que = [];\r\n    que.push(startNode);\r\n    while(que.length > 0){\r\n        let currentNode = que.shift();\r\n        if(currentNode.x == end[0] && currentNode.y == end[1]){\r\n            return returnPath(currentNode);\r\n        }\r\n        for(let i = 0; i < 8; i++){\r\n            let nextX = currentNode.x + _moveX[i];\r\n            let nextY = currentNode.y + _moveY[i];\r\n            if(_isOnBoard(nextX,nextY)){\r\n                let childNode = knightNode([nextX,nextY]);\r\n                childNode.parent = currentNode;\r\n                if(nextX == endNode.x && nextY == endNode.y){\r\n                    i = 10;\r\n                    return returnPath(childNode);\r\n                }\r\n                else {\r\n                    que.push(childNode);\r\n                }\r\n            }            \r\n        }\r\n    }\r\n    return \"not possible\";\r\n};\n\n//# sourceURL=webpack://odin-knightmoves/./src/knightMoves.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/knightMoves.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;