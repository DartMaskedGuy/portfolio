$(document).ready(function(){
    $('.menu-toggler').click(function(){
        $(this).toggleClass("active");
        $(".navbar").toggleClass("active");
    });
});
// Darkmode
const darkBtn = document.getElementById('dark-btn');

darkBtn.onclick = () => {
  darkBtn.classList.toggle('btn-on');
  document.body.classList.toggle('dark-theme');

  // Checking to see whether if it is in the light mode or dark mode
  if(localStorage.getItem('theme') == 'light'){
    localStorage.setItem('theme', 'dark');
  }else {
    localStorage.setItem('theme', 'light');
  }
}

// Local Storage Check
if(localStorage.getItem('theme') == 'light'){
  darkBtn.classList.remove('btn-on');
  document.body.classList.remove('dark-theme');
}else if(localStorage.getItem('theme') == 'dark'){
  darkBtn.classList.add('btn-on');
  document.body.classList.add('dark-theme');
}else{
  localStorage.setItem('theme', 'light');
}