const body = document.querySelector('body')

const chosenImage = (number) => {
    const img = document.createElement('img')

    img.src = `img/${number}.jpg`
    img.alt = 'background images'
    img.classList.add('bgImage')

    // prepend() : ()를 선택한 요소 내부의 시작부분에 삽입
    body.prepend(img)
}

const getRandom = () => {
    
    const IMG_NUM = 8

    const num = Math.floor(Math.random() * IMG_NUM)
    chosenImage(num)
}

getRandom()

// const images = ["1.jpg", "2.jpg", "3.jpg"]

// const chosenImage = images[Math.floor(Math.random() * images.length)]

// const bgImage = document.createElement("img")

// bgImage.src = `img/${chosenImage}`

// document.body.appendChild(bgImage)