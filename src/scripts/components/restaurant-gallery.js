import './restaurant-card';

class restaurantGallery extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    const restaurantsContainer = document.createElement('div');
    restaurantsContainer.classList.add('restaurant-gallery');

    const heading = document.createElement('h2');
    heading.textContent = 'Featured Restaurants';
    restaurantsContainer.appendChild(heading);

    this._restaurants.forEach((restaurant) => {
      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;

      restaurantsContainer.appendChild(restaurantCard);
    });

    this.appendChild(restaurantsContainer);
  }
}

customElements.define('restaurant-gallery', restaurantGallery);
