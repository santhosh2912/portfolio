

document.addEventListener('DOMContentLoaded', function() {
    const navList2 = document.getElementById('nav-list2');
    const listButton = document.getElementById('list');
    const cancelButton = document.getElementById('cancel-btn');
    const navLinks = document.querySelectorAll('.nav_link a');
    


    
    listButton.addEventListener('click', function() {
      navList2.style.display = 'block';
      navList2.style ="padding: 10px 0px 10px 0px";
      cancelButton.style.display="block";
    });

    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navList2.style.display = 'none';
          cancelButton.style.display = 'none';
        });
      });

    cancelButton.addEventListener('click', function() {
      navList2.style.display = 'none';
      cancelButton.style.display="none";
    });
  });
 



document.getElementById('contact-info').addEventListener('submit',function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/xpwalvdz",{
        method:'POST',
        body:data,
    }).then(response=> {
        if(response.ok){
            alert('Success');
        } else{
            alert('Error');
        }
    });
    document.getElementById('contact-info').reset();
});

