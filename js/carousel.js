const carouselSlide = document.querySelector(".carousel-slide");
const url = "http://carolinedanielrud.one/wp-json/wp/v2/posts?_embed";
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let postId = 1;




async function getImages() {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        carouselSlide.innerHTML = "";

        console.log(posts);

        posts.forEach(function (post) {
            carouselSlide.innerHTML += `
                        <a href="blog.html?id=${post.id}" class="postItem">
                        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}"  id = "${postId}"class="featuredMedia" alt=""/>
                        </a>
                `
            postId++;
        })

        const carouselImages = document.querySelectorAll(".carousel-slide img");


        //Counter
        let counter = 1;
        const size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px ) ';

        //Button Listeners

        nextBtn.addEventListener('click', () => {
            if (counter >= carouselImages.length - 1) return;
            carouselSlide.style.transition = "transform 0.5s ease-in-out";
            counter++;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px ) ';

        });

        prevBtn.addEventListener('click', () => {
            if (counter <= 0) return;
            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            counter--;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px ) ';

        });

        carouselSlide.addEventListener('transitionend', () => {
            if (carouselImages[counter].id === 'lastClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px ) ';
            }
            if (carouselImages[counter].id === 'firstClone') {
                carouselSlide.style.transition = "none";
                counter = carouselImages.length - counter;
                carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px ) ';
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




getImages();