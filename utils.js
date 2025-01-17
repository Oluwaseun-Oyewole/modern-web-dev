function createElement(type, id, content, events = {}) {
  let element = document.createElement(type);
  element.id = id;
  element.textContent = content;
  for (let [fn, handle] of Object.entries(events)) {
    element.addEventListener(fn, handle);
  }

  document.body.appendChild(element);
  return element;
}
