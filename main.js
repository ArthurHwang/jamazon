const createElement = (tagName, attributes, children) => {
  const element = document.createElement(tagName)
  for (var key in attributes) {
    element.setAttribute(key, attributes[key])
  }
  children.forEach(child => {
    if (child instanceof Node) {
      element.appendChild(child);
    } else {
      element.textContent = child
    }
  })
  return element
}

const createCard = element => {
  return createElement('div', { class: "card mb-3", 'data-item-id': element.itemId }, [
    createElement('div', { class: "card-header card text-white bg-primary mb-3 ion-ios-pricetag-outline" }, ["Featured Item #" + element.itemId]),
    createElement('img', { class: "card-img-top", src: element.imageUrl }, []),
    createElement('div', { class: "card-body" }, [
      createElement('ul', { class: "list-group list-group-flush w-100 align-items-stretch align-self-center" }, [
        createElement('li', {}, [element.brand]),
        createElement('li', {}, [element.name]),
        createElement('li', { class: "ion-social-bitcoin-outline" }, [+element.price])
      ])
    ])
  ])
}

const showcaseCards = array => {
  const mainContainer = createElement('div', { class: 'container' }, [])
  const row = createElement('div', { class: 'row justify-content-center' }, [])
  array.forEach((element) => {
    row.appendChild(createElement('div', { class: 'col-sm-4 py-2 d-flex align-items-stretch' }, [createCard(element)]));
  })
  mainContainer.appendChild(row);
  return mainContainer;
}

const showcaseDetails = element => {
  return createElement('div', { class: 'container' }, [
    createElement('img', { class: 'center-block', src: element.imageUrl }, []),
    createElement('ul', { class: 'list-group list-group-flush w-80 align-items-stretch align-self-center', id: 'details-text-box' }, [
      createElement('li', { class: 'list-group-item text-center d-inline-block' }, [element.brand]),
      createElement('li', { class: 'list-group-item text-center d-inline-block' }, [element.name]),
      createElement('li', { class: 'list-group-item text-center d-inline-block ion-social-bitcoin' }, [element.price]),
      createElement('li', { class: 'list-group-item text-center d-inline-block' }, [element.description]),
      createElement('li', { class: 'list-group-item text-center d-inline-block' }, [element.details]),
      createElement('li', { class: 'list-group-item text-center d-inline-block' }, [element.origin])
    ]),
    createElement('button', { class: 'cart-button' }, ['Add To Cart']),
    createElement('button', { class: 'ion-bag continue-shopping' }, ['Continue Shopping']),
  ])
}

const createCartCard = element => {
  return createElement('div', { class: "card", 'data-item-id': element.itemId }, [
    createElement('img', { class: "card-img-top", src: element.imageUrl }, [""]),
    createElement('div', { class: "card-body" }, [
      createElement('ul', { class: "card-title" }, [element.name]),
      createElement('ul', { class: "card-text" }, [element.brand]),
      createElement('ul', { class: "card-text ion-social-bitcoin-outline" }, [element.price])
    ]),
  ])
}

const getItemTotal = (array) => {
  let counter = 0
  array.forEach(elem => {
    counter += elem.price
  })
  return counter;
}

const showcaseCheckout = array => {
  const checkoutContainer = createElement('div', { class: "container" }, [
    createElement('h1', {}, ["Checkout Page"])
  ])
  const itemTotalCount = createElement('div', { class: 'item-total ion-pound' }, ["Total Items: " + array.length])
  const itemTotalPrice = createElement('div', { class: 'item-total ion-social-bitcoin-outline' }, ["Total: " + getItemTotal(cartArray)])
  const checkoutDetails = createElement('div', { class: "container-form" }, [
    createElement('div', { class: "inline", id: "checkout" }, [
      createElement('form', {}, [
        createElement('div', { class: "form-group" }, [
          createElement('label', { for: "NameOnCard" }, ["Name on Card"]),
          createElement('input', { id: "NameOnCard", class: "form-control", type: "text", maxlength: "255" }, [])
        ]),
        createElement('div', { class: "form-group" }, [
          createElement('label', { for: "CreditCardNumber" }, ["Card number"]),
          createElement('input', { id: "CreditCardNumber", class: "null card-image form-control", type: "text" }, [])
        ]),
        createElement('div', { class: "expiry-date-group form-group" }, [
          createElement('label', { for: "ExpiryDate" }, ["Expiry Date"]),
          createElement('input', { id: "ExpiryDate", class: "form-control", type: "text", placeholder: "MM / YY", maxlength: "7" }, [])
        ]),
        createElement('div', { class: "security-code-group form-group" }, [
          createElement('label', { for: "SecurityCode" }, ["Security Code"]),
          createElement('div', { class: "input-container" }, [
            createElement('input', { id: "SecurityCode", class: "form-control", type: "text" }, [])
          ])
        ]),
        createElement('div', { class: "zip-code-group form-group" }, [
          createElement('label', { for: "ZIPcode" }, ["ZIP/Postal Code"]),
          createElement('div', { class: "input-container" }, [
            createElement('input', { id: "ZIP", class: "form-control", type: "text", maxlength: "10" }, [])
          ])
        ]),
        createElement('button', { id: "PayButton", class: "btn btn-block btn-success submit-button", type: "submit" }, [
          createElement('span', { class: "submit-button-lock" }, []),
          createElement('span', { class: "align-middle" }, ["Pay $" + getItemTotal(cartArray)])
        ])
      ])
    ]),
  ])
  array.forEach((element) => {
    checkoutContainer.appendChild(createElement('div', { class: 'showcase-checkout' }, [
      createElement('h2', { class: "checkout-item" }, [element.brand + " " + element.name + ":  $" + element.price])
    ]))
  })
  checkoutContainer.appendChild(itemTotalCount)
  checkoutContainer.appendChild(itemTotalPrice)
  checkoutContainer.appendChild(checkoutDetails)
  return checkoutContainer
}

