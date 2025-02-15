document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll("#bucketList li");

    listItems.forEach(item => {
        item.addEventListener("click", function () {
            if (this.classList.contains("completed")) {
                this.classList.remove("completed");
                this.classList.add("pending");
                this.querySelector("i").classList.replace("fa-circle-check", "fa-star");
                this.querySelector("i").style.color = "gray";
            } else {
                this.classList.remove("pending");
                this.classList.add("completed");
                this.querySelector("i").classList.replace("fa-star", "fa-circle-check");
                this.querySelector("i").style.color = "green";
            }
        });
    });
});