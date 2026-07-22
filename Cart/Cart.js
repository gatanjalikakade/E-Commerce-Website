document.addEventListener("DOMContentLoaded",()=>{
    displayCart()
})
function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) ||[];
    let cartContent=document.getElementById("cartContent")
    let totalPrice=document.getElementById("totalPrice")
    console.log(cart);

    cartContent.innerHTML="";
    let totalBil=0;

    if(cart.length==0){
        cartContent.innerHTML="<h2>your cart is empty start shopping now</h2>"
    }
    cart.map((product,i)=>{
        totalBil += (product.price)*80;
        let productElement=document.createElement("div");
        productElement.setAttribute("class","product-info");
        productElement.innerHTML=`
        <main>
        <img src="${product.thumbnail}"/>
       <div id="box">
        <h1>${product.title}</h1>
        <p>availabilityStatus: ${product.availabilityStatus}</p>
        <p>category: ${product.category}</p>
        <p>returnPolicy: ${product.returnPolicy}</p>
        <P>shippingInformation: ${product.shippingInformation}</P>
        <p>warrantyInformation: ${product.warrantyInformation}</p>
        <p>stock: ${product.stock}</p>
        <h2>price: ${Math.round(product.price*80)}</h2>
        <button  onclick="RemoveFromCart(${i})">Remove</button>
        <button id="btn">BackToHome</button>
       </div>
      
        </main>
        `

        cartContent.appendChild(productElement)
    });

     document.getElementById("btn").addEventListener("click",()=>{
            window.location.href="../Home/Home.html"
        })

    totalPrice.innerHTML=`<h2 id="bill">TotalBill : ${Math.round(totalBil)}</h2>`
    
}

function RemoveFromCart(index){
let cart =JSON.parse(localStorage.getItem("cart"))||[];
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart))
displayCart();
}