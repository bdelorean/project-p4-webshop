let outputPumps = document.querySelector(".pumps-section");
let outPumps = "";
let outputSneakers = document.querySelector(".sneakers-section");
let outSneakers = "";
let outputSandals = document.querySelector(".sandals-section");
let outSandals = "";

fetch("./JSON/pumps.json")
  .then((response) => response.json())
  .then((pumps) => {
    for (let pump of pumps) {
      outPumps += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${pump.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${pump.brand}</h3>
        <h4>${pump.product}</h4>
       </div>
       <div >
       <h3>${pump.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputPumps.innerHTML = outPumps;
  });

fetch("./JSON/sneakers.json")
  .then((response) => response.json())
  .then((sneakers) => {
    for (let sneaker of sneakers) {
      outSneakers += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${sneaker.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${sneaker.brand}</h3>
        <h4>${sneaker.product}</h4>
       </div>
       <div >
       <h3>${sneaker.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputSneakers.innerHTML = outSneakers;
  });

fetch("./JSON/sandals.json")
  .then((response) => response.json())
  .then((sandals) => {
    for (let sandal of sandals) {
      outSandals += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${sandal.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${sandal.brand}</h3>
        <h4>${sandal.product}</h4>
       </div>
       <div >
       <h3>${sandal.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputSandals.innerHTML = outSandals;
  });
