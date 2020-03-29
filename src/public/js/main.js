(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var socket = io("/");

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

function sendMessage(message) {
  socket.emit("sendMessage", {
    message: message
  });
  console.log("You: ".concat(message));
}

function handleIncomingMessage(data) {
  var nickname = data.nickname,
      message = data.message;
  console.log("".concat(nickname, ": ").concat(message));
}

socket.on("incomingMessage", handleIncomingMessage);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfY2QyZjVhMTguanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZXROaWNrbmFtZSIsIm5pY2tuYW1lIiwiZW1pdCIsInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbmNvbWluZ01lc3NhZ2UiLCJkYXRhIiwib24iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjs7QUFFQSxTQUFTQyxXQUFULENBQXFCQyxRQUFyQixFQUErQjtBQUM3QkgsRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFRCxJQUFBQSxRQUFRLEVBQVJBO0FBQUYsR0FBM0I7QUFDRDs7QUFFRCxTQUFTRSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUM1Qk4sRUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFFRSxJQUFBQSxPQUFPLEVBQVBBO0FBQUYsR0FBM0I7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLGdCQUFvQkYsT0FBcEI7QUFDRDs7QUFFRCxTQUFTRyxxQkFBVCxDQUErQkMsSUFBL0IsRUFBcUM7QUFBQSxNQUMzQlAsUUFEMkIsR0FDTE8sSUFESyxDQUMzQlAsUUFEMkI7QUFBQSxNQUNqQkcsT0FEaUIsR0FDTEksSUFESyxDQUNqQkosT0FEaUI7QUFFbkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlTCxRQUFmLGVBQTRCRyxPQUE1QjtBQUNEOztBQUVETixNQUFNLENBQUNXLEVBQVAsQ0FBVSxpQkFBVixFQUE2QkYscUJBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5mdW5jdGlvbiBzZXROaWNrbmFtZShuaWNrbmFtZSkge1xuICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIsIHsgbmlja25hbWUgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgc29ja2V0LmVtaXQoXCJzZW5kTWVzc2FnZVwiLCB7IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGBZb3U6ICR7bWVzc2FnZX1gKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW5jb21pbmdNZXNzYWdlKGRhdGEpIHtcbiAgY29uc3QgeyBuaWNrbmFtZSwgbWVzc2FnZSB9ID0gZGF0YTtcbiAgY29uc29sZS5sb2coYCR7bmlja25hbWV9OiAke21lc3NhZ2V9YCk7XG59XG5cbnNvY2tldC5vbihcImluY29taW5nTWVzc2FnZVwiLCBoYW5kbGVJbmNvbWluZ01lc3NhZ2UpO1xuIl19
},{}]},{},[1])