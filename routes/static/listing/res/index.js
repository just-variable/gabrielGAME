// let arrayOfRings = [
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     },
//     {
//         sku: 'ER16526R8Y4JJJ',
//         desc: '14K Yellow Gold Round Bezel Set Diamond Engagement Ring',
//         price: 925,
//         imageUrl: 'https://images.gabrielny.com/assets/Gabriel-14K-Yellow-Gold-Round-Bezel-Set-Diamond-Engagement-Ring~ER16526R8Y4JJJ-1.jpg'
//     }
// ]

let container = document.querySelector(".container");


function newDiv(desc, price, sku, imgURL){
    let div = document.createElement("div");
    div.classList.add("ringDiv");
    div.innerHTML = 
            `<div class="ringDivImg">
                <img src='${imgURL}'>
            </div>
            <div class="ringDivContent">
                <p class="desc">${desc}</p>
                <p class="sku">${sku}</p>
                <p class="price">$${price}</p>
                <p class="retail">Retail</p>
                <div class="ringDivButtons">
                    <div class="buttonDiv"><button class="btn">Matching Brands</button></div>
                    <div class="buttonDiv"><button class="btn">Add to Wholesale Cart</button></div>
                </div>
                <div class="ringDivFooter">
                    <a href="#">Metals</a>
                    <img src="./res/heart.svg" width="15px">
                </div>
            </div>`
    return div;
}

// for (let i=0; i<arrayOfRings.length; i++){
//     document.querySelector("body").append(newDiv(arrayOfRings[i].desc, arrayOfRings[i].price, arrayOfRings[i].sku, arrayOfRings[i].imageUrl))
// }

// fetch(`http://localhost:3000/api/rings/`).then(e=> {return e.json()})
// .then(data=>{
//     console.log(data);
//     data.forEach(e => {
//         document.querySelector("body").append(newDiv(e.desc, e.price, e.sku, e.imageUrl));
//     });
// });

fetch(`http://localhost:3000/api/rings/`).then(e=> {return e.json()})
.then(data=>{
    console.log(data);
    data.forEach(e => {
        document.querySelector("body").append(newDiv(e.desc, e.price, e.sku, e.imageUrl));
    });
});
