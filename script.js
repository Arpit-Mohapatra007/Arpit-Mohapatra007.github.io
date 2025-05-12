document.querySelector('#partnerForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        organization: document.querySelector('#organization').value,
        message: document.querySelector('#message').value
    };

    const endpoint = 'https://script.google.com/macros/s/AKfycbwixjQojQ4sSBg93rrz168P3a-6gQx2J_wludF82IjhMuZvSzGMcrp0B12-jxgeeM-CqQ/exec'; // Your Google Apps Script Web App URL

    // Send form data via POST request to Google Apps Script endpoint
    const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const result = await response.json();
    if (result.result === 'success') {
        alert('Thank you! Your message has been saved.');
        document.querySelector('#partnerForm').reset(); // Clear form
    } else {
        alert('Something went wrong. Please try again later.');
    }
});
