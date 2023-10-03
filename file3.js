// slider code is taken from swiper demos
let navbar = document.querySelector('.header .navbar');
let menubtn = document.querySelector('#menu-btn');
menubtn.onclick = () => {
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    // autoheight: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 4000, // Time in milliseconds between each slide
        disableOnInteraction: false, // Set to true if you want to stop autoplay on user interaction
    },
});
var swiper = new Swiper(".food-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        700: {
            slidesPerView: 2,

        },
        1000: {
            slidesPerView: 3,

        },
    },
});
let previewContainer = document.querySelector('.food-preview-container');
let previewBox = previewContainer.querySelectorAll('.food-preview');

document.querySelectorAll('.food .slide').forEach(food => {
    food.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = food.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

var orderDetails = [];

// Function to add food item details to the order
function addToOrder(foodName, price) {
    var i = 0;
    var orderItem = {
        S_no: ++i,
        foodName: foodName,
        price: price,
    };
    orderDetails.push(orderItem);

    // Call a function to update the order details in the textarea
    updateOrderDetailsTextarea();
}

// Function to update the order details in the textarea
function updateOrderDetailsTextarea() {
    var orderTextarea = document.getElementById("order-details");
    var orderText = "";

    orderDetails.forEach(function(item) {
        orderText += `${item.foodName} - ${item.price}\n`;
    });

    orderTextarea.value = orderText;
}

// Add event listeners for each "buy now" button
document.getElementById("buy-now-1").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (e.g., page scroll)
    addToOrder("special chowmein", "Rs.80");
});

document.getElementById("buy-now-2").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (e.g., page scroll)
    addToOrder("masala tea", "Rs.20");
});

// close preview
previewContainer.querySelector('#close-preview').onclick = () => {
    previewContainer.style.display = 'none';
    previewBox.forEach(close => {
        close.classList.remove('active');
    });
};
var swiper = new Swiper(".menu-slider", {
    grabCursor: true,
    loop: true,
    autoheight: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
var swiper = new Swiper(".blogs-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoheight: true,

    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000, // Time in milliseconds between each slide
        disableOnInteraction: false, // Set to true if you want to stop autoplay on user interaction
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        700: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        1000: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
    },
});