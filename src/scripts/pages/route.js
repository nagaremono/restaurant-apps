import main from './main';
import favourites from './favourites';
import detail from './detail';

export default {
  '/': main,
  favourites,
  restaurant: detail,
};
