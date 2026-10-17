(function () {
  const items = document.querySelectorAll("[data-tool]");

  function setActive(id) {
    items.forEach(function (el) {
      el.classList.toggle("is-active", Boolean(id) && el.dataset.tool === id);
    });
  }

  items.forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      setActive(el.dataset.tool);
    });
    el.addEventListener("mouseleave", function () {
      setActive(null);
    });
    el.addEventListener("focus", function () {
      setActive(el.dataset.tool);
    });
    el.addEventListener("blur", function () {
      setActive(null);
    });
  });
})();
