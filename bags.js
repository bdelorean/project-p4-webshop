let outputHandbags = document.querySelector(".handbags-section");
let outHandbags = "";
let outputShoulderbags = document.querySelector(".shoulderbags-section");
let outShoulderbags = "";

fetch("./JSON/handbags.json")
  .then((response) => response.json())
  .then((handbags) => {
    for (let handbag of handbags) {
      outHandbags += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${handbag.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${handbag.brand}</h3>
        <h4>${handbag.product}</h4>
       </div>
       <div >
       <h3>${handbag.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputHandbags.innerHTML = outHandbags;
  });

fetch("./JSON/shoulderbags.json")
  .then((response) => response.json())
  .then((shoulderbags) => {
    for (let shoulderbag of shoulderbags) {
      outShoulderbags += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${shoulderbag.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${shoulderbag.brand}</h3>
        <h4>${shoulderbag.product}</h4>
       </div>
       <div >
       <h3>${shoulderbag.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputShoulderbags.innerHTML = outShoulderbags;
  });
