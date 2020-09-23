import idb from '../data/idb';
import urlParser from './urlParser';
import api from '../data/api';

export default {
  addToDB: (button, restaurant) => {
    button.setAttribute('restaurant', 'true');
    // eslint-disable-next-line no-param-reassign
    button.querySelector('button').disabled = false;
    button.addEventListener('click', async () => {
      if (!restaurant.id) return;
      await idb.putRestaurant(restaurant);
      button.setAttribute('restaurant', 'false');
    });
  },
  postReview: (button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const form = document.querySelector('.review-form');

      const formData = {
        id: urlParser.getRestaurantId(),
        name: form.elements.name.value,
        review: form.elements.review.value,
      };

      api.postReview(formData);
    });
  },
  deleteFromDB: (button, restaurantId) => {
    button.classList.add('delete-button');
    // eslint-disable-next-line no-param-reassign
    button.textContent = 'X Delete';
    button.addEventListener('click', async () => {
      await idb.deleteRestaurant(restaurantId);
    });
  },
};
