document.addEventListener('DOMContentLoaded', function () {
    updateStatus();
    document.addEventListener('signin', updateStatus, false);
    if(isContact){
        $("#success").hide();
        $("#firstName").on('focus change keydown paste input', function(){
            hendlerFormName();
        });
        document.getElementById('firstName').addEventListener('blur',hendlerFormNameMessage);
    
        $("#lastName").on('focus change keydown paste input', function(){
            hendlerFormSurname();
        });
    
        document.getElementById('lastName').addEventListener('blur',hendlerFormSurnameMessage);
        $("#emaill").on('focus change keydown paste input', function(){
            hendlerFormEmail();
        });
        document.getElementById('emaill').addEventListener('blur',hendlerFormEmailMessage);
        document.getElementById('country').addEventListener('change', handleFormSelect);
        document.querySelectorAll('input[name="rbGender"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', handleRadios);
        });
        document.querySelectorAll('input[name="cbInterest"]').forEach(function(checkbox) {
            checkbox.addEventListener('change', handleChecboxes);
        });
    } 
});

let isContact = href.includes('contact.html');


var imePrezimeRegExp = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,29}$/;
var emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let firstNameSuccess=false;
let lastNameSuccess=false;
let emailSuccess=false;
let selectSuccess=false;
let radioSuccess=false;
let cbSuccess=false;

function changeBorderColorById(id, error){
    if(error){
        document.getElementById(id).classList.add('errorBorder');
    } else{
        document.getElementById(id).classList.remove('errorBorder');
    }
}

function displayErrorMessageByIndex(index, hide, tekst){
    document.getElementsByClassName('forma')[0].getElementsByTagName('p')[index].innerHTML = tekst;
    document.getElementsByClassName('forma')[0].getElementsByTagName('p')[index].style.display = hide? 'none':'block';
}

function hendlerFormNameMessage(){
    var hide = true;
    var tekst = '';
    if(firstName.value == ''){
        hide = false;
        tekst = 'First Name is requierd';
    } else if(!imePrezimeRegExp.test(firstName.value)){
        hide = false;
        tekst = 'Must start with capital letter and min 3 characters.';
    } 
    displayErrorMessageByIndex(0,hide,tekst);
}

function hendlerFormName(){
    if(!imePrezimeRegExp.test(firstName.value)){
        firstNameSuccess = false;
        changeBorderColorById('firstName',true);
    } else{
        firstNameSuccess = true;
        changeBorderColorById('firstName',false);
    }
    hendlerFormNameMessage();
}

function hendlerFormSurnameMessage(){
    var hide = true;
    var tekst = '';
    if(lastName.value == ''){
        hide = false;
        tekst = 'Last name is required.';
    } else if(!imePrezimeRegExp.test(lastName.value)){
        hide = false;
        tekst = 'Must start with capital letter and min 3 characters.';
    } 
    displayErrorMessageByIndex(1,hide,tekst);
}

function hendlerFormSurname(){
    if(!imePrezimeRegExp.test(lastName.value)){
        lastNameSuccess = false;
        changeBorderColorById('lastName',true);
    } else{
        lastNameSuccess = true;
        changeBorderColorById('lastName',false);
    }
    hendlerFormSurnameMessage();
}

function hendlerFormEmailMessage(){
    var hide = true;
    var tekst = '';
    if(emaill.value == ''){
        hide = false;
        tekst = 'Email is required.';
    } else if(!emailRegExp.test(emaill.value)){
        hide = false;
        tekst = 'Email not in good format. <b><i>"example@example.com"</i></b>';
    } 
    displayErrorMessageByIndex(2,hide,tekst);
}

function hendlerFormEmail(){
    if(!emailRegExp.test(emaill.value)){
        emailSuccess = false;
        changeBorderColorById('emaill',true);
    } else{
        emailSuccess = true;
        changeBorderColorById('emaill',false);
    }
    hendlerFormEmailMessage();
}

function handleFormSelect(){
    if($("#country").val() == "0"){
        selectSuccess = false;
        displayErrorMessageByIndex(3,false,'Age group is required.');
        changeBorderColorById('country',true);
    } else{
        selectSuccess = true;
        changeBorderColorById('country',false);
        displayErrorMessageByIndex(3,true,'');
    }
}

