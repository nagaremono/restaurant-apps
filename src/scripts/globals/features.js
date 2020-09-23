import menu from '../../public/images/features/menu.jpg';
import review from '../../public/images/features/review.jpg';
import reservation from '../../public/images/features/reservation.jpg';
import menuSmall from '../../public/images/features/menu-small.jpg';
import reviewSmall from '../../public/images/features/review-small.jpg';
import reservationSmall from '../../public/images/features/reservation-small.jpg';

export default [
  {
    title: 'Give your own rating',
    description: 'Post your rating to help others',
    image: review,
    imageSmall: reviewSmall,
    alt: 'Image of reviewing products',
  },
  {
    title: "View a restaurant's menu",
    description: 'See what a place offers before going',
    imageSmall: menuSmall,
    image: menu,
    alt: "A restaurant's menu board",
  },
  {
    title: 'Book a table',
    description: 'Make sure you have a seat for your meal',
    imageSmall: reservationSmall,
    image: reservation,
    alt: 'A reserved table',
  },
];
