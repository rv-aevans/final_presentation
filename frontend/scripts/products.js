(function() {
    console.log(localStorage.searchText)
    if (localStorage.searchText == "Desktop" || localStorage.category == "Desktop") {
        document.querySelector("#product-type").value = "desktops"
    } else if (localStorage.searchText == "Laptop" || localStorage.category == "Laptop") {
        document.querySelector("#product-type").value = "laptops"
    } else if (localStorage.searchText == "Headset" || localStorage.category == "Headset") {
        document.querySelector("#product-type").value = "desktops"
    } else if (localStorage.searchText == "Mouse" || localStorage.category == "Mouse") {
        document.querySelector("#product-type").value = "mice"
    } else {
        document.querySelector("#product-type").value = "all"
    }
})();


const filterCategory = () => {

    // querySelectorAll is going to return this is an array
    var allProds = document.querySelectorAll(".allProducts")

    // When filtering by category, will set default sections to display none
    document.querySelector(".desktops").style.display = "none";
    document.querySelector(".laptops").style.display = "none";
    document.querySelector(".headsets").style.display = "none";
    document.querySelector(".mice").style.display = "none";

    var categorySelect = document.getElementById("product-type").value

    // Displays a single category based on drop-down selection
    if (categorySelect == "desktops") {
        document.querySelector(".desktops").style.display = "inline-block";
    } else if (categorySelect == "laptops") {
        document.querySelector(".laptops").style.display = "inline-block";
    } else if (categorySelect == "headsets") {
        document.querySelector(".headsets").style.display = "inline-block";
    } else if (categorySelect == "mice") {
        document.querySelector(".mice").style.display = "inline-block";
    } else if (categorySelect == "all") {
        for (i = 0; i < allProds.length; i++) {
            allProds[i].style.display = "inline-block";
        }
    }    
}

filterCategory();