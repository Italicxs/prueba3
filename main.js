const DarkMode = () => {
    console.log("alo");
    let element = document.body;
    element.classList.toggle("dark");
} 
const body = document.querySelector('body'),
          sidebar = body.querySelector('nav'),
          toggle = body.querySelector(".toggle");
    
    
    toggle.addEventListener("click" , () =>{
        sidebar.classList.toggle("close");
    })
    
    searchBtn.addEventListener("click" , () =>{
        sidebar.classList.remove("close");
    });


 
