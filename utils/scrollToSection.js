
export function scrollToSection(selector) {
  const section = document.querySelector(selector);
  const headerOffset = document.querySelector('header').offsetHeight;
  const promoOffset = document.querySelector('.promo') ? document.querySelector('.promo').offsetHeight : 0;
  const totalOffset = headerOffset + promoOffset;
  const elementPosition = section.getBoundingClientRect().top;
  const offsetPosition = elementPosition - totalOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}