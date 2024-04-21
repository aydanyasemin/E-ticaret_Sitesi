import headerFunc from "./header.js";
// çağırmayı header.js de yaptık burada import ettik
import productFunc from "./product.js";

//! localstorage set-ıtem
//* localStorage.setItem("fullName",JSON.stringify("Aydan Uludoğan"));
// key ("value")
// fullName "Aydan Uludoğan"

//* const fruits =["kivi","erik","kayisi"]
// localStorage.setItem("meyveler",JSON.stringify(fruits));
//      key             value 
//   meyveler       ["kivi","erik","kayisi"]

// veritabanı olayını yapmadıysak ön yüzde yapabileceğimiz budur

//! localstorage get-ıtem

//* console.log(JSON.parse(localStorage.getItem("fullName")));
// Aydan Uludoğan

//* const getData=JSON.parse(localStorage.getItem("fullName"));
// console.log(getData);
// Aydan Uludoğan

//! add product ot loclastorage

async function getData() {
    const photos = await fetch("../js/data.json");
    const data = await photos.json();

    data ? localStorage.setItem("products", JSON.stringify(data)) : [];
    // eğer içeri dolu ise (veri var ise) at yoksa boş bir array at []
}

getData();

const products = localStorage.getItem("products");
console.log(JSON.parse(products));

//   import {header} from "./header.js";
//   header()