function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     var list = document.getElementById("client-list");
     var ul = document.createElement('ul');
     list.appendChild(ul);

     var data = JSON.parse(xhttp.responseText);

     for (i in data) {
       var firstNameUL = document.getElementById("firstName");
       var firstNameLI = document.createElement('li');
       firstNameLI.innerHTML = data[i]["firstName"];
       firstNameUL.appendChild(firstNameLI);

       var lastNameUL = document.getElementById("lastName");
       var lastNameLI = document.createElement('li');
       lastNameLI.innerHTML = data[i]["lastName"];
       lastNameUL.appendChild(lastNameLI);

       var emailUL = document.getElementById("email");
       var emailLI = document.createElement("li");
       emailLI.innerHTML = data[i]["email"];
       emailUL.appendChild(emailLI);

       var phoneNumberUL = document.getElementById("phoneNumber");
       var phoneNumberLI = document.createElement('li');
       phoneNumberLI.innerHTML = data[i]["phoneNumber"];
       phoneNumberUL.appendChild(phoneNumberLI);

       var cityUL = document.getElementById("city");
       var cityLI = document.createElement("li");
       cityLI.innerHTML = data[i]["city"];
       cityUL.appendChild(cityLI);

       var stateUL = document.getElementById("state");
       var stateLI = document.createElement("li");
       stateLI.innerHTML = data[i]["state"];
       stateUL.appendChild(stateLI);

       var deleteUL = document.getElementById("delete");
       var deleteLI = document.createElement('li');
       var deleteButton = document.createElement("input");
       deleteButton.type = "checkbox";
       deleteButton.className = "remove-client";
       deleteButton.value = data[i]["_id"];
       deleteButton.addEventListener("click", function() {
         var xhr = new XMLHttpRequest();
         xhr.open('DELETE', '/new-clients/:'+deleteButton.value);
         xhr.send();
       });
       deleteLI.appendChild(deleteButton);
       deleteUL.appendChild(deleteLI);
     }

    }
  };
  xhttp.open("GET", "/new-clients", true);
  xhttp.send();
}

loadDoc();
