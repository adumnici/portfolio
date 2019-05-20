
// Navigation bar change when max width is reached
function dropdown () {
    const doc = document.getElementById('myTopNav');
    if(doc.className === 'topnav'){
        doc.className += ' responsive';
    } else {
        doc.className = 'topnav';
    } 
}    

// Go to top

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}