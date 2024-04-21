function productFunc(){
    const products =JSON.parse(localStorage.getItem("products"));
    let results="";

    products.forEach((item)=>{
        results += ``
        //  ` = backtick !!

        // console.log(item);
        // item.name,price hangisini yazarsak yanına bize onun bilgisini verecek
    });
}

export default productFunc()