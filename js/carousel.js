const carouselSlide = document.querySelector(".carousel-slide");
const url = "https://carolinedanielrud.one/wp-json/wp/v2/posts?_embed";
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
let imageIndex = 1;
let translateX = 0;


// let postId = 1;


async function getImages(url) {
    try {
        const response = await fetch(url);
        const posts = await response.json();

        carouselSlide.innerHTML = "";


        posts.forEach(function (post) {
            carouselSlide.innerHTML += `
            <a href="blog.html?id=${post.id}" class="postItem">
                        <img src="${post._embedded['wp:featuredmedia']['0'].source_url}"  class="featuredMedia" alt=""/></a>`

        });




    } catch (error) {
        carouselSlide.innerHTML = `
             <div class="error">
                 <p>Something went wrong, please try agian later</p>
             </div>
         `;
    }
    
    const image = document.querySelectorAll(".postItem img");
    const imageWidth = image[0].clientWidth;

    function carouselMoveLeft(event) {

        if (imageIndex !== 1) {
            imageIndex--;
            translateX += imageWidth;
            console.log(imageIndex);
            carouselSlide.style.transform = `translateX(${translateX}px)`;

        }
        console.log(translateX);
        console.log(imageIndex);


    };
    function carouselMove(event) {
        const numberOfImages = document.querySelectorAll(".carousel-slide img").length;
        if (imageIndex !== numberOfImages) {
            imageIndex++;
            translateX -= imageWidth;
            carouselSlide.style.transform = `translateX(${translateX}px)`;
        }

    };
    prevBtn.addEventListener(`click`, carouselMoveLeft);
    nextBtn.addEventListener(`click`, carouselMove);

};


getImages(url);









