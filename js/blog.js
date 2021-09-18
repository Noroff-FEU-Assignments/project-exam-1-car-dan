const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://carolinedanielrud.one/wp-json/wp/v2/posts";
const blogPost = document.querySelector(".blogPost");
const modal = document.querySelector(".modal");


async function getPost() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        posts.forEach(function (post) {
            if (post.id != id) {
            } else {
                blogPost.innerHTML = `
                        <h1>${post.title.rendered}</h1>
                        <div class = "gallery">${post.content.rendered}</div>
                        <div class = "text">${post.excerpt.rendered}</div>
                        </div>
                `
            }
        });

        const gallery = document.querySelector(".gallery");


        function handleInteraction(event) {
            event.preventDefault();
            if (event.target.classList.contains("modal")) {
                modal.classList.remove("open");
            } else if (event.target = gallery) {
                modal.classList.add("open");
                modal.innerHTML = `
            <img src="${event.target.src}" alt="" class="full-img" /> `;
            };
        };

        gallery.addEventListener(`click`, handleInteraction);
        modal.addEventListener(`click`, handleInteraction);

    }
    catch (error) {
        blogPost.innerHTML = `
            <div class="error">
                <p>Something went wrong, please try agian later</p>
            </div>
        `;
    }

}




getPost(url);

