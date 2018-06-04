const itemsArray = app.catalog.items;

const createComponent = element => {

  const mainComponent = document.createElement('div');
  mainComponent.className = 'card border-dark mb-3';

  const cardHeader = document.createElement('div');
  cardHeader.className = 'card-header card text-white bg-success mb-3';
  cardHeader.textContent = "Featured Item #" + element.itemId;
  mainComponent.appendChild(cardHeader);

  const imgComponent = document.createElement('img');
  imgComponent.className = 'card-img-top';
  imgComponent.setAttribute('src', element.imageUrl);
  mainComponent.appendChild(imgComponent);

  const bodyComponent = document.createElement('div');
  bodyComponent.className = 'card-body';
  mainComponent.appendChild(bodyComponent);

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

const getObject = (itemId, itemArray) => {
  return itemArray.filter((elem, index, array) => {
    return itemId === elem.itemId
  })
}

const renderAll = (array) => {
  document.body.appendChild(createBulk(array));
}

renderAll(itemsArray);
