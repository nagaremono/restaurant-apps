export default {
  getRestaurantId: () => {
    const urlAnchor = window.location.hash.slice(1);
    const splittedUrl = urlAnchor.split('/');
    return splittedUrl[splittedUrl.length - 1];
  },
  getRequestedUrl: () => {
    const urlAnchor = window.location.hash.slice(1);
    const splittedUrl = urlAnchor.split('/');
    return splittedUrl[1] || '/';
  },
};
