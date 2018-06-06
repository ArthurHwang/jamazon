const itemsArray = app.catalog.items;

const createElement = (tagName, attributes, children) => {
  const element = document.createElement(tagName)
  for (var key in attributes) {
    element.setAttribute(key, attributes[key])
  }
  children.forEach(child => {
    if (child instanceof Node) {
      element.appendChild(child)
    } else {
      element.textContent = child
    }
  })
  return element
}

const createCard = element => {
  return createElement('div', {class: "card border-dark mb-3", 'data-item-id': element.itemId}, [
    createElement('div', {class: "card-header card text-white bg-success mb-3"}, ["Featured Item #" + element.itemId]),
    createElement('img', {class: "card-img-top", src: element.imageUrl}, []),
    createElement('div', {class: "card-body"}, [
      createElement('ul', {class: "list-group list-group-flush w-100 align-items-stretch align-self-center"}, [
        createElement('li', {}, [element.brand]),
        createElement('li', {}, [element.name]),
        createElement('li', {}, ["$" + element.price])
      ])
    ])
  ])
}

const showcaseCards = array => {
  const mainContainer = createElement('div', {class: 'container'}, [])
  const row = createElement('div', {class: 'row justify-content-center'}, [])
  array.forEach((element) => {
    const col = createElement('div', {class: 'col-sm-4 py-2 d-flex align-items-stretch'}, [createCard(element)])
    row.appendChild(col);
  })
  mainContainer.appendChild(row);
  return mainContainer;
}

const showcaseDetails = element => {
  return createElement('div', {class: 'container'}, [
    createElement('img', {class: 'center-block', src: element.imageUrl}, []),
    createElement('ul', {class: 'list-group list-group-flush w-100 align-items-stretch align-self-center'}, [
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, [element.brand]),
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, [element.name]),
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, ["$" + element.price]),
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, [element.description]),
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, [element.details]),
      createElement('li', {class: 'list-group-item text-center d-inline-block'}, [element.origin])
    ]),
    createElement('button', {class: 'cart-button'}, ['Add To Cart']),
  ])
}

const getObject = (itemId, itemArray) => {
  return itemArray.filter((elem, index, array) => {
    return itemId === elem.itemId
  })
}

const addHidden = () => {
  const data = document.querySelectorAll('[data-item-id]')
  data.forEach((element, index, array) => {
    element.style.display = 'none'
  })
}

const removeHidden = () => {
  const data = document.querySelectorAll('[data-item-id]')
  data.forEach((element, index, array) => {
    element.style.display = 'block'
  })
}

const cartCount = (cartItem) => {
  return createElement('div', {class: 'cart-wrapper'}, [
    createElement('div', {class:'cart-item-count'}, [cartItem])
  ])
}

const render = (array) => {
  if (app.view === "catalog") {
    const enclosure = document.getElementById('app')
    const renderCatalog = document.querySelector("[data-view='catalog']")
    const appCart = document.getElementById('app-cart')
    renderCatalog.appendChild(showcaseCards(array))
    enclosure.appendChild(cartCount("items in cart: " + app.cart.items.length))
  }
  if (app.view === "details") {
    const renderDetails = document.querySelector("[data-view='details']")
    const appCart = document.getElementById('app-cart')
    renderDetails.appendChild(showcaseDetails(array))
  }
}

render(itemsArray);

const $container = document.querySelector('.container');
const $catalog = document.querySelector("[data-view='catalog']")
$container.addEventListener('click', (e) => {
  itemsArray.forEach((elem, index) => {
    if (parseInt(e.target.closest('[data-item-id]').getAttribute('data-item-id')) === elem.itemId) {
      app.view = 'details';
      app.details.item = getObject(elem.itemId, itemsArray)
      addHidden()
      render(app.details.item[0])
    }
  })
})

const $details = document.querySelector("[data-view='details']")
$details.addEventListener('click', (e) => {
  if (e.target.className === "cart-button") {
    const number = document.querySelector('.cart-item-count')
    if (app.cart.items === null) {
      app.cart.items = app.details.item
    } else {
      app.cart.items.push(app.details.item)
    }
    number.textContent = "items in cart: " + app.cart.items.length
    }
  if (e.target.getAttribute('data-view') === 'details' || e.target.className === "center-block") {
    app.view = 'catalog'
    removeHidden()
    while ($details.firstChild) {
      $details.removeChild($details.firstChild);
    }
  }
})
