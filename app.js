document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((i) => i.classList.remove("active"));

      this.classList.add("active");

      const tab = this.getAttribute("data-tab");
      showTab(tab);
    });
  });

  function showTab(tabName) {
    console.log(`Showing tab: ${tabName}`);
  }
});
