const getPosts = async() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const datos = await response.json();
        const ul = document.querySelector("#post-data");
        ul.innerHTML = '';
        datos.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = `<h5>${element.title}</h5></n><p>${element.body}</p>`;
            ul.appendChild(li);
        });
    } catch (err) {
        console.log(err);
    }
};