import api from '../data/api';
import urlParser from '../helpers/urlParser';
import CONFIG from '../globals/config';
import '../components/rest-aside-card';
import '../components/rest-main-card';
import '../components/add-to-db';
import '../components/review-form';
import '../components/error-message';
import '../components/loading-message';
import idb from '../data/idb';
import initiateButton from '../helpers/initiateButton';
import page from './page';

const detail = (() => {
  const detailPageContainer = document.createElement('div');
  detailPageContainer.classList.add('detail-page');

  const render = () => {
    detailPageContainer.textContent = '';
    page.renderLoading(detailPageContainer);

    return detailPageContainer;
  };

  const renderButton = async (container, restaurant) => {
    const addToDBButton = document.createElement('add-to-db');
    container.appendChild(addToDBButton);

    const restaurantInDB = await idb.getRestaurant(restaurant.id);

    if (!restaurantInDB) {
      initiateButton.addToDB(addToDBButton, restaurant);
    } else {
      const deleteButton = document.createElement('button');
      initiateButton.deleteFromDB(deleteButton, restaurant.id);
      container.appendChild(deleteButton);
    }
  };

  const afterRender = async () => {
    const restaurantId = urlParser.getRestaurantId();
    const { restaurant } = await api
      .getRestaurantDetail(restaurantId)
      .catch(() => {
        page.removeLoading(detailPageContainer);
        page.renderError(detailPageContainer);
      });

    page.removeLoading(detailPageContainer);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('rest-detail-image');

    imageContainer.innerHTML = `
      <img 
        src="${CONFIG.IMAGE_API_URL}${restaurant.pictureId}" 
        alt="Image of ${restaurant.name} Restaurant" 
      />
    `;
    detailPageContainer.appendChild(imageContainer);

    await renderButton(imageContainer, restaurant);

    const asideCard = document.createElement('rest-info-card');
    asideCard.restaurant = restaurant;
    detailPageContainer.appendChild(asideCard);

    const mainCard = document.createElement('rest-main-card');
    mainCard.restaurant = restaurant;
    detailPageContainer.appendChild(mainCard);

    /*
    const reviewForm = document.createElement('review-form');
    detailPageContainer.appendChild(reviewForm);

    const postReviewButton = reviewForm.querySelector('button');

    initiateButton.postReview(postReviewButton);
    */
  };

  const cleanUp = () => {
    detailPageContainer
      .querySelectorAll('button').forEach((button) => {
        button.addEventListener('click', () => {
          window.location.reload();
        });
      });
  };

  return {
    render, afterRender, renderButton, cleanUp,
  };
})();

export default detail;
