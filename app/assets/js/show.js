var modal = document.getElementById('cart');

var btn = document.getElementById("addcart");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}