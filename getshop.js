
let container= document.querySelector(".products")
let r = new XMLHttpRequest();
r.onload = function () {
    if (r.readyState == 4) {
        if (r.status === 200) {
            let response = JSON.parse(r.responseText);
            let products = response.products;
            products.map(function(element){
                container.innerHTML +=`
                    <div class="product-card">
                    <img src=${element.thumbnail}>
                    <h4>${element.title}</h4>
                    <p class="price">price: <span>${element.price}</span>$</p>
                    </div>
                `
            })
        } else {
            console.log("there is some problem...")
        }
    } else {
        console.log("error in request..")
    }
}

r.open("GET", "https://dummyjson.com/products", true);
r.send()

//get by caytegory===============================
function showCategory(url){
    container.innerHTML=''
    r.open("GET",url, true);
    r.send()

}
//categories=========================
let categoriesLink= "https://dummyjson.com/products/categories";
function getCategories(link){
    let categoryRq =new XMLHttpRequest();
    categoryRq.onload = function(){
    if(categoryRq.status==200 && categoryRq.readyState==4){
        let categories = JSON.parse(categoryRq.responseText);
        console.log(categories);
        let categoriesContainer = document.querySelector(".categories")
        categories.map(function(c){
            categoriesContainer.innerHTML+=`
            <span class="category" onclick="showCategory('${c.url}')"> ${c.name} </span>
            `
        }) 
    }
}
categoryRq.open("GET",link,true)
categoryRq.send()
}
getCategories(categoriesLink);


//search===============================
//https://dummyjson.com/products/search?q=phone
function search(word){
    r.open("GET",`https://dummyjson.com/products/search?q=${word}`, true);
    r.send()
}

let searchInput= document.querySelector(".search")
searchInput.addEventListener("keyup",()=>{
    container.innerHTML='';
    search(searchInput.value);

})

