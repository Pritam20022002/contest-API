let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((data) => {
    return data.json()
}).then((contest) => {
    console.log(contest)
    ihtml = ""
    for (items in contest) {
        console.log(contest[items])
        ihtml += `  
        <div class="card" style="width: 20rem;">
            <img src="https://img.freepik.com/premium-vector/electric-brain_106072-29.jpg?w=740"        class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contest[items].name}</h5>
                    <p>Start Time :${contest[items].start_time} </p>
                    <p>End Time :${contest[items].end_time} </p>
                    <a href="${contest[items].url}" class="btn btn-primary">Click to visit</a>
                </div>
        </div>  
    `
    }
    cardContainer.innerHTML = ihtml
})
