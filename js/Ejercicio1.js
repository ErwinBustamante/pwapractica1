document.addEventListener("DOMContentLoaded", function() {
    // Elementos editables
    const editables = document.querySelectorAll(".editable");
    
    editables.forEach(editable => {
        editable.addEventListener("click", function() {
            this.classList.add("move-up");
            this.setAttribute("contentEditable", "true");
            this.focus();
        });
        
        editable.addEventListener("blur", function() {
            this.classList.remove("move-up");
            this.setAttribute("contentEditable", "false");
        });
    });
});

