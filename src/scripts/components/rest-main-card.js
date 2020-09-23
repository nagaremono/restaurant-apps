function createMenuList(menus) {
  const menuList = document.createElement('ul');

  menus.forEach((menu) => {
    const menuItem = document.createElement('li');
    menuItem.textContent = menu.name;
    menuList.appendChild(menuItem);
  });

  return menuList;
}

class restMainCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('rest-main-card');

    container.innerHTML = `
      <article>
        <h2>${this._restaurant.name}</h2>
        <p>${this._restaurant.description.slice(0, 400)}</p>
      </article>
    `;

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menus');

    const menuHeading = document.createElement('h3');
    menuHeading.textContent = 'Menu';
    menuContainer.appendChild(menuHeading);

    const foodContainer = document.createElement('div');
    const drinkContainer = document.createElement('div');

    const foodHeading = document.createElement('h4');
    foodHeading.textContent = 'Food';

    const drinkHeading = document.createElement('h4');
    drinkHeading.textContent = 'Drinks';

    const foods = createMenuList(this._restaurant.menus.foods);
    const drinks = createMenuList(this._restaurant.menus.drinks);

    foodContainer.append(foodHeading, foods);
    drinkContainer.append(drinkHeading, drinks);

    menuContainer.append(foodContainer, drinkContainer);
    container.appendChild(menuContainer);

    const reviewsContainer = document.createElement('div');
    reviewsContainer.classList.add('reviews');

    const reviewHeading = document.createElement('h3');
    reviewHeading.textContent = 'Reviews';
    reviewsContainer.appendChild(reviewHeading);

    this._restaurant.consumerReviews.forEach((review) => {
      const reviewCard = document.createElement('div');
      reviewCard.classList.add('review');

      reviewCard.innerHTML = `
        <h4>${review.name}</h4>
        <span>${review.date}</span>
        <p>${review.review}</p>
      `;

      reviewsContainer.appendChild(reviewCard);
    });

    container.appendChild(reviewsContainer);

    this.appendChild(container);
  }
}

customElements.define('rest-main-card', restMainCard);
