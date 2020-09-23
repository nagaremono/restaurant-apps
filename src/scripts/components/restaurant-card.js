import CONFIG from '../globals/config';

class restaurantCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const {
      name, description, pictureId, city, rating, id,
    } = this._restaurant;

    this.innerHTML = `
      <div class="restaurant-card">
        <img data-src="${CONFIG.IMAGE_API_URL + pictureId}" alt="Photo of ${name} Restaurant" class="lazyload"/>
        <div class="details">
          <h3>${name}</h3>
          <p>${description.substr(0, 300)}</p>
          <div class="city-rating">
            <span>${city}</span>
            <span>Rating: ${rating}</span>
          </div>
        </div>
        <a href="#/restaurant/${id}">Detail >></a>
      </div>
    `;
  }
}

customElements.define('restaurant-card', restaurantCard);
