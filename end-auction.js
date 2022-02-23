
function addLove (){
    const lovePic= document.getElementById("love-pic")
    console.log(lovePic)
    const poppin = document.getElementById("love")
    //console.log(poppin)

    lovePic.addEventListener('click', () => {
        
        poppin.innerText = 'much love'
    })
}

addLove()

