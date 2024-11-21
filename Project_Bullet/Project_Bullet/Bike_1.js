let sections = document.querySelectorAll('represent1');
let navlinks = document.querySelectorAll('AppareltabContainer buttonContainer a ');
window.onclick = () => {
  sections.forEach(sec => {
    let top =window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id= sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('AppareltabContainer buttonContainer a  [href*='+ id +']').classList.add('active');
      }) ;
    };
  });
};