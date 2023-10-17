//Selecting the frame the customer thumbs will be created in.
const customerContainer = document.querySelector("#mainFrame");

function buildCustomer (customerArray){
    for (let customer of customerArray) {
        //Create a div container for each customer
        let box = document.createElement('div');
        //add class to the box
        box.classList.add("customerThumb");
        //Create a photo box
        console.log(box);
        let photo = document.createElement('img');
        photo.src = customer.picture.thumbnail;
        photo.alt = "customer thumbnail img";
        box.appendChild(photo);
        console.log(photo);
        //Create Customer Name in box
        let custName = document.createElement('h2');
        custName.innerText = (customer.name.first + " " 
        + customer.name.last);
        box.appendChild(custName);
        console.log(custName);
    }
}

buildCustomer(customers);
