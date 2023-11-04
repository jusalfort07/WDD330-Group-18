// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  const keyValue = JSON.parse(localStorage.getItem(key));
  const valueArr = []

  if(keyValue != null){
    keyValue.forEach(value => {
      valueArr.push(value)
    });

    valueArr.push(data)
  } else {
    valueArr.push(data)
  }
  localStorage.setItem(key, JSON.stringify(valueArr));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}
