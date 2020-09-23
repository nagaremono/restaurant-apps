import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/favourites.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import routes from './pages/route';
import urlParser from './helpers/urlParser';
import initiateDrawer from './helpers/initiateDrawer';
import registerSW from './helpers/register-sw';

const app = (() => {
  const menuButton = document.querySelector('#hamburger');
  const menuDrawer = document.querySelector('.drawer');
  const pageBody = document.querySelector('body');

  initiateDrawer(menuButton, menuDrawer, pageBody);

  let currentPage = '/';

  const renderPage = () => {
    currentPage = urlParser.getRequestedUrl();

    const mainContent = document.querySelector('#main-content');
    mainContent.textContent = '';

    const page = routes[currentPage].render();
    mainContent.appendChild(page);
    routes[currentPage].afterRender().then(() => {
      if (routes[currentPage].cleanUp) {
        routes[currentPage].cleanUp();
      }
    });
  };

  return { renderPage };
})();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

registerSW();
