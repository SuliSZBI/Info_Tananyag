function kiir() {
    const navbarSelect = document.querySelector('#navbar-select');
    let ertek = navbarSelect.value;
    if (ertek === 'Bevezetés a programozásba') {
        window.location.href = '/bevezetes_a_programozasba.html';
    } else if (ertek === 'Webszerkesztés') {
        window.location.href = '/webszerkesztes.html';
    } else if (ertek === 'Hibakeresés weboldalakon') {
        window.location.href = '/hibakereses_weboldalakon.html';
    } else if (ertek === 'Bevezetés a szoftverfejlesztésbe') {
        window.location.href = '/bevezetes_a_szoftverfejlesztesbe.html';
    }
}

function navFeltolt() {
    let nav = document.querySelector('nav');

    let tartalom = `
        <div id="navbar-select-container">
            <select
                id="navbar-select"
                onchange="kiir()"
            >
                <option value="">Témakörök</option>
                <optgroup label="Programozási alapok">
                    <option value="Bevezetés a programozásba">
                        Bevezetés a programozásba
                    </option>
                    <option value="Webszerkesztés">Webszerkesztés</option>
                    <option value="Hibakeresés weboldalakon">
                        Hibakeresesés weboldalakon
                    </option>
                </optgroup>
                <optgroup label="Asztali alkalmazások fejlesztése">
                    <option value="Bevezetés a szoftverfejlesztésbe">
                        Bevezetés a szoftverfejlesztésbe
                    </option>
                    <option value="Procedurális és objektumorientált szoftverfejlesztés">
                        Procedurális és objektumorientált szoftverfejlesztés
                    </option>
                </optgroup>
                <optgroup label="Asztali és mobil alkalmazások fejlesztése és tesztelése">
                    <option value="Haladó szintű objektumorientált programozás">
                        Haladó szintű objektumorientált programozás
                    </option>
                    <option value="Nevezetes algoritmusok és megvalósításuk OOP-technológiával ">
                        Nevezetes algoritmusok és megvalósításuk OOP-technológiával 
                    </option>
                </optgroup>
            </select>
        </div>
    `;

    nav.innerHTML += tartalom;
}

navFeltolt();
