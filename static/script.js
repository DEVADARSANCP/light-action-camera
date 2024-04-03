document.getElementById('runCodeBtn').addEventListener('click', function() {
    
    fetch('/process', {
        method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
        let output = '';
        for (const emotion in data) {
            output += `${emotion}: ${data[emotion]}%<br>`;
        }
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error('Error:', error));
});