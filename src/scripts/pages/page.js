import '../components/error-message';
import '../components/loading-message';

export default {
  removeLoading: (container) => {
    const loadingMessage = document.querySelector('loading-message');
    container.removeChild(loadingMessage);
  },
  renderError: (container) => {
    const errorMessage = document.createElement('error-message');
    container.appendChild(errorMessage);
  },
  renderLoading: (container) => {
    const loadingMessage = document.createElement('loading-message');
    container.appendChild(loadingMessage);
  },
};
