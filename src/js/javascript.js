
// купить

function OpenModal(button, modal) {
 var button1 = document.querySelector(".buy");
 var modal2 = document.querySelector(".ctg-modal");
 var link = modal.querySelector(".check-order");
 var button2 = modal.querySelector(".shopping");

button1.addEventListener('click', function(e){
e.preventDefault();
 console.log(modal2.classList.contains("open"));
modal2.classList.OpenModal("open");

window.addEventListener("keydown", function(e) {
  if(e.keyCode === 27) {
    modal2.classList.remove('open');
  }
});





});
}










// карта
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.9388068, lng: 30.3230066},
    zoom: 16
  });
}
function initMap() {
    var myLatLng = {lat: 59.9388068, lng: 30.3230066};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: myLatLng
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,

    });
  }
// напишите нам

  var button = document.querySelector(".write-us");
  var modal = document.querySelector(".modal");
  var login = modal.querySelector("[name=login]");
  var email = modal.querySelector("[name=email]");
  var letter = modal.querySelector("[name=letter]");
  var form = modal.querySelector('form');
  var submit = modal.querySelector(".submit");
  var error = modal.querySelector('span');
  var storage = localStorage.getItem('login');  

  button.addEventListener("click", function (e) {
 	 e.preventDefault();
 	 console.log(modal.classList.contains("open"));
     modal.classList.toggle("open");
     login.focus();


     if(storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
    });

    window.addEventListener("keydown", function(e) {
    	if(e.keyCode === 27) {
    		modal.classList.remove('open');
    	}
    });

    window.addEventListener("keyup", function(e) {
    	if(e.keyCode === 13) {
    		form.addEventListener("submit", function(e){;
    	});
    	}
    });
    
 	form.addEventListener("submit", function(e) {
    e.preventDefault();

    if(!email.value) {
        error.classList.add("err");
    
    }else {
        localStorage.setItem("Ваш email",email.value);
        form.addEventListener("submit", function(e){;
        });
      
    }
  });





  var pagination = document.querySelector(".pagination");
  pagination.addEventListener("click", function(e) {
  
  var link = e.pagination;
  if (!link.classList.contains('active'))
  link.classList.add('active');
  else
  link.classList.remove('active');
  
  });

  var ul = document.getElementByClassName(".main-menu");
  var link = document.querySelector(".catalog");

  main-menu.addEventListener("click", function(e) {
  var link = e.main-menu;

  link.addEventListener("click", function (e) {
 	 e.preventDefault();
 	 console.log(link.classList.contains("active"));
     link.classList.add("active");


     if (!link.classList.contains('active'))
     link.classList.add('active');
     else
     link.classList.remove('active');
     
       }
     )


    })
    var menuLinkHandler = function(e) {
     var link = e.currentTarget;
     if(!link.classList.contains("active"))
     link.classList.add("active");
     else
     link.classList.remove("active");
    };
    for (var i=0; i<link.length; i++){
      link.addEventListener("click", menuLinkHandler);

    }
