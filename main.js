const itemsArray = app.catalog.items;


//Create Card elements
const createComponent = element => {
  // Root Element
  const mainComponent = document.createElement('div');
  mainComponent.className = 'card border-dark mb-3';
  mainComponent.setAttribute('data-item-id', element.itemId);
  // Card Header
  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header card text-white bg-success mb-3';
  cardHeader.textContent = "Featured Item #" + element.itemId;
  mainComponent.appendChild(cardHeader);
  // Card IMG
  const imgComponent = document.createElement('img');
  imgComponent.className = 'card-img-top';
  imgComponent.setAttribute('src', element.imageUrl);
  mainComponent.appendChild(imgComponent);
  //Card Body
  const bodyComponent = document.createElement('div');
  bodyComponent.className = 'card-body';
  mainComponent.appendChild(bodyComponent);
  // UL element
  const ulComponent = document.createElement('ul');
  ulComponent.classList = 'list-group list-group-flush w-100 align-items-stretch align-self-center';
  const liBrand = document.createElement('li');
  liBrand.textContent = element.brand;
  const liName = document.createElement('li');
  liName.textContent = element.name;
  const liPrice = document.createElement('li');
  liPrice.textContent = '$' + element.price;
  liPrice.setAttribute('style', 'font-weight:700');

  liBrand.classList = 'list-group-item text-center d-inline-block';
  liName.classList = 'list-group-item text-center d-inline-block';
  liPrice.classList = 'list-group-item text-center d-inline-block';

  ulComponent.appendChild(liBrand);
  ulComponent.appendChild(liName);
  ulComponent.appendChild(liPrice);
  bodyComponent.appendChild(ulComponent);

  return mainComponent
}

//put cardElements in BootStrap Container
const createBulk = array => {
  const mainContainer = document.createElement('div');
  mainContainer.className = 'container';

  const row = document.createElement('div');
  row.className = 'row justify-content-center';
  mainContainer.appendChild(row);

  array.forEach((element) => {
    const col = document.createElement('div');
    col.className = 'col-sm-4 py-2 d-flex align-items-stretch';
    col.appendChild(createComponent(element));
    row.appendChild(col);
  })
  return mainContainer;
}

//create showpage Element
const getCatalogItem = element => {
  const mainComponent = document.createElement('div')
  mainComponent.className = "container"

  const imgComponent = document.createElement('img');
  imgComponent.setAttribute('src', element.imageUrl);
  imgComponent.className = 'center-block'
  mainComponent.appendChild(imgComponent);

  const ulComponent = document.createElement('ul');
  ulComponent.classList = 'list-group list-group-flush w-100 align-items-stretch align-self-center';
  const liBrand = document.createElement('li');
  liBrand.textContent = element.brand;
  const liName = document.createElement('li');
  liName.textContent = element.name;
  const liPrice = document.createElement('li');
  liPrice.textContent = '$' + element.price;
  liPrice.setAttribute('style', 'font-weight:700');
  const liDescription = document.createElement('li')
  liDescription.textContent = element.description;
  const liDetails = document.createElement('li')
  liDetails.textContent = element.details
  const liOrigin = document.createElement('li')
  liOrigin.textContent = element.origin;

  liBrand.classList = 'list-group-item text-center d-inline-block';
  liName.classList = 'list-group-item text-center d-inline-block';
  liPrice.classList = 'list-group-item text-center d-inline-block';
  liDescription.classList = 'list-group-item text-center d-inline-block';
  liDetails.classList = 'list-group-item text-center d-inline-block';
  liOrigin.classList = 'list-group-item text-center d-inline-block';

  ulComponent.appendChild(liBrand);
  ulComponent.appendChild(liName);
  ulComponent.appendChild(liPrice);
  ulComponent.appendChild(liDescription);
  ulComponent.appendChild(liDetails);
  ulComponent.appendChild(liOrigin);

  mainComponent.appendChild(ulComponent);

  return mainComponent
}

//function to return object matching itemId
const getObject = (itemId, itemArray) => {
  return itemArray.filter((elem, index, array) => {
    return itemId === elem.itemId
  })
}

//render to page
const renderAll = (array) => {
  document.body.appendChild(createBulk(array));
}

renderAll(itemsArray);


const $container = document.querySelector('.container')
$container.addEventListener('click', (e) => {

})








// window.addEventListener('keydown', (e) => {
//   let target = appState.characters[appState.currentIndex].char
//   let stateCharacters = appState.characters;
//   if (e.key === target) {
//     appState.currentIndex++
//   }
//   if (e.key !== target) {
//     stateCharacters[appState.currentIndex].failures++
//   }
//   if (stateCharacters[appState.currentIndex] === undefined) {
//     gameOver(appState)
//     clearInterval(interval)
//     seconds = 30;
//   }
//   clearSpans();
//   renderAll(stateCharacters);
// })
//


// console.log(e.target.closest('[data-item-id]'));



// $startButton.addEventListener('click', (e) => {
//   if (buttonState.counter === 0) {
//     buttonState.counter++
//       numbers = 30;
//     clearInterval(interval);
//     createTimer();
//     startTimer();
//     renderAll(appState.characters)
//   }
//   if (buttonState.counter === 1 && appState.currentIndex === appState.characters.length) {
//     appState.currentIndex = 0;
//     numbers = 30;
//     clearInterval(interval)
//     clearSpans();
//     clearGameOver();
//     startTimer();
//     renderAll(appState.characters)
//   }
// })
