/* --------------------
hamburger menu
-------------------- */
const hamburger = document.querySelector('#js-hamburger');
const menuLists = document.querySelectorAll('.glnav__menu.sp li');
const glNav = document.querySelector('#js-glnav');
const isActive = document.querySelector('isActive');
console.log(menuLists);
const displayHamburger = () => {
	hamburger.classList.toggle('isActive');
	glNav.classList.toggle('isActive');
};

// イベント処理
hamburger.addEventListener('click', displayHamburger);
for (const menuList of menuLists) {
	console.log(menuList);
	menuList.addEventListener('click', function () {
		hamburger.classList.remove('isActive');
		glNav.classList.remove('isActive');
	});
}

/* --------------------
smooth scroll
-------------------- */
gsap.utils.toArray('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const targetId = a.getAttribute("href");
    gsap.to(window, {
      duration: 1,
      ease: 'power4.out',
      scrollTo: {
        y: targetId,
        autoKill: false
      }
    });
  });
});

/* --------------------
pagetopの表示＆スクロール設定
-------------------- */
const pageTop = document.querySelector('#js-pagetop');
pageTop.addEventListener('click', e => {
  e.preventDefault();
  gsap.to(window, {
    duration: 1,
    ease: 'power4.out',
    scrollTo: {
      y: 0,
      autoKill: false
    }
  });
});

const showPagetop = () => {
  const height = window.scrollY;
  if (height > 300) {
    pageTop.classList.add('show');
  } else {
    pageTop.classList.remove('show');
  }
};

// イベント処理
window.addEventListener('scroll', showPagetop);