const showcaseCart = array => {
  const cartContainer = createElement('div', { class: 'container' }, [
    createElement('h1', { class: "cart-title ion-ios-cart" }, ["Your Cart Items"]),
    createElement('div', { class: 'item-total ion-pound' }, ["Total Items: " + cartArray.length]),
    createElement('div', { class: 'item-total ion-social-bitcoin-outline' }, ["Sub-Total: " + getItemTotal(cartArray)])
  ])
  array.forEach((element) => {
    cartContainer.appendChild(createElement('div', { class: 'cart-card' }, [createCartCard(element)]))
  })
  cartContainer.appendChild(createElement('button', { class: 'ion-bag continue-shopping-cart' }, ['Continue Shopping']))
  cartContainer.appendChild(createElement('button', { class: "checkout-button ion-checkmark-circled" }, ["Checkout"]))
  return cartContainer;
}

const getObject = (itemId, itemArray) => {
  return itemArray.filter((elem, index, array) => {
    return itemId === elem.itemId
  })
}

const addHidden = () => {
  document.querySelectorAll('[data-item-id]').forEach((element, index, array) => {
    element.style.display = 'none'
  })
}

const removeHidden = () => {
  document.querySelectorAll('[data-item-id]').forEach((element, index, array) => {
    element.style.display = 'block'
  })
}

const cartCount = (cartItem) => {
  return createElement('div', { class: 'cart-wrapper' }, [
    createElement('div', { class: 'cart-item-count ion-ios-cart' }, [cartItem])
  ])
}

const render = (array) => {
  if (app.view === "catalog") {
    document.getElementById('app').appendChild(cartCount("Items in cart: " + app.cart.items.length))
    document.querySelector("[data-view='catalog']").appendChild(showcaseCards(array))
  }
  if (app.view === "details") {
    document.querySelector("[data-view='details']").appendChild(showcaseDetails(array))
  }
  if (app.view === "cart") {
    document.querySelector("[data-view='cart']").appendChild(showcaseCart(array))
  }
  if (app.view === "checkout") {
    document.querySelector("[data-view='checkout']").appendChild(showcaseCheckout(array))
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

const $details = document.querySelector("[data-view='details']");
$details.addEventListener('click', (e) => {
  if (e.target.className === "cart-button") {
    const number = document.querySelector('.cart-item-count')
    if (app.cart.items === null) {
      app.cart.items = app.details.item
    } else {
      app.cart.items.push(app.details.item)
    }
    number.textContent = "Items in cart: " + app.cart.items.length
    cartArray = app.cart.items.reduce((acc, val) => acc.concat(val), [])
  }
  if (e.target.className !== "cart-button") {
    app.view = 'catalog';
    removeHidden()
    while ($details.firstChild) {
      $details.removeChild($details.firstChild);
    }
  }
})

const $cartWrapper = document.querySelector("[data-view='cart']")
$cartWrapper.addEventListener('click', (e) => {
  if (e.target.className !== "checkout-button ion-checkmark-circled") {
    app.view = 'catalog'
    removeHidden()
    while ($details.firstChild) {
      $details.removeChild($details.firstChild);
    }
    while ($cartWrapper.firstChild) {
      $cartWrapper.removeChild($cartWrapper.firstChild)
    }
  }
  if (e.target.className === "checkout-button ion-checkmark-circled") {
    app.view = 'checkout'
    removeHidden()
    while ($details.firstChild) {
      $details.removeChild($details.firstChild);
    }
    while ($cartWrapper.firstChild) {
      $cartWrapper.removeChild($cartWrapper.firstChild)
    }
    addHidden()
    render(cartArray)
  }
})

const $showCart = document.querySelector('[class="cart-item-count ion-ios-cart"]')
$showCart.addEventListener('click', (e) => {
  if (e.target.className === "cart-item-count ion-ios-cart") {
    app.view = 'cart'
    addHidden()
    while ($details.firstChild) {
      $details.removeChild($details.firstChild);
    }
    render(cartArray)
  }
})

const $checkout = document.querySelector("[data-view='checkout']")
$checkout.addEventListener('submit', (e) => {
  e.preventDefault()
  app.view = 'catalog'
  while ($checkout.firstChild) {
    $checkout.removeChild($checkout.firstChild)
  }
  alert("Checkout Completed")
  app.cart.items = []
  $showCart.innerHTML = "Items in cart: " + app.cart.items.length
  removeHidden();
})