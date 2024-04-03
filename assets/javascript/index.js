const container = document.getElementById("container");
const input = document.getElementById("inputx");

function func() {
    console.log("........")
    fetch(`http://localhost:8080/dados?nome=${input.value}` )
    .then(response => {
        console.log(input.value)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const sec = document.createElement('div')
       
        sec.innerHTML = `<p>Personagem ${data[0].nome}</p>
       `
        container.appendChild(sec)
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
    
}
   

