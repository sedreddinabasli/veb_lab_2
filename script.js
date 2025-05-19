  window.onload = function () {
    var bolmeler = document.getElementsByClassName("bolme");
    
    for (var i = 0; i < bolmeler.length; i++){
        var bolme = bolmeler[i];
        var h2 = bolme.getElementsByTagName("h2")[0];
        var content = bolme.getElementsByClassName("content")[0];
        
        h2.onclick = (function(content) {
            return function () {
                if (content.style.display === "none"){
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            };
        })(content);
        
        
        var addBtn = bolme.querySelector(".addData");
        var input = bolme.querySelector("input");
        
        if (addBtn && input) {
            addBtn.onclick = (function(input, content, sectionType) {
                return function() {
                    if (input.value.trim() !== "") {
                        var newElement;
                        
                        
                        if (sectionType === "PROFILE") {
                            newElement = document.createElement("p");
                            newElement.textContent = input.value;
                            content.insertBefore(newElement, input.previousElementSibling);
                        } 
                        else if (sectionType === "WORK EXPERIENCE") {
                            var lastJobDiv = content.querySelectorAll(".job")[content.querySelectorAll(".job").length - 1];
                            var ul = lastJobDiv.querySelector("ul");
                            
                            newElement = document.createElement("li");
                            newElement.textContent = input.value;
                            ul.appendChild(newElement);
                        }
                        else if (sectionType === "REFERENCE") {
                            newElement = document.createElement("p");
                            newElement.innerHTML = "<strong>New Reference</strong> - " + input.value;
                            content.insertBefore(newElement, input.previousElementSibling);
                        }
                        
                        input.value = "";
                    }
                };
            })(input, content, bolme.querySelector("h2").textContent);
        }
    }
};
  
