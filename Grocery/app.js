// selecting items
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editId = "";

// Event Listeners

form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", clearItems);

// Functions
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  //   if (value !== "" && editFlag === false) {
  if (value && !editFlag) {
    // console.log("Adding item to the list");
    const element = document.createElement("article");
    element.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
    <button type="button" class="edit-btn">
      <i class="fas fa-edit"></i>
    </button>
    <button type="button" class="delete-btn">
      <i class="fas fa-trash"></i>
    </button>
    `;

    const deleteBtn = element.querySelector(".delete-btn");
    const editBtn = element.querySelector(".edit-btn");

    deleteBtn.addEventListener("click", deleteItem);
    editBtn.addEventListener("click", editItem);
    // append child
    list.appendChild(element);
    // display alert
    displayAlert("Item Added To The List", "success");
    // show list
    container.classList.add("visibleResult");

    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value !== "" && editFlag === true) {
    // console.log("Editing...");
    editElement.innerHTML = value;
    displayAlert("Success Full Edited!", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
  } else {
    displayAlert("Please Enter Value", "danger");
  }
}

// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //   remove alert
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// clearItems

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("visibleResult");
  displayAlert("All Items Deleted!", "danger");
  //   localStorage.remove(item);
  setBackToDefault();
}

// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editId = "";
  submitBtn.textContent = "submit";
}

function addToLocalStorage() {
  console.log("added to local storage");
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  list.removeChild(element);
  console.log("removed");
  if (list.children.length === 0) {
    container.classList.remove("visibleResult");
  }
  displayAlert("Item Deleted", "danger");
  setBackToDefault();
  //   removeFromLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement;
  editElement = e.currentTarget.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = element.dataset.id;
  //   console.log(editId);
  submitBtn.textContent = "Edit";
  //   console.log(editElement);
}

function editLocalStorage(id, value) {}
