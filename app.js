let outputTops = document.querySelector(".tops-section");
let outTops = "";
let outputDress = document.querySelector(".dresses-section");
let outDress = "";
let outputTshirts = document.querySelector(".t-shirt-section")
let outTshirts = "";
let outputBroeken = document.querySelector(".broek-section")
let outBroeken = "";
let outputBlazers = document.querySelector(".blazers-section")
let outBlazers = "";
let outputPumps = document.querySelector(".pumps-section")
let outPumps = "";
let outputSneakers = document.querySelector(".sneakers-section")
let outSneakers = "";
let outputSandals = document.querySelector(".sandals-section")
let outSandals = "";
let outputSunglasses = document.querySelector(".sunglass-section")
let outSunglasses = "";
let outputBelts = document.querySelector(".belts-section");
let outBelts = "";
let outputJewelry = document.querySelector(".jewelry-section")
let outJewelry = "";
let outputHandbags = document.querySelector(".handbags-section")
let outHandbags = "";
let outputShoulderbags = document.querySelector(".shoulderbags-section")
let outShoulderbags = "";



fetch("./JSON/tops.json")
  .then((response) => response.json())
  .then((tops) => {
    for (let top of tops) {
      if (top.id === 1) {
        outTops += `
      <div class="mt-3 mx-auto" >
      <div class = "product-img "> 
      <a href="detail.html" class="a-detail"><img src = "${top.img}" ></a>
      </div>
      <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${top.brand}</h3>
        <h4>${top.product}</h4>
       </div>
       <div >
       <h3>${top.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
       </div>
        </a>
        </div>
            `;
      } else {
        outTops += `
      <div class="mt-3 mx-auto" >
      <div class = "product-img "> 
      <img src = "${top.img}" >
      </div>
      <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${top.brand}</h3>
        <h4>${top.product}</h4>
       </div>
       <div >
       <h3>${top.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
      }
    }
    outputTops.innerHTML = outTops;
  });

  fetch("./JSON/dresses.json")
  .then((response) => response.json())
  .then((dresses) => {
    
    for (let dress of dresses) {
      outDress += `
      <div class="mt-3 mx-auto" >
      <div class = "product-img "> 
      <img src = "${dress.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${dress.brand}</h3>
        <h4>${dress.product}</h4>
       </div>
       <div >
       <h3>${dress.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputDress.innerHTML = outDress;
  }); 

  fetch("./JSON/tshirts.json")
  .then((response) => response.json())
  .then((tshirts) => {
    
    for (let tshirt of tshirts) {
      outTshirts += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${tshirt.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${tshirt.brand}</h3>
        <h4>${tshirt.product}</h4>
       </div>
       <div >
       <h3>${tshirt.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputTshirts.innerHTML = outTshirts;
  }); 

  fetch("./JSON/broeken.json")
  .then((response) => response.json())
  .then((broeken) => {
    
    for (let broek of broeken) {
      outBroeken += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${broek.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${broek.brand}</h3>
        <h4>${broek.product}</h4>
       </div>
       <div >
       <h3>${broek.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputBroeken.innerHTML = outBroeken;
  }); 

  fetch("./JSON/blazers.json")
  .then((response) => response.json())
  .then((blazers) => {
    
    for (let blazer of blazers) {
      outBlazers += `  
      <div class="mt-5 mx-auto" >
      <div class = "product-img "> 
      <img src = "${blazer.img}" >
      </div>
        <div class = "product-info d-flex flex-row justify-content-between mt-3 ">
       <div>
       <h3>${blazer.brand}</h3>
        <h4>${blazer.product}</h4>
       </div>
       <div >
       <h3>${blazer.price}</h3>
       <button class="product-btn"> 
       <img src= "./homePaginaFoto's/Favorite-perProduct.png" >
        </button>
       </div>
        </div>
        </a>
        </div>
    
        `;
    }
    outputBlazers.innerHTML = outBlazers;
  }); 
 
 
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