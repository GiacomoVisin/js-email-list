console.log(`hello`);

const formEl = document.getElementById(`form`)
const btnEl = document.getElementById(`btn`)
const listEl = document.getElementById(`list`)

 const api = `https://flynn.boolean.careers/exercises/api/random/mail` 


function loadEMail (){ 
    liEl = " "
for (let i = 0; i <= 10; i++) {
    const liEl = document.createElement(`li`)
    fetch(api)
        .then(response => response.json())
        .then(data => {
            liEl.innerHTML = data.response
            listEl.append(liEl)
        })

}
 }


loadEMail()


formEl.addEventListener(`click`, (e)=>{
    loadEMail()
})

