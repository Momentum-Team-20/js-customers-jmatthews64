//Selecting the frame the customer thumbs will be created in.
const customerContainer = document.querySelector("#mainFrame");

function buildCustomer (customerArray){
    for (let customer of customerArray) {
        //Create a div container for each customer
        let box = document.createElement('div');
        //add class to the box
        box.classList.add("customerThumb");
        
        //Create a photo box
        customerContainer.appendChild(box);
        console.log(box);
        let photo = document.createElement('img');
        photo.src = customer.picture.thumbnail;
        photo.alt = "customer thumbnail img";
        box.appendChild(photo);
        
        //Create Customer Name in box
        let custName = document.createElement('h2');
        custName.classList.add("name");
        custName.innerText = (customer.name.first + " " 
        + customer.name.last);
        box.appendChild(custName);
        
        //Add customer email with a class
        let custEmail = document.createElement("div");
        custEmail.classList.add("email");
        custEmail.innerText = customer.email;
        box.appendChild(custEmail);

        //Add Customer address to box
        let custAddress1 = document.createElement('div');
        custAddress1.classList.add("address")
        custAddress1.innerText = (customer.location.street.number 
        + " " + customer.location.street.name);
        box.appendChild(custAddress1);
        let custAddress2 = document.createElement("div");
        custAddress2.classList.add("address");
        custAddress2.innerText = (`${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`);
        box.appendChild(custAddress2);

    }
}

buildCustomer(customers);
