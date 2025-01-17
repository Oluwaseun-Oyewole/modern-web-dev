"use strict";

require("core-js/modules/web.dom-collections.iterator.js");
function createElement(type, id, content) {
  let events =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  let element = document.createElement(type);
  element.id = id;
  element.textContent = content;
  for (let [fn, handle] of Object.entries(events)) {
    element.addEventListener(fn, handle);
  }
  document.body.appendChild(element);
  return element;
}
