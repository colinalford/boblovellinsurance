function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     var list = document.getElementById("clients-container");

     var data = JSON.parse(xhttp.responseText);

     for (i in data) {
       var container = document.createElement("div");
       container.className = "client-bio";
       list.appendChild(container);

       var firstName = document.createElement("div");
       firstName.className = "firstName client-info";
       firstName.innerHTML = data[i]["firstName"];
       container.appendChild(firstName);

       var lastName = document.createElement("div");
       lastName.className = "lastName client-info";
       lastName.innerHTML = data[i]["lastName"];
       container.appendChild(lastName);

       var email = document.createElement("div");
       email.className = "email client-info";
       email.innerHTML = data[i]["email"];
       container.appendChild(email);

       var phoneNumber = document.createElement("div");
       phoneNumber.className = "phoneNumber client-info";
       phoneNumber.innerHTML = data[i]["phoneNumber"];
       container.appendChild(phoneNumber);

       var city = document.createElement("div");
       city.className = "city client-info";
       city.innerHTML = data[i]["city"];
       container.appendChild(city);

       var state = document.createElement("div");
       state.className = "state client-info";
       state.innerHTML = data[i]["state"];
       container.appendChild(state);

       var toDelete = document.createElement("div");
       toDelete.className = "delete client-info";
       var deleteButton = document.createElement("input");
       deleteButton.type = "checkbox";
       deleteButton.className = "remove-client";
       deleteButton.value = data[i]["_id"];
       deleteButton.addEventListener("click", function() {
         var xhr = new XMLHttpRequest();
         xhr.open('DELETE', '/new-clients/:'+deleteButton.value);
         xhr.send();
         this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
       });
       toDelete.appendChild(deleteButton);
       container.appendChild(toDelete);
     }

    }
  };
  xhttp.open("GET", "/new-clients", true);
  xhttp.send();
}

loadDoc();
