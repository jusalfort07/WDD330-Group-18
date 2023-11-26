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

// W02 Team Activity Function
export function getParams(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

// W02 Individual Activity Function
export function renderListWithTemplate(templateFn, parentElement, list, position = "afterbegin", clear = "false"){
  const htmlStrings = list.map(templateFn);

  if (clear) {
    parentElement.innerHTML = "";
  }

  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}


// W3 GROUP ACTIVITY 
export function renderWithTemplate(template, parentElement, data, callback,  position = "afterbegin"){
  parentElement.insertAdjacentHTML(position, template);

  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const html = await fetch(path);
  const template = await html.text();
  return template;
} 

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html")
  const footerTemplate = await loadTemplate("../partials/footer.html")

  const headerElement = document.querySelector("#header");
  const footerElement = document.querySelector("#footer");

  renderWithTemplate(headerTemplate, headerElement);
  renderWithTemplate(footerTemplate, footerElement);
}

export function alertMessage(message, scroll = true, duration = 3000) {
  const alert = document.createElement("div");
  alert.classList.add("alert");
  alert.innerHTML = `<p>${message}</p><span>X</span>`;

  alert.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      main.removeChild(this);
    }
  });
  const main = document.querySelector("main");
  main.prepend(alert);
  if (scroll) window.scrollTo(0, 0);
}

export function removeAllAlerts() {
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => document.querySelector("main").removeChild(alert));
}