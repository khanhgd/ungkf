// shader.js
// Function to handle searching for element information
function searchElementInfo(elementName) {
    // We use Wikipedia as it's the most reliable source for chemical element details
    const searchUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(elementName)}`;
    
    // Automatically open the webpage in a new tab
    window.open(searchUrl, '_blank');
}
