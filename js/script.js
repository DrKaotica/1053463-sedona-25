var searchOpen = document.querySelector(".open-search-hotel-form-btn");
var searchForm = document.querySelector(".search-hotel-form");

if (searchOpen) {
    if (searchForm) {
        searchForm.classList.add("visible");
    };

    searchOpen.addEventListener("click", function(event) {
        event.preventDefault();
        searchForm.classList.toggle("visible");
        searchForm.classList.toggle("hidden");
    });
};