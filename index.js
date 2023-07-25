//imports 
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, push } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOySARjHbYx1pjyp2EhWBsNJAS0R8L_Ic",
  authDomain: "happytidings-d094e.firebaseapp.com",
  databaseURL: "https://happytidings-d094e-default-rtdb.firebaseio.com",
  projectId: "happytidings-d094e",
  storageBucket: "happytidings-d094e.appspot.com",
  messagingSenderId: "837640408172",
  appId: "1:837640408172:web:836c7aa7599e94054bdc49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const database = getDatabase(app);
const commentsInDB = ref(database, 'comments');

//query selectors
const publishBtnEl = document.getElementById("publish-btn");
const inputEl = document.getElementById("input-main");


console.log(publishBtnEl) 
console.log(inputEl)
publishBtnEl.addEventListener("click", function() { 
    let inputValue = inputEl.value;
    // push(commentsInDB, inputValue);
    // set(newCommentRef, inputValue)
    //     .then(() => {
    //         console.log(`${inputValue} added to database`);
    //     })
    //     .catch((error) => {
    //         console.error("Error adding data to the database:", error);
    //     });
    console.log(inputValue);
    console.log("button clicked");
})