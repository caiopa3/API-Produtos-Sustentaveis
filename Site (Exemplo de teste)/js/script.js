(function($) {

  "use strict";

  var initPreloader = function() {
    $(document).ready(function($) {
    var Body = $('body');
        Body.addClass('preloader-site');
    });
    $(window).load(function() {
        $('.preloader-wrapper').fadeOut();
        $('body').removeClass('preloader-site');
    });
  }

  // init Chocolat light box
	var initChocolat = function() {
		Chocolat(document.querySelectorAll('.image-link'), {
		  imageSize: 'contain',
		  loop: true,
		})
	}

  var initSwiper = function() {

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var category_swiper = new Swiper(".category-carousel", {
      slidesPerView: 6,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".category-carousel-next",
        prevEl: ".category-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });

    var brand_swiper = new Swiper(".brand-carousel", {
      slidesPerView: 4,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".brand-carousel-next",
        prevEl: ".brand-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1500: {
          slidesPerView: 4,
        },
      }
    });

    var products_swiper = new Swiper(".products-carousel", {
      slidesPerView: 5,
      spaceBetween: 30,
      speed: 500,
      navigation: {
        nextEl: ".products-carousel-next",
        prevEl: ".products-carousel-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1500: {
          slidesPerView: 6,
        },
      }
    });
  }

  var initProductQty = function(){

    $('.product-qty').each(function(){

      var $el_product = $(this);
      var quantity = 0;

      $el_product.find('.quantity-right-plus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
      });

      $el_product.find('.quantity-left-minus').click(function(e){
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if(quantity>0){
            $el_product.find('#quantity').val(quantity - 1);
          }
      });

    });

  }

  // init jarallax parallax
  var initJarallax = function() {
    jarallax(document.querySelectorAll(".jarallax"));

    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
      keepImg: true,
    });
  }

  // document ready
  $(document).ready(function() {
    
    initPreloader();
    initSwiper();
    initProductQty();
    initJarallax();
    initChocolat();

  }); // End of a document

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggle-dark-mode");
  const body = document.body;

  button.addEventListener("click", function () {
      body.classList.toggle("dark-mode"); // Alterna a classe no body

      // Salva a escolha do usuário no armazenamento local
      if (body.classList.contains("dark-mode")) {
          localStorage.setItem("darkMode", "enabled");
      } else {
          localStorage.setItem("darkMode", "disabled");
      }
  });

  // Verifica se o usuário já ativou o modo invertido antes
  if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("produtos-container");

  fetch("http://localhost:3000/produtos") // altere para sua URL online, se for o caso
    .then(response => response.json())
    .then(produtos => {
      container.innerHTML = ""; // limpa conteúdo antigo
      produtos.forEach(produto => {
        const col = document.createElement("div");
        col.className = "col";
        col.innerHTML = `
          <div class="product-item">
            <figure>
              <a href="#" title="${produto.nome}">
                <img src="images/default.jpg" class="tab-image" alt="${produto.nome}">
              </a>
            </figure>
            <h3>${produto.nome}</h3>
            <span class="qty">1 Unidade</span>
            <span class="price">R$${produto.preco.toFixed(2)}</span>
            <div class="d-flex align-items-center justify-content-between">
              <div class="input-group product-qty"></div>
            </div>
          </div>
        `;
        container.appendChild(col);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar produtos:", error);
      container.innerHTML = "<p>Erro ao carregar produtos.</p>";
    });
});
