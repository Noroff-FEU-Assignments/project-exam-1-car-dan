const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const url = "https://carolinedanielrud.one/wp-json/wp/v2/posts";
const blogPost = document.querySelector(".blogPost");
const modal = document.querySelector(".modal");

console.log(id);

async function getPost() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        console.log(posts[8].content);

        posts.forEach(function (post) {
            if (post.id != id) {

            }
            else {

                blogPost.innerHTML = `
                        <h1>${post.title.rendered}</h1>
                        <div class = "gallery">${post.content.rendered}</div>
                        <div class = "text">${post.excerpt.rendered}</div>
                        </div>
                `


            }
        })
        // console.log(post[0].content.rendered);

        function handleInteraction(event) {
            event.preventDefault();
            if (event.target.classList.contains("modal")) {
                modal.classList.remove("open");
            } else if (event.currentTarget.classList.contains("gallery")) {
                console.log(event.currentTarget)
                modal.classList.add("open");
                modal.innerHTML = `
            <img src="${event.target.src}" alt="" class="full-img" />
        `;
            }
        }

        blogPost.addEventListener(`click`, handleInteraction);
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

// const img = document.querySelectorAll(".gallery.wp-block-image");
// console.log(img + "this")


// blogPost.addEventListener(`touchstart`, handleInteraction);

// modal.addEventListener(`touchstart`, handleInteraction);


// window.addEventListener(`click`, handleInteraction);

// window.addEventListener("click", function (event) {
//     if (event.target.classList.contains("modal")) {
//         modal.classList.remove("open");
//     } else {
//         console.log(event.target.src)
//         modal.classList.add("open");
//         modal.innerHTML = `
//             <img src="${event.target.src}" alt="" class="full-img" />
//         `;
//     }


// });

// modal.addEventListener("click", (e) => {
//     if (e.target.classList.contains("modal")) {
//         // modal.classList.remove("open");
//         modal.style.opacity = "0";
//     }
// });



getPost(url);

