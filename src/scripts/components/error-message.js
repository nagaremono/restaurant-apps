class errorMessage extends HTMLElement {
  connectedCallback() {
    const container = document.createElement('div');
    container.classList.add('status', 'error');

    const text = document.createElement('span');
    text.textContent = 'Something went wrong...';

    container.appendChild(text);

    this.appendChild(container);
  }
}

customElements.define('error-message', errorMessage);
