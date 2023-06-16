

const album = [
    ` 
    <div class="item active" id="img_1">
    <img src="img/01.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item" id="img_2">
    <img src="img/02.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item" id="img_3">
    <img src="img/03.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item" id="img_4">
    <img src="img/04.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item" id="img_5">
    <img src="img/05.webp" alt=""> 
    </div> 
    `
   
] 

console.log ('album', album, typeof album)

let items = document.getElementById("items")

for (let i = 0; i < album.length; i++) {
    console. log ('-', i, album[i]);
    // document.getElementById('items').innerHTML = (album)
    items.innerHTML += album[i];
    
    // let list = document.querySelector("item").classList;
    // list.add("active");

    // document.querySelector("item").classList.add("active");
    // item.classList.add

    // let list = album[i].classList;
    // list.add("myStyle");
}

const activeImg = 1;

const upButton = document.getElementById('up')

upButton.addEventListener('click', 
    
    function(){

        const activeImg = document.getElementById('img_'+activeImg)
        activeImg = activeImg + 1;
})


