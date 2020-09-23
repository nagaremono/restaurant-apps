class addToDb extends HTMLElement {
  static get observedAttributes() {
    return ['restaurant'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const button = this.querySelector('button');
    if (newValue === 'true') {
      button.textContent = 'Favorite +';
    } else if (newValue === 'false') {
      button.textContent = 'Added';
      button.disabled = true;
    }
  }

  connectedCallback() {
    const addButton = document.createElement('button');
    addButton.textContent = 'Added';
    addButton.classList.add('add-button');
    addButton.disabled = true;

    this.appendChild(addButton);
  }
}

customElements.define('add-to-db', addToDb);
