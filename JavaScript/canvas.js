
const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

 const backgroundImg = document.createElement('img')
 const heroImg = document.createElement('img')
 const starImg = document.createElement('img')
 const targetImg = document.createElement('img')

 targetImg.src = 'https://www.seekpng.com/png/full/236-2369552_image-result-for-wuxia-spear-wuxia-spear.png'

 starImg.src = 'https://cdn.pixabay.com/photo/2013/07/12/18/46/throwing-star-153835_960_720.png'

 heroImg.src = 'https://www.pngall.com/wp-content/uploads/2016/06/Ninja-PNG-Clipart.png'

 backgroundImg.src = 'https://ak.picdn.net/shutterstock/videos/1052931794/thumb/1.jpg'

 const audio =document.createElement('audio')
 const stabAudio = document.createElement('audio')

 stabAudio.src = 'http://sfxcontent.s3.amazonaws.com/soundfx/Sword-Stab.mp3'

 audio.src = 'http://d-gun.com/files/sounds/LASRHVY2.WAV'

let data = {
    hero: {
        xDelta: 0,
        yDelta: 0,
        x: 90,
        y: 260,
        width: 100,
        height: 100
    },
    bullets:[],
    targets: []
}

function intersect(rect1, rect2) {
    const x = Math.max(rect1.x, rect2.x),
        num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
        y = Math.max(rect1.y, rect2.y),
        num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    return (num1 >= x && num2 >= y);
};

function update(){
    data.hero.x += data.hero.xDelta;
    data.hero.y += data.hero.yDelta;

    data.bullets.forEach(function(bullet){
        data.targets.forEach(function(target){
            if(intersect(target,bullet)){
                stabAudio.currentTime = 0.1
                stabAudio.play()
                bullet.deletMe = true
                target.deletMe = true
            }

        })
    })

    data.bullets = data.bullets.filter(function(bullet){
        return bullet.deletMe !== true
    })
    data.targets = data.targets.filter(function(target){
        return target.deletMe !== true
    })


    data.bullets.forEach(function(bullet){
        bullet.x += bullet.xDelta
    })
    data.bullets = data.bullets.filter(function(bullet){
        if(bullet.x > canvas.width - 70){
            return false
        }
        return true
    })
    data.targets.forEach(function(target){
        target.x += target.xDelta
    })

    if(data.targets.length === 0){
        data.targets.push({
            xDelta: -2,
            x: canvas.width ,
            y: data.hero.y,
            width: 90,
            height: 90,
        })
    }
}

function draw(){
    context.drawImage(backgroundImg,0,0,canvas.width,canvas.height)
    context.drawImage(heroImg, data.hero.x,data.hero.y,data.hero.width,data.hero.height)

    data.bullets.forEach(function(bullet){
        context.drawImage(starImg, bullet.x,bullet.y,bullet.width, bullet.height)
    })
    data.targets.forEach(function(target){
        context.drawImage(targetImg, target.x,target.y,target.width, target.height)
    })
}

function loop(){
    requestAnimationFrame(loop)
    update()
    draw()
}

loop()

document.addEventListener('keydown', function(evt){
    if(evt.code === 'ArrowRight'){
        data.hero.xDelta = 3
    } else if(evt.code === 'ArrowLeft'){
        data.hero.xDelta = -3
    } else{
        audio.currentTime = 0
        audio.play()
        data.bullets.push({
            xDelta: 8,
            x: data.hero.x + data.hero.width-10,
            y: 290,
            width: 30,
            height: 30,
        })
    }
    console.log(data.bullets.length);
    
})

document.addEventListener('keyup', function(evt){
    data.hero.xDelta = 0
})