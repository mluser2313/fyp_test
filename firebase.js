// Import the necessary Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYwqi50DvsjFfldyJHBFcRCb27DoFH6N0",
    authDomain: "website-test-d1fc4.firebaseapp.com",
    databaseURL: "https://website-test-d1fc4-default-rtdb.firebaseio.com",
    projectId: "website-test-d1fc4",
    storageBucket: "website-test-d1fc4.appspot.com",
    messagingSenderId: "322934018306",
    appId: "1:322934018306:web:2b2468283dedabf95f721b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// References to the temperature and humidity data in the Realtime Database
const temperatureRef = ref(database, "sensor/temperature");
const humidityRef = ref(database, "sensor/humidity");

// Update the UI whenever the temperature value changes
onValue(temperatureRef, (snapshot) => {
    const tempValue = snapshot.val();
    document.getElementById("temperature").textContent = tempValue !== null ? tempValue : "No Data";
});

// Update the UI whenever the humidity value changes
onValue(humidityRef, (snapshot) => {
    const humidityValue = snapshot.val();
    document.getElementById("humidity").textContent = humidityValue !== null ? humidityValue : "No Data";
});
