opened = false;
window.onload = function() {
   const btn = document.getElementsByTagName('button')[0];
    btn.addEventListener('click', onBtnClick)
}

function onBtnClick(e) {
    this.classList.toggle('opened');
}