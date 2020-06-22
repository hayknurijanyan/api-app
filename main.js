const button = document.getElementById('button')
button.innerHTML = 'Press'
button.addEventListener('click',addPhoto)
const img = document.getElementById('img')
console.log(img)

async function addPhoto() {
    const response = await fetch ('https://dog.ceo/api/breeds/image/random')
    let data = await response.json()
    img.src=data.message
}
