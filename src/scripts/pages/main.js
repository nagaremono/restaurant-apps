import api from '../data/api';
import siteFeatures from '../globals/features';
import '../components/web-features';
import '../components/restaurant-gallery';
import '../components/loading-message';
import page from './page';

const main = (() => {
  const mainPageContainer = document.createElement('div');
  mainPageContainer.classList.add('main-page');

  const render = () => {
    mainPageContainer.textContent = '';
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.innerHTML = `
      <h1>Welcome to SupperTime</h1>
      <p>
        Looking for a place to eat? Or want to know what other people say
        about a restaurant? This is the place!
      </p>
    `;
    mainPageContainer.appendChild(hero);

    const webFeatures = document.createElement('web-features');
    webFeatures.features = siteFeatures;
    mainPageContainer.appendChild(webFeatures);

    page.renderLoading(mainPageContainer);

    return mainPageContainer;
  };

  const afterRender = async () => {
    const restaurantGallery = document.createElement('restaurant-gallery');
    const { restaurants } = await api
      .getRestaurantsList()
      .catch(() => {
        page.removeLoading(mainPageContainer);
        page.renderError(mainPageContainer);
      });

    page.removeLoading(mainPageContainer);

    restaurantGallery.restaurants = restaurants;
    mainPageContainer.appendChild(restaurantGallery);
  };

  return { render, afterRender };
})();

export default main;
