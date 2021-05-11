function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

async function getMeals(){
  console.log('data request');
  const diningRequest = await fetch('/api/wholeMeal');
  const diningData = await diningRequest.json();
  return diningData;
}

async function windowActions(){
  console.log('loaded window');
  const results = await getMeals();
  const meals = results.data;

  const mealArray = [1,2,3,4,5,6,7,8,9,10];
  const selectedMeals = mealArray.map((element) => {
      const random = getRandomIntInclusive(0, meals.length -1);
      return meals[random];
  });
  console.table(selectedMeals);

  const result = document.querySelector('.body');
  selectedMeals.forEach((element) =>{
      const newRows = document.createElement('tr');
      newRows.innerHTML = `
      <td>${element.meal_id}</td>
      <td>${element.meal_name}</td>
      <td>${element.calories}</td>
      <td>${element.serving_size}</td>
      <td>${element.cholesterol}</td>
      <td>${element.sodium}</td>
      <td>${element.carbs}</td>
      <td>${element.protein}</td>
      <td>${element.fat}</td>
      `;
      result.append(newRows);


      const chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          title:{
              text: "Macro table"
          },
          axisX: {
              valueFormatString: ""
          },
          axisY: {
              prefix: ""
          },
          toolTip: {
              shared: true
          },
          legend:{
              cursor: "pointer",
              itemclick: toggleDataSeries
          },
          data: [{
              type: "stackedBar",
              name: "Calories",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].calories},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].calories },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].calories },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].calories },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].calories },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].calories },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].calories },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].calories },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].calories },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].calories }
              ]
          },
          {
              type: "stackedBar",
              name: "Serving Size",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].serving_size},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].serving_size },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].serving_size },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].serving_size },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].serving_size },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].serving_size },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].serving_size },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].serving_size },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].serving_size },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].serving_size }
              ]
          },
          {
              type: "stackedBar",
              name: "Cholesterol",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].cholesterol},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].cholesterol },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].cholesterol },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].cholesterol },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].cholesterol },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].cholesterol },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].cholesterol },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].cholesterol },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].cholesterol },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].cholesterol }
              ]
          },
          {
              type: "stackedBar",
              name: "Sodium",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].sodium},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].sodium },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].sodium },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].sodium },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].sodium },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].sodium },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].sodium },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].sodium },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].sodium },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].sodium }
              ]
          },
          {
              type: "stackedBar",
              name: "Carbs",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].carbs},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].carbs },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].carbs },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].carbs },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].carbs },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].carbs },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].carbs },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].carbs },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].carbs },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].carbs }
              ]
          },
          {
              type: "stackedBar",
              name: "Protein",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].protein},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].protein },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].protein },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].protein },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].protein },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].protein },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].protein },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].protein },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].protein },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].protein }
              ]
          },
          {

              type: "stackedBar",
              name: "Fats",
              showInLegend: "true",
              xValueFormatString: "",
              yValueFormatString: "",
              dataPoints: [
                  { label: selectedMeals[0].meal_name, y: selectedMeals[0].carbs},
                  { label: selectedMeals[1].meal_name, y: selectedMeals[1].carbs },
                  { label: selectedMeals[2].meal_name, y: selectedMeals[2].carbs },
                  { label: selectedMeals[3].meal_name, y: selectedMeals[3].carbs },
                  { label: selectedMeals[4].meal_name, y: selectedMeals[4].carbs },
                  { label: selectedMeals[5].meal_name, y: selectedMeals[5].carbs },
                  { label: selectedMeals[6].meal_name, y: selectedMeals[6].carbs },
                  { label: selectedMeals[7].meal_name, y: selectedMeals[7].carbs },
                  { label: selectedMeals[8].meal_name, y: selectedMeals[8].carbs },
                  { label: selectedMeals[9].meal_name, y: selectedMeals[9].carbs }
              ]
          }]
      });
      chart.render();
      
      function toggleDataSeries(e) {
          if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
              e.dataSeries.visible = false;
          }
          else {
              e.dataSeries.visible = true;
          }
          chart.render();
      }   
  });
  return selectedMeals;
}
window.onload = windowActions












// function convertRestaurantsToCategories(restaurantList) {
//     // process your restaurants here!
//     return list;
//   }
  
//   function makeYourOptionsObject(datapointsFromRestaurantsList) {
//     // set your chart configuration here!
//     CanvasJS.addColorSet('customColorSet1', [
//       // add an array of colors here https://canvasjs.com/docs/charts/chart-options/colorset/
//     ]);
  
//     return {
//       animationEnabled: true,
//       colorSet: 'customColorSet1',
//       title: {
//         text: 'Change This Title'
//       },
//       axisX: {
//         interval: 1,
//         labelFontSize: 12
//       },
//       axisY2: {
//         interlacedColor: 'rgba(1,77,101,.2)',
//         gridColor: 'rgba(1,77,101,.1)',
//         title: 'Change This Title',
//         labelFontSize: 12,
//         scaleBreaks: {customBreaks: []} // Add your scale breaks here https://canvasjs.com/docs/charts/chart-options/axisy/scale-breaks/custom-breaks/
//       },
//       data: [{
//         type: 'bar',
//         name: 'restaurants',
//         axisYType: 'secondary',
//         dataPoints: datapointsFromRestaurantsList
//       }]
//     };
//   }
  
//   function runThisWithResultsFromServer(jsonFromServer) {
//     console.log('jsonFromServer', jsonFromServer);
//     sessionStorage.setItem('restaurantList', JSON.stringify(jsonFromServer)); // don't mess with this, we need it to provide unit testing support
//     // Process your restaurants list
//     // Make a configuration object for your chart
//     // Instantiate your chart
//     const reorganizedData = convertRestaurantsToCategories(jsonFromServer);
//     const options = makeYourOptionsObject(reorganizedData);
//     const chart = new CanvasJS.Chart('chartContainer', options);
//     chart.render();
//   }
  
//   // Leave lines 52-67 alone; do your work in the functions above
//   document.body.addEventListener('submit', async (e) => {
//     e.preventDefault(); // this stops whatever the browser wanted to do itself.
//     const form = $(e.target).serializeArray();
//     fetch('/api', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(form)
//     })
//       .then((fromServer) => fromServer.json())
//       .then((jsonFromServer) => runThisWithResultsFromServer(jsonFromServer))
//       .catch((err) => {
//         console.log(err);
//       });
//   });