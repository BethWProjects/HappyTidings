//imports
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOySARjHbYx1pjyp2EhWBsNJAS0R8L_Ic",
  authDomain: "happytidings-d094e.firebaseapp.com",
  databaseURL: "https://happytidings-d094e-default-rtdb.firebaseio.com",
  projectId: "happytidings-d094e",
  storageBucket: "happytidings-d094e.appspot.com",
  messagingSenderId: "837640408172",
  appId: "1:837640408172:web:836c7aa7599e94054bdc49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

window.addEventListener("DOMContentLoaded", () => {
  const database = getDatabase();
  const commentsInDB = ref(database, "comments");

  //query selectors
  const publishBtnEl = document.getElementById("publish-btn");
  const inputEl = document.getElementById("input-main");
  const commentsListEl = document.getElementById("comments-list");

  publishBtnEl.addEventListener("click", addComment);

  function addComment() {
    let inputValue = inputEl.value;
    push(commentsInDB, inputValue);
    clearInputField();
  }

  onValue(commentsInDB, (snapshot) => {
    let itemsArray = Object.entries(snapshot.val());
    clearItemList();
    for (let i = 0; i < itemsArray.length; i++) {
      let currentItem = itemsArray[i];
      let currentItemID = currentItem[0];
      let currentIDValue = currentItem[1];
      appendItemToShoppingListEl(currentIDValue);
    }
  });

  function clearItemList() {
    commentsListEl.innerHTML = "";
  }

  function clearInputField() {
    inputEl.value = "";
  }

  function appendItemToShoppingListEl(itemValue) {
    commentsListEl.innerHTML += `<li id="list-items">${itemValue}</li>`;
  }
});
