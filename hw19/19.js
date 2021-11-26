<<<<<<< HEAD
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    const elemsList = document.querySelector("ol");
    const newLiElem = document.createElement("li");
    const inputText = document.querySelector("input");

    newLiElem.innerHTML = `${inputText.value}`;
    elemsList.append(newLiElem);
    inputText.value = "";
  }

  delet() {
    const markedLiElem = document.querySelector(".marked_li");
    markedLiElem.remove();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(menu);

const olElem = document.querySelector("ol");

function markLiElem(event) {
  const liElem = event.target.closest("li");
  liElem.classList.add("marked_li");
}

=======
class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this);
  }

  save() {
    const elemsList = document.querySelector("ol");
    const newLiElem = document.createElement("li");
    const inputText = document.querySelector("input");

    newLiElem.innerHTML = `${inputText.value}`;
    elemsList.append(newLiElem);
    inputText.value = "";
  }

  delet() {
    const markedLiElem = document.querySelector(".marked_li");
    markedLiElem.remove();
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  }
}

new Menu(menu);

const olElem = document.querySelector("ol");

function markLiElem(event) {
  const liElem = event.target.closest("li");
  liElem.classList.add("marked_li");
}

>>>>>>> 8da6e68203ca4feed34aff6e8df298d0ef3da5c3
olElem.addEventListener("click", markLiElem);