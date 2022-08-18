const complimentBtn = document.getElementById("complimentBtn")

const getCompliment = () => {
    axios.get("http://localhost:4005/compliment/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

complimentBtn.addEventListener(`click`, getCompliment)