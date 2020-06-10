// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");
// console.log(button)

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
// form.on("enter", runEnter);


// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    tbody.text("")
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
      
  
  };
  