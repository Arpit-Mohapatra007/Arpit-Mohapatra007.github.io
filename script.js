        document.getElementById("partnerForm").addEventListener("submit", function(event) {
            event.preventDefault();  // Prevent form from refreshing the page
          
            // Collect form data
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var organization = document.getElementById("organization").value;
            var message = document.getElementById("message").value;

            // Call Google Apps Script function using fetch
            fetch("https://script.google.com/macros/s/AKfycbwixjQojQ4sSBg93rrz168P3a-6gQx2J_wludF82IjhMuZvSzGMcrp0B12-jxgeeM-CqQ/exec", {
                method: "POST",
                body: new URLSearchParams({
                    "name": name,
                    "email": email,
                    "organization": organization,
                    "message": message
                })
            })
            .then(response => {
                if (response.ok) {
                    alert("Response has been recorded successfully!");
                    // Reset the form after submission
                    document.getElementById("partnerForm").reset();
                } else {
                    alert("There was an error recording your response. Please try again later.");
                }
            })
            .catch(error => {
                alert("There was an error with the submission. Please try again.");
                console.error("Error:", error);
            });
        });
