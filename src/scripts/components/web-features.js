class webFeatures extends HTMLElement {
  set features(features) {
    this._features = features;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="web-features">
        <h2>Here you can:</h2>
      </div>
    `;

    this._features.forEach((feature) => {
      const featureCard = document.createElement('div');
      featureCard.classList.add('features-card');
      featureCard.innerHTML += `
        <img
          src="${feature.image}"
          alt="${feature.alt}"
          srcset="${feature.imageSmall} 480w, ${feature.image} 640w"
          sizes="(max-width: 600px) 480px, 640px"
        />
        <div class="feature-detail">
          <h3>
            ${feature.title} <strong>Coming Soon!</strong>
          </h3>
          <p>${feature.description}</p>
        </div>
      `;
      this.querySelector('.web-features').appendChild(featureCard);
    });
  }
}

customElements.define('web-features', webFeatures);
