var customerName = "bob";
const leastFavoriteCustomer = "Ted";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase(); 
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(name){
    bestCustomer = name;
}

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;
}