let sidenav = document.getElementById("mySidenav");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Ouverture de la nav */
function openNav() {
  sidenav.classList.add("active");
}

/* Fermeture de la nav */
function closeNav() {
  sidenav.classList.remove("active");
}
/*Impression de la page*/
function imprimer_page(){
  window.print();
}
/*Popup RDV*/
function openForm() {
  document.getElementById("myFormRdv").style.display = "block";
  document.getElementById("myFormRdv").style.transition = "all 3s";
}
function closeForm() {
  document.getElementById("myFormRdv").style.display = "none";
}
/*Pop up postulé*/
function openForm1() {
  document.getElementById("myFormRdv1").style.display = "block";
  document.getElementById("myFormRdv1").style.transition = "all 3s";
}
function closeForm1() {
  document.getElementById("myFormRdv1").style.display = "none";
}
/*Gallerie automatique*/
let counter = 1;
setInterval(function() {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 3) {
    counter=1;
  }
},8000);

let counter2 = 1;
setInterval(function() {
  document.getElementById("rdio" + counter2).checked = true;
  counter2++;
  if (counter2 > 4) {
    counter2=1;
  }
},5000);

let counter3 = 1;
setInterval(function() {
  document.getElementById("rdi" + counter3).checked = true;
  counter3++;
  if (counter3 > 3) {
    counter3=1;
  }
}, 8000);

