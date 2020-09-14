$.ajax({
    url: 'https://api.kawalcorona.com/indonesia/provinsi',
    success: result => {
        let coronas = "";
        result.forEach(c => {
            coronas += `<div class="col-md-3 my-5 text-center ">
                        <div class="card">
                            <div class="card-header">
                                <h5>${c.attributes.Provinsi}</h5>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Positif : ${c.attributes.Kasus_Posi} </li>
                                <li class="list-group-item">Sembuh : ${c.attributes.Kasus_Semb}</li>
                                <li class="list-group-item">Meninggal : ${c.attributes.Kasus_Meni}</li>
                            </ul>
                        </div>
                    </div>`
        });
        $(".covid-19-prov").html(coronas)
    },
    error: (e) => {
        console.log(e.responseText)
    }

})