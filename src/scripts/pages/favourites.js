import idb from '../data/idb';
import '../components/restaurant-card';
import '../components/loading-message';
import initiateButton from '../helpers/initiateButton';

const favourites = (() => {
  const favouritesPageContainer = document.createElement('div');
  favouritesPageContainer.classList.add('favourites-page');

  const render = () => {
    favouritesPageContainer.textContent = '';

    const pageHeading = document.createElement('h2');
    pageHeading.textContent = 'Your Favourite Restaurants';
    favouritesPageContainer.appendChild(pageHeading);

    const loadingMessage = document.createElement('loading-message');
    favouritesPageContainer.appendChild(loadingMessage);

    return favouritesPageContainer;
  };

  const afterRender = async () => {
    const storedRestaurants = await idb.getRestaurants();

    const loadingMessage = document.querySelector('loading-message');
    favouritesPageContainer.removeChild(loadingMessage);

    storedRestaurants.forEach((restaurant) => {
      const favouriteCard = document.createElement('div');
      favouriteCard.classList.add('favourite-card');

      const restaurantCard = document.createElement('restaurant-card');
      restaurantCard.restaurant = restaurant;
      favouriteCard.appendChild(restaurantCard);

      const deleteButton = document.createElement('button');
      initiateButton.deleteFromDB(deleteButton, restaurant.id);

      favouriteCard.appendChild(deleteButton);
      favouritesPageContainer.appendChild(favouriteCard);
    });
  };

  const cleanUp = () => {
    favouritesPageContainer
      .querySelectorAll('.delete-button').forEach((button) => {
        button.addEventListener('click', () => {
          window.location.reload();
        });
      });
  };
  return { render, afterRender, cleanUp };
})();

export default favourites;
