// from data.js
var tableData = data;
console.log(tableData)
    // selected tbody in html
var tbody = d3.select("tbody");
//built function to add data from data file to table
function tableBuild(data) {
    //used to clear current data on table
    tbody.html("");
    //used forEach to itrate through each ro of data
    data.forEach((row) => {
        //created variable to create a new row on the table
        var dataRow = tbody.append('tr');
        //read values from each row of the dataset
        Object.values(row).forEach((value) => {
            //appened the new row in order to accept the values
            var cell = dataRow.append('td');
            //inserted the values into each corresponing cell on the table
            cell.text(value);
        })
    })
}
//called the function with the data from the dat.js file
tableBuild(tableData);

//created filter function to filter dataset by user inputted date
function filter() {
    //created variable to read the user's input 
    var date = d3.select('#datetime').property('value');
    //used if to determine if user has add an input date
    if (date) {
        var filterData = tableData.filter(row => row.datetime === date);
    }
    //called the function with the filtered data from the dat.js file
    tableBuild(filterData);
}
//set up event lister to apply the filter on a click of the filter button
d3.selectAll("#filter-btn").on("click", filter);