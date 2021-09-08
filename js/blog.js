const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "http://carolinedanielrud.one/wp-json/wp/v2/posts";
const blogPost = document.querySelector(".blogPost");

console.log(id);

async function getPost() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts);

        posts.forEach(function (post) {
            if (post.id != id) {

            }
            else {

                blogPost.innerHTML = `
                        <h1>${post.title.rendered}</h1>
                        <div class = "gallery">${post.content.rendered}</div>
                        <div class = "text">${post.excerpt.rendered}</div>
                        <div class="modal">
                            <img src="" alt="" class="full-img" />
                            <p class="caption">gaksljklga</p>
                        </div>
                `

                console.log(post.content);


            }
        })



    }
    catch (error) {
        post.innerHTML = `
            <div class="error">
                <p>Something went wrong, please try agian later</p>
            </div>
        `;
    }
}



getPost(url);

