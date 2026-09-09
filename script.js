function searchNews() { const searchInput = document.getElementById("searchInput"); const 
    searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") { alert("Please enter something to search."); return;
    }
    const cards = document.querySelectorAll(".news-card"); let found = false; 
    cards.forEach(function(card) {
        const text = card.innerText.toLowerCase(); if (text.includes(searchTerm)) { 
            card.style.display = "block"; found = true;
        } else {
            card.style.display = "none";
        }
    });
    if (!found) { alert("No matching news found.");
    }
}
function filterNews(category) { const cards = document.querySelectorAll(".news-card"); 
    cards.forEach(function(card) {
        const cardCategory = card.dataset.category; if (cardCategory === category) { 
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function showAllNews() { const cards = document.querySelectorAll(".news-card"); 
    cards.forEach(function(card) {
        card.style.display = "block";
    });
}
