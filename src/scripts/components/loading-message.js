class loadingMessage extends HTMLElement {
  connectedCallback() {
    const container = document.createElement('div');
    container.classList.add('status', 'loading');

    const text = document.createElement('span');
    text.textContent = 'Loading...';

    container.appendChild(text);

    this.appendChild(container);
  }
}

customElements.define('loading-message', loadingMessage);
