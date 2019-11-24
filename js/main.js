// Sticky menu background
window.addEventListener("scroll", function() {
  if (window.scrollY > 150) {
    document.querySelector("#nav-bar").style.opacity = 0.9;
  } else {
    this.document.querySelector("#nav-bar").style.opacity = 1;
  }
});

// smooth scrolling
$("#nav-bar a, .btn").on("click", function(e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
