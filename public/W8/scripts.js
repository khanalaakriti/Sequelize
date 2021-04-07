async function populateRestaurants() {
    const request = await fetch('/api/dining');
    const data = await request.json();
    const allDinersArray = data.data;

    const targetDiners= document.querySelector('.target-diners');
    targetDiners.innerText= '';

    allDinersArray.forEach(diner => {
        const appendItem= document.createElement('li');
        appendItem.classList.add('black');
        appendItem.classList.add('boldText');
        const dinerHallId = diner.hall_id
        const dinerHallName = diner.hall_name
        const dinerHallAddress = diner.hall_address
        appendItem.innerHTML= `${dinerHallId} - ${dinerHallName} - ${dinerHallAddress}`
        targetDiners.append(appendItem);
    })

        // const appendItem = document.createElement('li');
        // appendItem.classList.add('block');
        // appendItem.classList.add('list-item');
        // appendItem.classList.add('box');
        // appendItem.classList.add('dark-background');
        // appendItem.classList.add('light-text');
        // appendItem.classList.add('mt-10');
        // appendItem.innerHTML= `<div class="list-header is-size-5">${item.name}</div><div class="is-size-6 address">${item.address_line_1}</div>`;
        // suggestions.append(appendItem);


    
};
  
async function windowActions() {
    console.log('window loaded <-------------');
    await populateRestaurants();
}

  
window.onload= windowActions;

// test