document.addEventListener("DOMContentLoaded",()=>{
    let AllProduct=JSON.parse(localStorage.getItem("allproduct"))
    let productId=localStorage.getItem("productId");
    let productDetails=document.getElementById("productDetails")
    console.log(productId);
    console.log(AllProduct);

    if(AllProduct && productId){
        let selectedProduct=AllProduct.find((val)=>{
            return val.id==productId;
        })
        console.log(selectedProduct);
        
        if(selectedProduct){
            productDetails.innerHTML=`
            <div id="more">
            <img src="${selectedProduct.thumbnail}"/>
            <div id="box">
            <h1>${selectedProduct.title}</h1>
            <p>Brand : ${selectedProduct.brand}</p>
            <p>Category : ${selectedProduct.category}</p>
            <p>Description : ${selectedProduct.description}</p>
            <p>Price : ${(selectedProduct.price*83).toFixed(0)}</p>
            <button id="btn">Add to Cart</button>
            <button id="bttn">Back to Home</button>
            </div>
            </div>
            `

            Reviews(selectedProduct);

            document.getElementById("bttn").addEventListener("click",()=>{
            window.location.href="../Home/Home.html"
        })

        document.getElementById("btn").addEventListener("click",()=>{
            AddToCart(selectedProduct)
        })
        }
    
        else{
            productDetails.innerHTML="<p>product Not Available....</p>"
        }
        
    }
    else{
        productDetails.innerHTML="<p>product Not Found....</p>"
    }
    
})

function Reviews(product) {
 
    productDetails.innerHTML += `
        <h1>Customer Reviews</h1>
        <hr>
    `
    product.reviews.map((review) => {
        productDetails.innerHTML += `
            <p id="rating">${"❤️".repeat(review.rating)}${"🖤".repeat(5 - review.rating)}</p>
            <p id="comment">${review.comment}</p>
            <p id="name">By ${review.reviewerName} on ${review.date}</p>
            <hr>
        `;
    });
}

function AddToCart(product){
    // console.log(product);
    let cart=JSON.parse(localStorage.getItem("cart"))||[]
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("product added into cart") 
}

