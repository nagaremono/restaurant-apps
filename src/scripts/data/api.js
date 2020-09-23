import CONFIG from '../globals/config';

const api = (() => {
  const getRestaurantsList = async () => {
    const response = await fetch(`${CONFIG.BASE_API_URL}/list`);
    return response.json();
  };

  const getRestaurantDetail = async (restaurantId) => {
    const response = await fetch(`${CONFIG.BASE_API_URL}/detail/${restaurantId}`);

    if (response.status === 200) {
      return response.json();
    }
    throw new Error("Can't retrieve restaurant");
  };

  const postReview = async ({ id, name, review }) => {
    const reviewJson = {
      id,
      name,
      review,
    };

    await fetch(`${CONFIG.REVIEW_API_URL}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(reviewJson),
    });

    return reviewJson;
  };

  return { getRestaurantsList, getRestaurantDetail, postReview };
})();

export default api;
