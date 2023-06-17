
 /*
const album = [
    
    ` 
    <div class="item active" id="img_1 " >
    <img src="img/01.webp" alt=""> 
    </div>
    
    v"img/01.webp"
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
    document.getElementById('items').innerHTML = (album)
    items.innerHTML += album[i];
    
    let list = document.querySelector("item").classList;
    list.add("active");

    document.querySelector("item").classList.add("active");
    item.classList.add

    let list = album[i].classList;
    list.add("myStyle");
}
   */



const upButton = document.getElementById('up')


let activeImg = 1;
upButton.addEventListener('click', 

    function(){
        activeImg += 1;

        if (activeImg == 6  ){
            activeImg = 1
        }

        document.getElementById("img").src = `img/0${activeImg}.webp`; /*album[activeImg]*/




        // let pippo = document.getElementById('img_'+activeImg);
        // pippo.removeClass("active");
        
})




const downButton = document.getElementById('down')

downButton.addEventListener('click', 

    function(){
        activeImg -= 1;

        // activeImg = (activeImg - 1) % 5 + 1 

        if (activeImg == 0  ){
            activeImg = 5
        }


        document.getElementById("img").src = `img/0${activeImg}.webp`;

        




        // let pippo = document.getElementById('img_'+activeImg);
        // pippo.removeClass("active");
        
})


