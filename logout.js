document.getElementById('homeButton').addEventListener('click', function() {
    // Clear any session data
    localStorage.removeItem('user'); // Adjust according to your storage method
    
    // Redirect to home page
    window.location.href = 'index.html'; // Change to your home page
});
