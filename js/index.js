let page = 1
let keyword = ""
const input = document.getElementById('floatingInput')
const key = "07bU6cb-PBE18waXzEre2fS5KB5FrQG1eurigeZvrtk"
const box = document.getElementById('box')
const showMore = document.getElementById("more")
console.log(input.value)


async function consultarAPI() {
    keyword = input.value
    const apiURL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=12`
    const result = await fetch(apiURL)
    data = await result.json()
    console.log(data.results)

    data.results.map((result) =>{
        const image = document.createElement('img')
        const imageLink = document.createElement('a')
        image.src = result.urls.small
        image.style.width="300px";
        imageLink.href= result.links.html
        imageLink.target = "_blank"
        showMore.style.display='block'

        imageLink.appendChild(image)
        box.appendChild(imageLink)
    })
}
showMore.addEventListener('click',()=>{
    page++
    consultarAPI()
})

