
// BiteBox Grill JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("BiteBox Grill website loaded successfully.");


    // =====================================
    // 1. MOBILE NAVIGATION MENU
    // =====================================

    const menuToggle = document.getElementById("menu-toggle");
    const mainNav = document.getElementById("main-nav");

    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", function () {

            // Open or close the navigation menu
            mainNav.classList.toggle("active");

            // Check if the menu is open
            const isOpen = mainNav.classList.contains("active");

            // Update accessibility information
            menuToggle.setAttribute("aria-expanded", isOpen);

        });

    }


    // =====================================
    // 2. PRODUCTS IMAGE LIGHTBOX
    // =====================================

    const galleryImages = document.querySelectorAll(".gallery-image");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightbox-image");

    const lightboxClose = document.getElementById("lightbox-close");


    if (galleryImages.length > 0 && lightbox && lightboxImage && lightboxClose) {

        // Open an enlarged image when clicked
        galleryImages.forEach(function (image) {

            image.addEventListener("click", function () {

                // Display the selected image
                lightboxImage.src = image.src;

                lightboxImage.alt = image.alt;

                // Show the lightbox
                lightbox.classList.add("active");

                lightbox.setAttribute("aria-hidden", "false");

            });

        });


        // Function to close the lightbox
        function closeLightbox() {

            lightbox.classList.remove("active");

            lightbox.setAttribute("aria-hidden", "true");

            lightboxImage.src = "";

        }


        // Close using the X button
        lightboxClose.addEventListener("click", closeLightbox);


        // Close by clicking outside the image
        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                closeLightbox();

            }

        });


        // Close by pressing Escape
        document.addEventListener("keydown", function (event) {

            if (event.key === "Escape") {

                closeLightbox();

            }

        });

    }


    // =====================================
    // 3. ENQUIRY FORM
    // =====================================

    const enquiryForm = document.getElementById("enquiry-form");

    const enquiryResponse = document.getElementById("enquiry-response");


    if (enquiryForm && enquiryResponse) {

        enquiryForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();


            // Get customer information
            const customerName = document.getElementById("name").value.trim();

            const selectedProduct = document.getElementById("product").value;


            // Display confirmation message
            enquiryResponse.textContent =
                "Thank you, " + customerName +
                "! Your enquiry about " + selectedProduct +
                " has been recorded. BiteBox Grill will get back to you.";


            // Clear the form
            enquiryForm.reset();

        });

    }


    // =====================================
    // 4. CONTACT FORM EMAIL
    // =====================================

    const contactForm = document.getElementById("contact-form");

    const contactResponse = document.getElementById("contact-response");


    if (contactForm && contactResponse) {

        contactForm.addEventListener("submit", function (event) {

            // Prevent the page from refreshing
            event.preventDefault();


            // Get customer information
            const customerName = document.getElementById("contact-name").value.trim();

            const customerEmail = document.getElementById("contact-email").value.trim();

            const contactType = document.getElementById("contact-type").value;

            const customerMessage = document.getElementById("contact-message").value.trim();


            // Prepare the email subject
            const subject = encodeURIComponent(
                "BiteBox Grill - " + contactType
            );


            // Prepare the email message
            const body = encodeURIComponent(

                "Name: " + customerName + "\n" +
                "Email: " + customerEmail + "\n" +
                "Contact Type: " + contactType + "\n\n" +
                "Message:\n" + customerMessage

            );


            // Create the email link
            const emailLink =
                "mailto:info@biteboxgrill.co.za" +
                "?subject=" + subject +
                "&body=" + body;


            // Open the visitor's email application
            window.location.href = emailLink;


            // Display confirmation message
            contactResponse.textContent =
                "Your email has been prepared. Please send it using your email application.";

        });

    }


    // =====================================
    // 5. PRODUCT SEARCH
    // =====================================

    const productSearch = document.getElementById("product-search");

    const searchItems = document.querySelectorAll(".search-item");

    const searchResults = document.getElementById("search-results");


    if (productSearch && searchItems.length > 0 && searchResults) {

        // Search when the visitor types
        productSearch.addEventListener("input", function () {

            // Get the search word and convert it to lowercase
            const searchText = productSearch.value.trim().toLowerCase();

            // Count the meals that match
            let matchingMeals = 0;


            // Check every meal
            searchItems.forEach(function (item) {

                // Get the text inside the meal
                const mealInformation = item.textContent.toLowerCase();

                // Check if the meal matches
                const matches = mealInformation.includes(searchText);

                // Show matching meals and hide others
                item.hidden = !matches;

                // Count matching meals
                if (matches) {

                    matchingMeals++;

                }

            });


            // Display the search results
            if (matchingMeals === 0) {

                searchResults.textContent =
                    "No meals found. Please try another search.";

            } else if (searchText === "") {

                searchResults.textContent =
                    "Showing all " + matchingMeals + " meals.";

            } else {

                searchResults.textContent =
                    "Found " + matchingMeals + " matching meal(s).";

            }

        });

    }


});


