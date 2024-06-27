let outputTops = document.querySelector(".tops-section");
let outTops = "";
let outputDress = document.querySelector(".dresses-section");
let outDress = "";
let outputTshirts = document.querySelector(".t-shirt-section");
let outTshirts = "";
let outputBroeken = document.querySelector(".broek-section");
let outBroeken = "";
let outputBlazers = document.querySelector(".blazers-section");
let outBlazers = "";

fetch("./JSON/tops.json") //Deze regel maakt een HTTP-verzoek om het JSON-bestand pumps.json op te halen dat zich in de map JSON bevindt.
  .then((response) => response.json()) // Dit converteert de JSON-gegevens naar een JavaScript-object. 
  .then((tops) => { //In deze stap wordt de omgezette JSON verwerkt
    for (let top of tops) { //elke item van de array tops is tijdelijk representeerd door variabele top
      if (top.id === 1) {  //dit stuk is gemaakt om op de details te kunnen clicken 
       //voor elke top in de array wordt een HTML-string opgebouwd en toegevoegd aan de outPumps-variabele. Deze HTML-string bevat de structuur voor het weergeven van de pompgegevens.
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
