// Get the button that opens the modal
     var modal = document.getElementsByClassName('modal-container');
     var myOver = document.getElementsByClassName('over');
     var myClose = document.getElementsByClassName('close');
     

// Function to open the modal

for(var i = 0; i<myOver.length; i++){
        myOver[i].addEventListener('click', function(e){
          document.getElementById(e.target.id + "-modal").style.display = 'block';
        });
     }

// Function to close the modal

for(var i = 0; i < myClose.length; i++){
    myClose[i].addEventListener('click',function(e){
      document.getElementById(e.target.id + "-modal").style.display = 'none';
    });
}



//Click outside of modal to close it

for(var i = 0; i<modal.length; i ++){
    modal[i].addEventListener('click', function(e){
       if(e.target.className == 'modal-container'){
          e.target.style.display = 'none';   
       }
    });
}