const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const btnBody = document.getElementById('body');
function toggleBody() {
  const nav = document.getElementById('nav');
  nav.classList.remove('active');
  const active = nav.classList.contains('active');
}
btnBody.addEventListener('click', toggleBody);

const inputs = document.getElementsByClassName("input-form");
for(const input of inputs) {
    input.addEventListener("blur", function(){
        if(input.value.trim() != ""){
            input.classList.add("has-val");
        } else {
            input.classList.remove("has-val");
        }
    });
}
