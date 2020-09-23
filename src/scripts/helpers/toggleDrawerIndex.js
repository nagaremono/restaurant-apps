export default function toggleDrawerIndex() {
  const drawerLinks = document.querySelectorAll('.drawer a');

  drawerLinks.forEach((link) => {
    link.tabIndex = link.tabIndex === '-1' ? '-1' : '0';
  });
}
