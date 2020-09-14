$.ajax({
    url: 'https://api.kawalcorona.com/indonesia',
    success: result => {
        let corona = "";
        result.forEach(c => {
            corona += `<div class="col-md-12 my-5 text-center">
                        <div class="card">
                            <div class="card-header">
                                <h5>${c.name}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Positif : ${c.positif} </li>
                                <li class="list-group-item">Sembuh : ${c.sembuh}</li>
                                <li class="list-group-item">Meninggal : ${c.meninggal}</li>
                            </ul>
                        </div>
                    </div>`
        });
        $(".covid-19-nas").html(corona)
    },
    error: (e) => {
        console.log(e.responseText)
    }

})