const pagination = document.querySelectorAll('.header__content-link'),
      Buy = document.querySelectorAll('.header__content-Buy');

for (let i = 0; i < pagination.length; i++) {
  pagination[i].addEventListener('click', function () {
    removeActive();
    let att = this.getAttribute('data-num');
    this.classList.add('active');
    Buy[+att].classList.add('active');
  });
}

function removeActive() {
  for (let k = 0; k < pagination.length; k++) {
    pagination[k].classList.remove('active');
    Buy[k].classList.remove('active');
  }
}
/* ИЛИ */
// for (let i = 0; i < pagination.length; i++) {
//    pagination[i].addEventListener('click', function () {
//        removeActive()
//        this.classList.add('active');
//        Buy[i].classList.add('active')
//    })
// }
// function removeActive() {
//    pagination.forEach(item => {
//        item.classList.remove('active');
//    })
//    Buy.forEach(item => {
//        item.classList.remove('active')
//    })
// }


const Loc = document.querySelectorAll('.header__contentBuy-Location'),
      descLoc = document.querySelectorAll('.header__contentBuy-locDesc'),
      Icon = document.querySelectorAll('.header__contentLoc-icon');

for (let j = 0; j < Loc.length; j++) {
  Loc[j].addEventListener('click', e => {
    e.preventDefault();

    if (e.target.classList.contains('header__contentBuy-Location')) {
      Icon[j].classList.toggle('active');
      descLoc[j].classList.toggle('active');
    }
  });
}

const greyH = document.querySelectorAll('.main__topHouse-GreyImg'),
      redH = document.querySelectorAll('.main__topHouse-RedImg'),
      parColor = document.querySelectorAll('.main__topHouse-heart');

for (let a = 0; a < parColor.length; a++) {
  parColor[a].addEventListener('click', e => {
    if (e.target.classList.contains('main__topHouse-GreyImg')) {
      greyH[a].classList.add('active');
      redH[a].classList.remove('active');
    } else {
      greyH[a].classList.remove('active');
      redH[a].classList.add('active');
    }
  });
}

const linkI = document.querySelectorAll('.mainBtm__Cen-link'),
      Info = document.querySelectorAll('.mainBtm__Center-Slides');

for (let m = 0; m < linkI.length; m++) {
  linkI[m].addEventListener('click', function () {
    RemAct();
    this.classList.add('active');
    Info[m].classList.add('active');
  });
}

function RemAct() {
  linkI.forEach(item => {
    item.classList.remove('active');
  });
  Info.forEach(item => {
    item.classList.remove('active');
  });
}