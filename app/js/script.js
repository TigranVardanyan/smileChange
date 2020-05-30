const checkbox = document.querySelector('.slider');
const input = document.querySelector('input');
const smile_reye = document.querySelector('.smile_reye');
const smile_leye = document.querySelector('.smile_leye');
checkbox.addEventListener('click', ()=> {
  if(input.checked) {
    smile_leye.innerHTML = '<i class="fas fa-chevron-right"></i>';
    smile_reye.innerHTML = '<i class="fas fa-chevron-left"></i>'
  } else {
    smile_leye.innerHTML = '<i class="fas fa-circle"></i>';
    smile_reye.innerHTML = '<i class="fas fa-circle"></i>';;
  }
});