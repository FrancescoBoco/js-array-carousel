

const album = [
    ` 
    <div class="item ">
    <img src=":/img/01.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item ">
    <img src=":/img/02.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item ">
    <img src=":/img/03.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item ">
    <img src=":/img/04.webp" alt=""> 
    </div> 
    `
    ,
    ` 
    <div class="item ">
    <img src=":/img/05.webp" alt=""> 
    </div> 
    `
   
] 

console.log ('album', album, typeof album)

for (let i = 0; i < album.length; i++) {
    console. log ('-', i, album[i]);
    document.getElementById('items').innerHTML = (album)
}