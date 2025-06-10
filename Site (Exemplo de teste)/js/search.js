function buscarSugestoes() {
    const query = document.getElementById("search-box").value;

    if (query.length < 2) {
        document.getElementById("suggestions").innerHTML = "";
        filtrarCartoes(); // Filtra os cartões mesmo com menos de 2 caracteres
        return;
    }

    fetch(`https://api.datamuse.com/sug?s=${query}`)
        .then(response => response.json())
        .then(data => {
            const suggestionsBox = document.getElementById("suggestions");
            suggestionsBox.innerHTML = "";

            data.forEach(suggestion => {
                const item = document.createElement("div");
                item.classList.add("suggestion-item");
                item.textContent = suggestion.word;
                item.onclick = () => selecionarSugestao(suggestion.word);
                suggestionsBox.appendChild(item);
            });
        })
        .catch(error => console.error("Erro ao buscar sugestões: ", error));

    filtrarCartoes(); // Chama a filtragem sempre que o usuário digita algo
}

document.getElementById("search-box").addEventListener("input", buscarSugestoes);

document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.getElementById("search-box");
    const productItems = document.querySelectorAll(".product-item");

    searchBox.addEventListener("input", function () {
        const searchText = searchBox.value.toLowerCase().trim();

        productItems.forEach(item => {
            const title = item.querySelector("h3").textContent.toLowerCase();

            if (title.includes(searchText)) {
                item.closest(".col").style.display = "block"; // Mostra o cartão
            } else {
                item.closest(".col").style.display = "none"; // Esconde o cartão
            }
        });
    });
});

