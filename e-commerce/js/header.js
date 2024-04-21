function sideBarFunc() {
    // ! home sidebar start

    // const btnOpenSidebar = document.querySelector(".header-mobile");
    // header-mobile div kısmını okudu okudu
    // console.log(btnOpenSidebar);

    const btnOpenSidebar = document.querySelector("#btn-menu");
    // btn-menu verdiğimiz id ile arama
    const sidebar = document.querySelector("#sidebar");
    const btnCloseSidebar = document.querySelector("#close-sidebar");
    btnOpenSidebar.addEventListener("click", function () {
        sidebar.style.left = "0";
        //2 console.log(sidebar);
        //1 console.log("tıklandı");
    })
    btnCloseSidebar.addEventListener("click", function () {
        sidebar.style.left = "-100%";
    })
    // 4 burada side bar kapama yaptık

    //1 tıklandığında id verdiğimiz icona tıklandı yazısı çıkıyor (consoleda)
    //2 tıklandığında id verdiğimiz icona sidebar gösteriyor
    //3 tıklandığında sidebar açıldı artık


    //* click outside start 
    document.addEventListener("click", function (event) {
        if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
            sidebar.style.left = "-100%";
        }
    });
    // dışarı kısma basınca sidebar yine kapanıyor

    //* click outside finish

    //! home sidebar finish

}

function searchModalFunc() {
    //! search modal start
    const btnOpenToggle = document.querySelector(".toggle-button");
    // seçtiğimiz için . konuyor
    const btnCloseToggle = document.getElementById("close-search");
    const modalSearch = document.getElementsByClassName("modal-search");
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
    // seçmiyoruz class name istiyoruz o yüzden . yok
    btnOpenToggle.addEventListener("click", function () {
        modalSearch[0].style.visibility = "visible";
        modalSearch[0].style.opacity = "1";
    })

    btnCloseToggle.addEventListener("click", function () {
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
    })

    //* click outside start
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(modalSearchWrapper[0]) && !e.composedPath().includes(btnOpenToggle)) {
            modalSearch[0].style.visibility = "hidden";
            modalSearch[0].style.opacity = "0";
        }
    })
    // e = event

    //* click outside finish

    //! search modal finish
}

function headerFunc(){
    sideBarFunc()
    searchModalFunc()
}

export default headerFunc();