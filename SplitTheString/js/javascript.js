botao.addEventListener("click", function() {
    event.preventDefault();
    const pessoa = nome.value;

        const partes = pessoa.split(',').map(parte => parte.trim());
        const numerica = [];
        const NaoNumerica = [];

        partes.forEach(parte=>{
            if(!isNaN(parte)){
                numerica.push(parte);
            }
            else{
                NaoNumerica.push(parte);
            }
        })
        string.textContent = NaoNumerica.join(", ");
        numero.textContent = numerica.join(", ");
});
