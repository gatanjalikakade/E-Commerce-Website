let AllProduct=[];

function fetchData(){
    fetch("https://dummyjson.com/product").then((res)=>{
        return res.json();
    }).then((val)=>{
        // console.log(val.products);
        AllProduct=val.products;
        displayProduct(AllProduct)
        localStorage.setItem("allproduct",JSON.stringify(AllProduct))        
    })
}

function star(rating){
    let fullStar=Math.floor(rating);
    // let emptystar=5-fullStar;
    return "⭐".repeat(fullStar)
}

function displayProduct(product){
    console.log("From displayproduct",product);
    let output ="";
    product.map((v)=>{
        output +=`
        <main>
        <img src="${v.thumbnail}"/>
        <h3>${v.title}</h3>
        <h4>Rating ${star(v.rating)}</h4>
        <div id="price">
        <p><strong style=color:black>Price:</strong> ${(v.price*83).toFixed(0)}</p>
        <button id="view" onclick="viewMore(${v.id})">ViewMore</button> 
        </div>
        </main>
        `
    });

    document.getElementById("containerbox").innerHTML=output;
    
}
fetchData();

document.getElementById("searchproduct").addEventListener("input",function searchterm(e){
    // console.log(e);
    let searchItem =e.target.value.toLowerCase();
    console.log(searchItem);
    let filterdProduct = AllProduct.filter((product)=>{
        return(
            product.title.toLowerCase().includes(searchItem) ||
            product.category.toLowerCase().includes(searchItem)
        )
    });
   displayProduct(filterdProduct) 
});

function viewMore(id){
    console.log(id);
    localStorage.setItem("productId", id)
    window.location.href="../ViewMore/Viewmore.html" 
}



//<p>Price: ${(v.price*83).toFixed(0)}</p>  //!it will convert the $ into imdian rupees & tofixed remove the decimal value 