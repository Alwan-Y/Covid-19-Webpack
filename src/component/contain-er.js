class ContainerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<div id="carouselExampleControls" class="carousel slide pt-5" data-ride="carousel">
        <div class="carousel-inner">
            <div class="container">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="text col-sm-8 col-10 ">
                            <h1 class="mb-4">Selamat Datang</h1>
                            <p class="mb-3">Dapatkan Informasi Secara, Tepat, Cepat, Dan Akurat</p>
                            <p>Dapatkan Informasi Terupdate Baik Nasional Maupun Provinsi Hanya Disini</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="text col-sm-8 col-10 ">
                            <h1 class="mb-4">Covid - 19 IND</h1>
                            <p class="mb-3">Dapatkan Pengetahuan Tentang Covid-19 Baik Cara Penularan, Pencegahan, Dan
                                Lain Lain</p>
                            <p>Dapatkan Juga Cara Mengusir Kebosanan Akibar Covid - 19 Hanya Disini.</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>`;
    }
}

customElements.define("container-bar", ContainerBar);