function handleRadios(){
    let radios = document.querySelectorAll('input[name="rbGender"]:checked');
    if(radios.length > 0){
        radioSuccess = true;
        displayErrorMessageByIndex(4,true,'');
    } else{
        radioSuccess = false;
        displayErrorMessageByIndex(4,false,'Gender is required.');
    }
}

function handleChecboxes(){
    let cbs = document.querySelectorAll('input[name="cbInterest"]:checked');
    if(cbs.length > 0){
        cbSuccess = true;
        displayErrorMessageByIndex(5,true,'');
    } else{
        cbSuccess = false;
        displayErrorMessageByIndex(5,false,'Pick at lease one interest.');
    }
}

const event1 = new Event('signin');

function sumitovanje(){
    if(firstNameSuccess && lastNameSuccess && emailSuccess && selectSuccess && radioSuccess && cbSuccess){
        localStorage.setItem('signedIn', 'true');
        alert(firstName.value);
        localStorage.setItem('firstName', firstName.value);
        localStorage.setItem('lastName', lastName.value);
        localStorage.setItem('email', emaill.value);
        
        document.dispatchEvent(event1);

        $("#success").html(`You have successfully singned up! 
        Thank you ${firstName.value} ${lastName.value}. 
        You will get confirmation mail on ${emaill.value}.
        Welcom to Hexshop.
        `);
        firstNameSuccess = false;
        lastNameSuccess = false;
        emailSuccess = false;
        selectSuccess = false;
        radioSuccess = false;
        cbSuccess = false;
        $("#success").show();
        document.getElementById("forma").reset();
        setTimeout(function(){
            $("#success").html('');
            $("#success").hide();
        },5000);


    } else {
        if(!firstNameSuccess){hendlerFormName()}
        if(!lastNameSuccess){hendlerFormSurname()}
        if(!emailSuccess){hendlerFormEmail()}
        if(!selectSuccess){handleFormSelect()}
        if(!radioSuccess){handleRadios()}
        if(!cbSuccess){handleChecboxes()}
    }
}

// LOCAL STORAGE 


function signOut(){
    localStorage.setItem('signedIn', 'false');
    document.dispatchEvent(event1);
}

function updateStatus() {
    const signedIn = localStorage.getItem('signedIn');

    if (signedIn == 'true') {
        let fullName = localStorage.getItem('firstName') + ' ' + localStorage.getItem('lastName');
        let message = 'Welcome, '+fullName+'! Thank you for being a part of our community. We look forward to continuing this journey together!';
        $("#signInContainer").show();
        $("#signedOut").hide();
        $("#welcomeMessage").html(message);
    } else {
        localStorage.setItem('fistName', '');
        localStorage.setItem('lastName', '');
        localStorage.setItem('email', '');
        $("#signedOut").show();
        $("#signInContainer").hide();
    }
}

// FILTRIRANJE SORTIRANJE
function sortByPrice(){
    let value = $("#price").val();
    console.log(sortProducts);

    if(value == '1'){
        sortProducts.sort(function(a, b) {
            return a.price - b.price;
        });
    } else if(value =='2') {
        sortProducts.sort(function(a, b) {
            return b.price - a.price;
        });
    }
}

function filerByAudience(){
    let value = $("#audience").val();
    if(value != "all"){
        sortProducts = sortProducts.filter(function(item) {
            return item.type === value;
        });
    } else{
        sortProducts = products;
    }
}

function showOnlyFavourites(){
    let checkbox = document.getElementById('favoritesCheckbox');

    if (checkbox.checked) {
        sortProducts = sortProducts.filter(function(item){
            return lajkovaniProizvodi.includes(item.id);
        })
    } 
}

function filterByPriceRange(){
    let value = document.getElementById('priceRange').value;
    sortProducts = sortProducts.filter(function(item){
        return item.price <= value;
    })
}

function applyFilters(){
    sortProducts = products;

    filerByAudience();
    sortByPrice();
    showOnlyFavourites();
    filterByPriceRange();
    ispisProizvodaProducts(sortProducts, true);
}

function resetFilters(){
    sortProducts = products;
    let priceRangeValue = document.getElementById('priceRangeValue');
    priceRangeValue.textContent = '$0 - $' + priceRangeInput.value;

    $("#formaFilter")[0].reset();
    ispisProizvodaProducts(products, true);
}