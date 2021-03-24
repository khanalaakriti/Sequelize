async function aakriti() {
    const request = await fetch('/api/dining');
    const data = await request.json();
    const allDinersArray = data.data;

    const targetDiners= document.querySelector('.target-diners');
    targetDiners.innerText= '';

    allDinersArray.forEach(diner => {
        const appendItem= document.createElement('li');
        appendItem.classList.add('redColor');
        appendItem.classList.add('boldText');
        const dinerHallId = diner.hall_id
        const dinerHallName = diner.hall_name
        const dinerHallAddress = diner.hall_address
        appendItem.innerHTML= `${dinerHallId} - ${dinerHallName} - ${dinerHallAddress}`
        targetDiners.append(appendItem);
    })

};
  
async function windowActions() {
    console.log('window loaded <-------------');
    await aakriti();
}

  
window.onload= windowActions;