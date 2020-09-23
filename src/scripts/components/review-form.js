class reviewForm extends HTMLElement {
  connectedCallback() {
    const container = document.createElement('div');
    container.classList.add('form-container');

    const heading = document.createElement('h2');
    heading.textContent = 'Write a review for this place';
    container.appendChild(heading);

    const form = document.createElement('form');
    form.classList.add('review-form');

    form.innerHTML = `
      <label for="name">Name</label>
      <input type="text" id="name" name="name" />
      <label for="review">Write your review</label>
      <textarea name="review" id="review" rows="4" cols="40" placeholder="Write your review..." />
    `;

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Post Review';

    form.appendChild(submitButton);

    container.appendChild(form);

    this.appendChild(container);
  }
}

customElements.define('review-form', reviewForm);
