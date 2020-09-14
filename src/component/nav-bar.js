class NavBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                            <div class="container">
                                <a class="navbar-brand" href="#"><i class="fas fa-shield-virus"></i> Covid - 19 IND</a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul class="navbar-nav mx-auto ">
                                        <li class="nav-item ">
                                            <a class="nav-link" href="#">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Tentang</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Statistik</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Pencegahan</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Kontak</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>`;
    }
}

customElements.define("nav-bar", NavBar);