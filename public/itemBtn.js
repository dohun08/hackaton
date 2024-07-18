function handleClick(button) {
    const productId = button.Name;

    fetch('/api/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            productId: productId, 
            quantity: 1 
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Purchase Success:', data);
    })
    .catch((error) => {
        console.error('Purchase Error:', error);
    });
}