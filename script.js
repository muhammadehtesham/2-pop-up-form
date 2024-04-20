
document.getElementsByClassName("pop-up")[0].addEventListener('click', function () {
    var formContainer = document.getElementsByClassName("form-container")[0];
    var btnPopup = document.getElementsByClassName("btn-popup")[0];

    formContainer.classList.toggle("show-form");

    if (formContainer.classList.contains("show-form")) {
        btnPopup.innerText = "Cancel";
    } else {
        btnPopup.innerText = "Open Form";
    }

    // document.querySelector("")
});



var array = [];

document.getElementsByClassName("btn-submit")[0].addEventListener("click", function () {
    // get input value 
    var nameValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var rollNoValue = document.getElementById("roll-num").value;

    // validate 
    if (!nameValue || !emailValue || !rollNoValue) {
        alert("Please fill all");
        return;
    }

    // action 1 
    var action1 = document.createElement("button");
    var editText = document.createTextNode("edit");
    action1.append(editText);

    // action 2 
    var action2 = document.createElement("button");
    var del = document.createTextNode("delete");
    action2.append(del);

    //  style class on button 
    action1.classList.add("edit-button");
    action2.classList.add("delete-button");

    array.push({ nameValue, emailValue, rollNoValue });
    console.log(array);

    var tableBody = document.getElementById("table-body");
    for (let i = 0; i < array.length; i++) {

        var newRow = "<tr><td>" + array[i].nameValue + "</td><td>" + array[i].emailValue + "</td><td>" + array[i].rollNoValue + "</td><td>" + action1.outerHTML + "</td><td>" + action2.outerHTML + "</td></tr>";
    }
    tableBody.innerHTML = newRow + tableBody.innerHTML;



    // document.querySelector(".delete-button").addEventListener('click', function () {
    //     var a = document.getElementsByTagName("tr")[1].remove();
    // });



    //delete  
    document.getElementById("table-body").addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-button')) {
            var row = event.target.parentNode.parentNode;
            row.remove();
        }
    });


    // Edit 
    document.getElementById("table-body").addEventListener('click', function (event) {
       
        if (event.target.classList.contains('edit-button')) {
            var row = event.target.parentNode.parentNode;

       
            var name = row.cells[0].textContent;
            var email = row.cells[1].textContent;
            var rollNo = row.cells[2].textContent;

         
            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("roll-num").value = rollNo;

           
            document.getElementsByClassName("btn-submit")[0].innerText = "Update";

        }
    });

    document.getElementById("reset").reset();
});




