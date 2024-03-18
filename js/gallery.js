// This part waits until the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Here we find all the thumbnail images on the page
    const thumbnails = document.querySelectorAll("#thumbnails img");

    // Now, for each thumbnail, we set up what happens when it's clicked
    thumbnails.forEach(function(thumbnail) {
        // When a thumbnail is clicked, this function will run
        thumbnail.addEventListener("click", function() {
            // Now we're going to find the larger image and its caption on the page
            const largeImage = document.querySelector("figure img");
            const figcaption = document.querySelector("figcaption");
            
            // Next, we update the larger image's source to match the clicked thumbnail's larger version
            // We do this by changing the "-small.jpg" part of the thumbnail's source to "-large.jpg"
            const largeImageSrc = thumbnail.src.replace("-small.jpg", "-large.jpg");
            
            // Then, we get the alternative text of the clicked thumbnail
            const largeImageAlt = thumbnail.alt;

            // After that, we set the source and alternative text of the larger image to match the clicked thumbnail's information
            largeImage.src = largeImageSrc;
            largeImage.alt = largeImageAlt;
            
            // Finally, we update the caption of the larger image to match the alternative text of the clicked thumbnail
            figcaption.textContent = largeImageAlt;
        });
    });
});
