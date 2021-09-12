const baseUrl = "https://carolinedanielrud.one/wp-json/wp/v2/posts?_embed";
const extraUrl = "https://carolinedanielrud.one/wp-json/wp/v2/posts?_embed&per_page=100";
const blogList = document.querySelector(".blogList");


async function getPosts(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts);


        blogList.innerHTML = " ";

        posts.forEach(function (post) {
            blogList.innerHTML += `
             <a href="blog.html?id=${post.id}" class="postItem">
                <div class="postImage">
                        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" class="featuredMedia" alt=""/>
                </div>
                <div class="postTitle">
                        <h2>${post.title.rendered}</h2>
                </div>
            </a>
            `
            console.log(post.id);
        });


    }
    catch (error) {
        blogList.innerHTML = `
            <div class="error">
                <p>Something went wrong, please try agian later</p>
            </div>
        `;
    }

}

getPosts(extraUrl);

