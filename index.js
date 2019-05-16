
// Navigation bar change when max width is reached
function dropdown () {
    const doc = document.getElementById('myTopNav');
    if(doc.className === 'topnav'){
        doc.className += ' responsive';
    } else {
        doc.className = 'topnav';
    } 
}    
