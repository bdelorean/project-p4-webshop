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

fetch("./tops.json")
  .then((response) => response.json())
  .then((tops) => {
    for (let top of tops) {
      if (top.id === 1) {
        outTops += `
      <div class="mt-5 mx-auto" >
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
      <div class="mt-5 mx-auto" >
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

  fetch("./dresses.json")
  .then((response) => response.json())
  .then((dresses) => {
    
    for (let dress of dresses) {
      outDress += `
      <div class="mt-5 mx-auto" >
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

  fetch("./tshirts.json")
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