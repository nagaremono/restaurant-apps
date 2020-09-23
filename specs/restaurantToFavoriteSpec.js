/* eslint-disable no-undef */
import detail from '../src/scripts/pages/detail';
import idb from '../src/scripts/data/idb';

describe('Adding restaurant to favorite', () => {
  it('should display add button when restaurant is not favorited yet', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const mockRestaurant = {
      id: 'nonexistingrestaurant',
    };

    await detail.renderButton(container, mockRestaurant);

    expect(document.querySelector('.add-button')).toBeTruthy();
  });

  it('should disable add button when restaurant is already favorited', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const mockRestaurant = {
      id: 'nonexistingrestaurant',
    };

    await idb.putRestaurant(mockRestaurant);

    await detail.renderButton(container, mockRestaurant);

    expect(document.querySelector('.add-button').disable).toBeFalsy();

    await idb.deleteRestaurant(mockRestaurant.id);
  });

  it('should add the restaurant on button click', async () => {
    document.body.innerHTML = '';
    const container = document.createElement('div');
    document.body.appendChild(container);

    const mockRestaurant = {
      id: 'nonexistingrestaurant',
    };

    await detail.renderButton(container, mockRestaurant);

    document.querySelector('.add-button').click();

    expect(await idb.getRestaurant(mockRestaurant.id)).toEqual(mockRestaurant);

    await idb.deleteRestaurant(mockRestaurant.id);
  });
});

describe('Delete from favorites', () => {
  it('should display delete button when restaurant is already favorited', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const mockRestaurant = {
      id: 'nonexistingrestaurant',
    };

    await idb.putRestaurant(mockRestaurant);

    await detail.renderButton(container, mockRestaurant);

    expect(document.querySelector('.delete-button')).toBeTruthy();

    await idb.deleteRestaurant(mockRestaurant.id);
  });

  it('should delete the restaurant on button click', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const mockRestaurant = {
      id: 'nonexistingrestaurant',
    };

    await idb.putRestaurant(mockRestaurant);

    await detail.renderButton(container, mockRestaurant);

    document.querySelector('.delete-button').dispatchEvent(new Event('click'));

    expect(await idb.getRestaurants()).toEqual([]);

    await idb.deleteRestaurant(mockRestaurant.id);
  });
});
