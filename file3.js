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

// let data = 0;
let specialChowmeinQuantity = 0;
// let masalaTeaQuantity = 0;


// Initialize order details
var orderDetails = [];

//printing default value of data that is 0 in h2 tag
document.getElementById("quantity-special-chowmein").innerText = specialChowmeinQuantity;
// document.getElementById("quantity-masala-tea").innerText = masalaTeaQuantity;

// Function to add food item details to the order
function addToOrder(foodName, price, quantity) {
    var orderItem = {
        foodName: foodName,
        price: price,
        quantity: quantity
    };
    orderDetails.push(orderItem);
    updateOrderDetailsTextarea();
}

// Function to update the preview quantity and total
function updatePreviewQuantity(foodName) {
    previewBox.forEach(preview => {
        let target = preview.getAttribute('data-target');
        if (foodName === target) {
            let item = orderDetails.find(item => item.foodName === foodName);
            let quantityElement = preview.querySelector('.quantity-value');
            let totalElement = preview.querySelector('.total');
            quantityElement.textContent = item.quantity;
            totalElement.textContent = `Total: Rs.${item.price * item.quantity}`;
        }
    });
}

// Function to update the order details in the textarea
function updateOrderDetailsTextarea() {
    var orderTextarea = document.getElementById("order-details");
    var orderText = "";
    var totalAmount = 0;

    orderDetails.forEach(function(item) {
        if (item.quantity > 0) {
            var total = item.price * item.quantity;
            orderText += `${item.foodName} - ${item.price} x ${item.quantity} = Rs.${total}\n`;
            totalAmount += total;
        }
    });

    if (totalAmount > 0) {
        orderText += `Total Amount: Rs.${totalAmount}`;
    } else {
        orderText = "No items in the order.";
    }

    orderTextarea.value = orderText;
}

//creation of increment function


// Define the quantity variable for Pakoda
let specialchowmeinQuantity = 0;
let pakodaQuantity = 0;
let masalaQuantity = 0;
let burgarQuantity = 0;
let samosaQuantity = 0;


// Initialize default value of data (0) in the h2 tag for Pakoda
document.getElementById("quantity-special-chowmein").innerText = specialChowmeinQuantity;
document.getElementById("quantity-masala-tea").innerText = masalaQuantity;
document.getElementById("quantity-pakoda").innerText = pakodaQuantity;
document.getElementById("quantity-burgar").innerText = burgarQuantity;
document.getElementById("quantity-samosa").innerText = samosaQuantity;



// Function to increment the quantity 
//special chowmein
function increment1(foodName) {
    if (foodName === 'special-chowmein') {
        specialChowmeinQuantity += 1;
        document.getElementById("quantity-special-chowmein").innerText = specialChowmeinQuantity;
        updatePreviewQuantity("food-1"); // Update the preview quantity
    }
}
// Function to decrement the quantity for Pakoda
function decrement1(foodName) {
    if (foodName === 'special-chowmein' && specialchowmeinQuantity > 0) {
        specialChowmeinQuantity -= 1;
        document.getElementById("quantity-special-chowmein").innerText = specialchowmeinQuantity;
        updatePreviewQuantity("food-1"); // Update the preview quantity
    }
}
//masala-tea
function increment2(foodName) {
    if (foodName === 'masala-tea') {
        masalaQuantity += 1;
        document.getElementById("quantity-masala-tea").innerText = masalaQuantity;
        updatePreviewQuantity("food-2"); // Update the preview quantity
    }
}
// Function to decrement the quantity for Pakoda
function decrement2(foodName) {
    if (foodName === 'masala-tea' && masalaQuantity > 0) {
        masalaQuantity -= 1;
        document.getElementById("quantity-masala-tea").innerText = masalaQuantity;
        updatePreviewQuantity("food-2"); // Update the preview quantity
    }
}

//pakoda
function increment3(foodName) {
    if (foodName === 'pakoda') {
        pakodaQuantity += 1;
        document.getElementById("quantity-pakoda").innerText = pakodaQuantity;
        updatePreviewQuantity("food-3"); // Update the preview quantity
    }
}



// Function to decrement the quantity for Pakoda
function decrement3(foodName) {
    if (foodName === 'pakoda' && pakodaQuantity > 0) {
        pakodaQuantity -= 1;
        document.getElementById("quantity-pakoda").innerText = pakodaQuantity;
        updatePreviewQuantity("food-3"); // Update the preview quantity
    }
}
// burgar
function increment4(foodName) {
    if (foodName === 'burgar') {
        burgarQuantity += 1;
        document.getElementById("quantity-burgar").innerText = burgarQuantity;
        updatePreviewQuantity("food-4"); // Update the preview quantity
    }
}


function decrement4(foodName) {
    if (foodName === 'pakoda' && burgarQuantity > 0) {
        burgarQuantity -= 1;
        document.getElementById("quantity-burgar").innerText = burgarQuantity;
        updatePreviewQuantity("food-4"); // Update the preview quantity

    }
}
// samosa
function increment5(foodName) {
    if (foodName === 'samosa') {
        samosaQuantity += 1;
        document.getElementById("quantity-samosa").innerText = samosaQuantity;
        updatePreviewQuantity("food-5"); // Update the preview quantity
    }
}


function decrement5(foodName) {
    if (foodName === 'samosa' && samosaQuantity > 0) {
        samosaQuantity -= 1;
        document.getElementById("quantity-samosa").innerText = samosaQuantity;
        updatePreviewQuantity("food-5"); // Update the preview quantity
    }
}

// Add event listener for the "buy now" button 
document.getElementById("buy-now-1").addEventListener("click", function(event) {
    alert("Specia-chowmein hasbeen added successfully");

    event.preventDefault();
    addToOrder("Specialchowmein", 80, specialChowmeinQuantity);
});
document.getElementById("buy-now-2").addEventListener("click", function(event) {
    alert("Masala-tea hasbeen added successfully");

    event.preventDefault();
    addToOrder("masala-tea", 20, masalaQuantity);
});
document.getElementById("buy-now-3").addEventListener("click", function(event) {
    alert("pakoda hasbeen added successfully");
    event.preventDefault();
    addToOrder("Pakoda", 40, pakodaQuantity);
});
document.getElementById("buy-now-4").addEventListener("click", function(event) {
    alert("Burger hasbeen added successfully");

    event.preventDefault();
    addToOrder("burgar", 40, burgarQuantity);
});
document.getElementById("buy-now-5").addEventListener("click", function(event) {
    alert("Samosa hasbeen added successfully");

    event.preventDefault();

    addToOrder("samosa 2pcs", 30, samosaQuantity);
});

// Ensure you have the updatePreviewQuantity function and addToOrder function from your existing code.

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