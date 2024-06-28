// let addBtn = document.getElementById("addButton");
// let cart = [];

// addBtn.addEventListener("click", () => {
//   const sizeSelect = document.querySelector("#sizeSelect");
//   const selectedSize = sizeSelect.value;
//   const product = {
//     name: "Nikkie Body met pofmouwen",
//     price: 80,
//     color: "Smoked Blue",
//     size: selectedSize,
//   };
//   cart.push(product);
//   updateCartModal();
// });

// function updateCartModal() {
//   let cartModalBody = document.querySelector("#cartModal");
//   let cartModalOut = "";
//   if (cart.length === 0) {
//     cartModalBody.innerHTML = "<p>Jouw winkelmaand is leeg.</p>";
//   } else {
//     alert("jij hebt een product in jouw winkwlmaandje toegevoegd");

//     cart.forEach((product) => {
//       cartModalOut += `
//            <ul>
//              <li><h3>${product.name}</h3></li>
//              <li><p>Price: ${product.price} €</p></li>
//              <li><p>Color: ${product.color}</p></li>
//              <li><p>Size: ${product.size}</p> </li>
//             </ul>
//       `;
//     });

//     cartModalBody.innerHTML = cartModalOut;
//   }
// }
// //MOET VEDER WERKEN
