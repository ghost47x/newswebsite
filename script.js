const apiKey = "6030a01e5bec48b4b0a62a7c1d2b56a5";

// Function to fetch news by Category 
function fetchNews(isSearch = false) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    let url = '';
    if (isSearch) {
        const keyword = document.getElementById('searchKeyword').value;
        if (!keyword) {
            alert('Please enter a search keyword');
            return;
        }
        url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;

    }else {
        const category = document.getElementById('category').value;
        url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;
    }
    
    }

    }
}