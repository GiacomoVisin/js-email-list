console.log(`hello`);


const listEl = document.getElementById(`list`)

const api = `https://flynn.boolean.careers/exercises/api/random/mail`



for (let i = 0; i <= 10; i++) {
    const liEl = document.createElement(`li`)
    fetch(api)
        .then(response => response.json())
        .then(data => {
            liEl.innerHTML = data.response
            listEl.append(liEl)
        })

}
