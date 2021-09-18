const baseUrl = "https://carolinedanielrud.one/wp-json/wp/v2/posts?_embed";
const extraUrl = "https://carolinedanielrud.one/wp-json/wp/v2/posts?_embed&per_page=100";
const blogList = document.querySelector(".blogList");
const button = document.querySelector(".btn");
let itemsDisplayed = 10;



async function getPosts(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        blogList.innerHTML = " ";

        for (let i = 0; i < itemsDisplayed; i++) {
            blogList.innerHTML += `
                <a href="blog.html?id=${posts[i].id}" class="postItem">
                         <div class="postImage">
                             <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"     class="featuredMedia" alt=""/>
                         </div>
                         <div class="postTitle">
                             <h2>${posts[i].title.rendered}</h2>
                         </div>
                    </a>
            `
        };

        function displayMore(event) {
            for (let i = itemsDisplayed; i < posts.length && (itemsDisplayed + 10); i++) {
                blogList.innerHTML += `
                <a href="blog.html?id=${posts[i].id}" class="postItem">
                         <div class="postImage">
                             <img src="${posts[i]._embedded['wp:featuredmedia']['0'].source_url}"     class="featuredMedia" alt=""/>
                         </div>
                         <div class="postTitle">
                             <h2>${posts[i].title.rendered}</h2>
                         </div>
                    </a>
            `
                if ((itemsDisplayed + 10) > posts.length) {
                    button.style.display = "none";
                }
            };
            itemsDisplayed += 10;

        };
    }
    catch (error) {
        blogList.innerHTML = `
            <div class="error">
                <p>Something went wrong, please try agian later</p>
            </div>
        `
    };




    button.addEventListener("click", displayMore);

};

getPosts(extraUrl);







