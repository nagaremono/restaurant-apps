class restInfoCard extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('aside-card');

    container.innerHTML = `
      <h2>${this._restaurant.name}</h2>
      <table>
        <tbody>
          <tr>
            <td>City</td>
            <td>${this._restaurant.city}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>${this._restaurant.address}</td></tr>
          <tr>
            <td>Rating</td>
            <td>${this._restaurant.rating}</td>
          </tr>
        </tbody>
      </table>
    `;

    const categoryRow = document.createElement('tr');
    const rowHeading = document.createElement('td');
    rowHeading.textContent = 'Categories';
    categoryRow.appendChild(rowHeading);

    const categoriesTags = document.createElement('td');

    this._restaurant.categories.forEach((category) => {
      categoriesTags.textContent += `${category.name}, `;
    });

    categoryRow.appendChild(categoriesTags);
    container.querySelector('tbody').appendChild(categoryRow);

    this.appendChild(container);
  }
}

customElements.define('rest-info-card', restInfoCard);
