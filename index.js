function prosesBilFaktorial() {
    const id_angka = document.getElementById("n_angka").value;
    let id_t_angka = document.getElementById("t_angka");
    let id_t_hasil = document.getElementById("t_hasil");

    function faktorial(n) { 
        let a = 1;
        for(i = 1; i <= n; i++) {
            a *= i;
        }
        return a;   
    }

    let hasil_fakto = faktorial(id_angka);
    id_t_angka.innerText = id_angka;
    id_t_hasil.innerText = hasil_fakto;
}