// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDfx7i2EoLKoNZPCdm96Xba9RXXGtbfWE",
  authDomain: "phlox-pickin-web-production.firebaseapp.com",
  projectId: "phlox-pickin-web-production",
  storageBucket: "phlox-pickin-web-production.appspot.com",
  messagingSenderId: "1098862150718",
  appId: "1:1098862150718:web:ae3c1632e2c9485fb77d6f",
  measurementId: "G-N5T3KPY05J"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export default function addLogEvent(selector, eventName, firebase_screen) {
  const buttons = document.querySelectorAll(selector)
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      logEvent(analytics, eventName, {
        firebase_screen
      })
    })
  })  
}