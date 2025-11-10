var btn = document.getElementById('search-btn');
btn.onclick = function m() {
    alert("No data found. This website has no backend data.");
}

var contentBorder = document.querySelector('#Main_content');
contentBorder.addEventListener("click", function () {
    alert("This is only frontened website");
})

var gridBorder= document.querySelector('#gridView');
gridBorder.addEventListener("click", function () {
    alert("This is only frontened website");
})     

var accountBtns= document.querySelector('#account_btn');
accountBtns.addEventListener("click", function () {
    alert("You cannot login to this site. This is only a frontened website");
})    

var google= document.querySelector('#google');
google.addEventListener("click", function () {
    alert("can't sign in with google");
})    

var fb= document.querySelector('#fb');
fb.addEventListener("click", function () {
    alert("can't sign in with facebook");
})       