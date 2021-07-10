function calcularImc() {
    event.preventDefault();
    let peso = document.querySelector(".peso").value;
    let altura = document.querySelector(".altura").value;
    let resultado = parseFloat(peso) / parseFloat(altura) ** 2;
    const result = document.querySelector('#result');
    const dicas = document.querySelector('#dicas');

    result.innerHTML = `
    <div class="result-total">
    <p class="result-info">Seu resultado é: ${resultado.toFixed(2)}.</p> <br>
    <table>
        <tr>
            <th>
                IMC
            </th>
            <th>
                Classificação
            </th>
        </tr>
        <tr class="baixopeso">
            <td>
                abaixo de 18,6
            </td>
            <td>
                abaixo do peso
            </td>
        </tr>
        <tr class="pesonormal">
            <td>
                entre 18,6 e 24,9
            </td>
            <td>
                Peso ideal (parabéns)
            </td>
        </tr>
        <tr class="sobrepeso">
            <td>
            entre 25  e 29,9
            </td>
            <td>
                Sobrepeso
            </td>
        </tr>
        <tr class="obesidade-one">
            <td>
                entre 30 e 34,9
            </td>
            <td>
                Obesidade Grau I
            </td>
        </tr>
        <tr class="obesidade-two">
            <td>
                entre 35 e 39,9
            </td>
            <td>
                Obesidade Grau II
            </td>
        </tr>
        <tr class="obesidade-tree">
            <td>
                Acima de 40
            </td>
            <td>
                Obesidade Grau III
            </td>
        </tr>

    </table>
    <br/>
    <p style="text-align:center"> Confira a dica abaixo: </p>
</div>`;
    if (resultado < 18.6) {
        let select = document.querySelector('.baixopeso')
        select.classList.add('select')
        dicas.innerHTML = `Ser magro demais também não é saudável!!, você precisa se alimentar melhor.`;
    } else if (resultado > 18.6 && resultado < 25) {
        let select = document.querySelector('.pesonormal')
        select.classList.add('select')
        dicas.innerHTML = `Parabéns, você está no peso ideal, mantenha este ritmo.`;
    } else if (resultado >= 25 && resultado < 30) {
        let select = document.querySelector('.sobrepeso')
        select.classList.add('select')
        dicas.innerHTML = `Você está um pouco acima do peso, não relaxe, procure se cuidar mais.`;
    } else if (resultado >= 30 && resultado < 35) {
        let select = document.querySelector('.obesidade-one')
        select.classList.add('select')
        dicas.innerHTML = `Você está com Grau I de obesidade, procure reduzir o peso.`;
    } else if (resultado >= 35 && resultado < 40) {
        let select = document.querySelector('.obesidade-two')
        select.classList.add('select')
        dicas.innerHTML = `Você está com Grau II de obesidade, procure ajuda profissional, sua saúde agradece.`;
    } else if (resultado >= 40) {
        let select = document.querySelector('.obesidade-tree')
        select.classList.add('select')
        dicas.innerHTML = `Você está com Grau III de obesidade, procure ajuda profissional urgente, sua saúde agradece.`;
    }
}