document.addEventListener("DOMContentLoaded", () => {
  const timeItems = document.querySelectorAll(".time-item");

  // Check if there are time items
  if (timeItems.length > 0) {
    function showTimes() {
      let baseTime = new Date(); // Current time
      const minutesToAdd = 16; // Time increment
      
      // Loop through each item and set its time
      timeItems.forEach((item, index) => {
        let time = new Date(baseTime.getTime() + (index * minutesToAdd * 60000)); // Add 16 minutes * index
        item.querySelector(".display-time").innerText = time.toLocaleTimeString("en-US", {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
      });

      // Update the times every minute
      setTimeout(showTimes, 60000);
    }

    showTimes();
  } else {
    console.error("No elements with class 'time-item' found.");
  }
});

// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"
  ];
  const dayWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
