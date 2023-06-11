(function(document){
    var div = document.getElementById('dropdown-container');
    var icon = document.getElementById('caret-icon');
    var open = false;
    
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fas fa-caret-down fa-2xs';  
      } else{
        icon.className = 'fas fa-caret-down fa-2xs open';
      }
      
      open = !open;
    });
  })(document);