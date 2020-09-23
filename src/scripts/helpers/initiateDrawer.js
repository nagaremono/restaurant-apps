import toggleDrawerIndex from './toggleDrawerIndex';

const initiateDrawer = (button, drawer, body) => {
  button.addEventListener('click', (event) => {
    drawer.classList.toggle('drawer-open');
    event.stopPropagation();
    toggleDrawerIndex();
  });

  body.addEventListener('click', (event) => {
    drawer.classList.remove('drawer-open');
    event.stopPropagation();
  });
};

export default initiateDrawer;
