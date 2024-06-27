let outputSunglasses = document.querySelector(".sunglass-section")
let outSunglasses = "";
let outputBelts = document.querySelector(".belts-section");
let outBelts = "";
let outputJewelry = document.querySelector(".jewelry-section")
let outJewelry = "";

fetch("./JSON/sunglasses.json")
.then((response) => response.json())
.then((sunglasses) => {
  
  for (let sunglass of sunglasses) {
    outSunglasses += `  
    <div class="mt-5 mx-auto" >
    <div class = "product-img "> 
    <img src = "${sunglass.img}" >
    </div>
      <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
     <div>
     <h3>${sunglass.brand}</h3>
      <h4>${sunglass.product}</h4>
     </div>
     <div >
     <h3>${sunglass.price}</h3>
     <button class="product-btn"> 
     <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
      </button>
     </div>
      </div>
      </a>
      </div>
  
      `;
  }
  outputSunglasses.innerHTML = outSunglasses;
}); 

fetch("./JSON/belts.json")
.then((response) => response.json())
.then((belts) => {
  
  for (let belt of belts) {
    outBelts += `  
    <div class="mt-5 mx-auto" >
    <div class = "product-img "> 
    <img src = "${belt.img}" >
    </div>
      <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
     <div>
     <h3>${belt.brand}</h3>
      <h4>${belt.product}</h4>
     </div>
     <div >
     <h3>${belt.price}</h3>
     <button class="product-btn"> 
     <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
      </button>
     </div>
      </div>
      </a>
      </div>
  
      `;
  }
  outputBelts.innerHTML = outBelts;
}); 

fetch("./JSON/jewelry.json")
.then((response) => response.json())
.then((jewelry) => {
  
  for (let jewel of jewelry) {
    outJewelry += `  
    <div class="mt-5 mx-auto" >
    <div class = "product-img "> 
    <img src = "${jewel.img}" >
    </div>
      <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
     <div>
     <h3>${jewel.brand}</h3>
      <h4>${jewel.product}</h4>
     </div>
     <div >
     <h3>${jewel.price}</h3>
     <button class="product-btn"> 
     <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
      </button>
     </div>
      </div>
      </a>
      </div>
  
      `;
  }
  outputJewelry.innerHTML = outJewelry;
}); 