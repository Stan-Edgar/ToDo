/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Task {\n\nconstructor(title, desc, date, priority, notes, done) {\n\nthis.title = title;\nthis.desc = desc;\nthis.date = date;\nthis.priority = priority;\nthis.notes = notes;\nthis.done = done;\n\n}\n\n\n}\n\n\nclass Edit {\n\nconstructor(task) {\n    this.task = task;\n}\n\neditTitle(title) {\n    this.task.title = title;\n}\n\n\n}\n\nconst Workout = new Task(\"Evening Run\", \"doing HIIT\", \"1/30/2025\", \"high\", \"Need to get faster & build stamina\", false);\nconsole.log(Workout);\n\nconst eWorkout = new Edit(Workout);\neWorkout.editTitle(\"Morning Run\");\nconsole.log(eWorkout);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUYXNrIHtcblxuY29uc3RydWN0b3IodGl0bGUsIGRlc2MsIGRhdGUsIHByaW9yaXR5LCBub3RlcywgZG9uZSkge1xuXG50aGlzLnRpdGxlID0gdGl0bGU7XG50aGlzLmRlc2MgPSBkZXNjO1xudGhpcy5kYXRlID0gZGF0ZTtcbnRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbnRoaXMubm90ZXMgPSBub3RlcztcbnRoaXMuZG9uZSA9IGRvbmU7XG5cbn1cblxuXG59XG5cblxuY2xhc3MgRWRpdCB7XG5cbmNvbnN0cnVjdG9yKHRhc2spIHtcbiAgICB0aGlzLnRhc2sgPSB0YXNrO1xufVxuXG5lZGl0VGl0bGUodGl0bGUpIHtcbiAgICB0aGlzLnRhc2sudGl0bGUgPSB0aXRsZTtcbn1cblxuXG59XG5cbmNvbnN0IFdvcmtvdXQgPSBuZXcgVGFzayhcIkV2ZW5pbmcgUnVuXCIsIFwiZG9pbmcgSElJVFwiLCBcIjEvMzAvMjAyNVwiLCBcImhpZ2hcIiwgXCJOZWVkIHRvIGdldCBmYXN0ZXIgJiBidWlsZCBzdGFtaW5hXCIsIGZhbHNlKTtcbmNvbnNvbGUubG9nKFdvcmtvdXQpO1xuXG5jb25zdCBlV29ya291dCA9IG5ldyBFZGl0KFdvcmtvdXQpO1xuZVdvcmtvdXQuZWRpdFRpdGxlKFwiTW9ybmluZyBSdW5cIik7XG5jb25zb2xlLmxvZyhlV29ya291dCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;