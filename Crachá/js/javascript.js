botao.addEventListener("click", function() {
    event.preventDefault();
    const pessoa = nome.value;

    if (/^[a-zA-Z\sç'À-ÖØ-öø-ÿ]+$/u.test(pessoa)) {
        const partesNome = pessoa.trim().toLowerCase().split(/\s+/);
        const conectores = ['de', 'da', 'das', 'do', 'dos', 'e'];

        let nomeFormatado = [];
        for (let i = 0; i < partesNome.length; i++) {
            if (!conectores.includes(partesNome[i]) || i === 0) {
                nomeFormatado.push(partesNome[i].charAt(0).toUpperCase() + partesNome[i].slice(1));
            }
        }

        const iniciais = nomeFormatado.slice(0, -1).map(parte => parte.charAt(0).toUpperCase()).join('. ') + '.';
        texto.textContent = `${nomeFormatado[nomeFormatado.length - 1].toUpperCase()}, ${iniciais}`;
        if (texto.textContent.trim() !== "") {
            imagem.style.display = "flex";
            cracha.style.display = "flex";
            texto.style.display = "flex";
        }
    }

        else {
        alert("Por favor, digite apenas letras e espaços.");
        window.location.reload();
        }
});
