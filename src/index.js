import "./styles.css";
// Intersection Observer
import { generateData } from "./data";

const addObserverElement = (
  className = "observer-div-bottom",
  parentId = "infinite-scroll"
) => {
  const emptyChild = document.createElement("div");
  emptyChild.classList.add(className);
  let parentElemnt = document.getElementById(parentId);
  parentElemnt.appendChild(emptyChild);
};

const updateObserverElement = (
  className = "observer-div-bottom",
  parentId = "infinite-scroll"
) => {
  let parentElemnt = document.getElementById("infinite-scroll");
  let myObserverElement = document.querySelector(".observer-div-bottom");
  parentElemnt.appendChild(myObserverElement);
};

const generateItems = (size) => {
  let result = generateData(1, size);
  console.log(result);

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < result.length; i++) {
    let newElement = document.createElement("div");
    newElement.innerHTML = result[i];
    newElement.classList.add("scroll-item");
    fragment.appendChild(newElement);
  }
  return fragment;
};

const addElements = (size) => {
  let newFragment = generateItems(size);
  let parentElemnt = document.getElementById("infinite-scroll");
  parentElemnt.appendChild(newFragment);
  updateObserverElement();
};

const obsCallback = (event) => {
  console.log("event", event);
  console.log(event[0].intersectionRatio);
  if (event[0].intersectionRatio) {
    addElements(100);
  }
};

(() => {
  let options = {
    root: document.querySelector("#infinite-scroll"),
    rootMargin: "0px",
    threshold: 1.0
  };

  let observer = new IntersectionObserver(obsCallback, options);

  const docElement = document.getElementById("infinite-scroll");
  const fragments = generateItems();
  addObserverElement("observer-div-top", "infinite-scroll");
  docElement.append(fragments);
  addObserverElement();
  let target = document.querySelector(".observer-div-bottom");
  let targetTop = document.querySelector(".observer-div-top");
  observer.observe(target);
  observer.observe(targetTop);
})();
