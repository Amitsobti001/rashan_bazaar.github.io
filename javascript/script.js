const searchInput=document.querySelector("#search-input");
searchInput.addEventListener("keydown", function(event){
    if(event.code==="Enter"){
        search();
    }
});
function search(){
    const input =searchInput.value;


    window.location.href ="https://www.google.com/search?q=" + input + "&oq=" + input + "&aqs=chrome.0.69i59j0i271l3.1910j0j7&sourceid=chrome&ie=UTF-8";
}