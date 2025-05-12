document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('button[type="submit"]');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbypFTqfzsdGjDyyDJw0UnlfgCcqnBJNTZQgGi2IFmjoUIiUoWtem3tQW7bl1R1xzJnw3Q/exec';
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        submitButton.disabled = true; // Disable the button while submitting
        
        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            // Show confirmation message
            alert("Response has been recorded.");
            form.reset(); // Reset the form after successful submission
            submitButton.disabled = false; // Re-enable the submit button
        })
        .catch(error => {
            // Show error message
            alert("There was an error with the submission. Please try again.");
            console.error("Error:", error);
            submitButton.disabled = false; // Re-enable the submit button if there's an error
        });
    });
});
