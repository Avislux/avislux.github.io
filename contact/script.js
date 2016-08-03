/**
 * Created by Jonathan on 8/3/2016.
 */
document.getElementbyId("showbutton").onclick = function() {showEmail()};
function showEmail(){
    document.getElementById("email").innerHTML = "This is my throwaway Email <img src='email.png'/>";
}