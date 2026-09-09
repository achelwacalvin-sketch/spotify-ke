function searchNews() { const searchInput = 
    document.getElementById("searchInput"); const 
    searchTerm = 
    searchInput.value.toLowerCase().trim(); if 
    (searchTerm === "") {
        alert("Please enter something to search."); 
        return;
    }
    if ( searchTerm.includes("rice") || 
        searchTerm.includes("real madrid") || 
        searchTerm.includes("arsenal")
    ) { window.location.href = "article.html";
    } else {
        alert("No matching news found.");
    }
}
function filterNews(category) { const cards = 
    document.querySelectorAll(".news-card"); 
    cards.forEach(function(card) {
        const cardCategory = card.dataset.category; 
        if (cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function showAllNews() { const cards = 
    document.querySelectorAll(".news-card"); 
    cards.forEach(function(card) {
        card.style.display = "block";
    });
}
