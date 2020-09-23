/* eslint-disable no-undef */
const assert = require('assert');

Feature('Restaurants to favorites');

Before((I) => {
  I.amOnPage('/#/favourites');
});

Scenario('Adding restaurant to favourites', async (I) => {
  I.seeElement('.favourites-page');
  I.dontSeeElement('.restaurant-card');

  I.amOnPage('/');

  I.seeElement('.restaurant-card a');
  const firstRestaurant = locate('.restaurant-card .details h3').first();
  const restaurantName = await I.grabTextFrom(firstRestaurant);
  console.log(restaurantName);
  I.click(locate('.restaurant-card a').first());

  I.seeElement('.add-button');
  I.click('.add-button');

  I.amOnPage('/#/favourites');
  I.seeElement('.restaurant-card');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-card .details h3');
  console.log(likedRestaurantName);

  assert.strictEqual(restaurantName, likedRestaurantName);
});

Scenario('Removing restaurant from favourites', async (I) => {
  I.amOnPage('/');

  I.seeElement('.restaurant-card a');
  I.click(locate('.restaurant-card a').first());

  I.seeElement('.add-button');
  I.click('.add-button');

  I.seeElement('.delete-button');
  I.click('.delete-button');

  I.amOnPage('/#/favourites');
  I.dontSeeElement('.restaurant-card');
});
