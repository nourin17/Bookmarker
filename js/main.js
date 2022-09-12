var inputName = document.getElementById("inputName");
var inputURL = document.getElementById("inputURL");
var websitesList;
if (localStorage.getItem('websitesList') != null) {
    websitesList = JSON.parse(localStorage.getItem('websitesList'));
    displayWebsite(websitesList);
}
else {
    websitesList = [];
}
function addWebsite() {
    if(validateURL()==true && validateName()==true){
    var website = {
        name: inputName.value,
        Url: inputURL.value
    }
    websitesList.push(website);
    localStorage.setItem('websitesList', JSON.stringify(websitesList));
    displayWebsite('websitesList');
}
else{
    alert("Invalid input")
}

}
function displayWebsite(list) {
    temp = ``;
    for (var i = 0; i < websitesList.length; i++) {
        temp += `<tr>
        <td>`+ websitesList[i].name + `</td>
        <td><button class="btn btn-primary" onclick="visit(`+ i + `)">Visit</button>
        <button class="btn btn-danger" onclick="deleteWebsite(`+ i + `)">Delete</button></td>
        </tr>`

    }
    document.getElementById("tableBody").innerHTML = temp;
}
function deleteWebsite(i) {
    websitesList.splice(i, 1);
    localStorage.setItem('websitesList', JSON.stringify(websitesList));
    displayWebsite('websitesList');
}
function visit(i) {
    window.location=websitesList[i].Url;
}
function validateURL(){
    var regex=/^(https:\/\/|http:\/\/)?[W|w]{3}\.[a-zA-Z0-9]{2,}\.[A-Za-z]{2,4}\/?$/
    if(regex.test(inputURL.value)==true){
        return true;
    }
    else{
        return false;
    }
}
function validateName(){
    var regex=/^[a-zA-Z0-9]+$/
    if(regex.test(inputName.value)==true){
        return true;
    }
    else{
        return false;
    }
}