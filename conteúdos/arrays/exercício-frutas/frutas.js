
        let frutas = ['banana', 'maçã', 'morango'];

        console.log(`Quantidade de frutas: ${frutas.length}`);

        frutas.push('uva')
        frutas.push('mamão')
        frutas.push('amora')

        console.log(`Quantidade de frutas atualizado: ${frutas.length}`);

        frutas.sort(); //ordena os valores do array

        console.log(frutas);

        for (let index = 0; index < frutas.length; index++) {
            console.log(`Fruta ${index + 1}:  ${frutas[index]}`);
        }

        frutas.forEach(function(frutas){
            console.log(frutas);
        })

        frutas.forEach(function(frutas, i){
            console.log(`Fruta ${i+1}: ${frutas}`);
        })

        let prateleira = [
            "Cerveja",
            "Coca-Cola",
            "Água",
            "Gatorade",
            "Corote",
            "H2O",
            "Guaraná Antártica",
            "Tubaína"
        ];

        let bebida = prateleira[1];

        switch (bebida) {
            case "Cerveja":
                console.log("Achei sua cerveja!")
                break;
            case "Tubaína":
                console.log("Achei sua Tubaína!")
                break;
            case "Guaraná Antártica":
                console.log("Achei seu Guaraná Antártica!")
                break;
            case "H2O":
                console.log("Achei sua H2O!")
                break;
            case "Corote":
                console.log("Achei seu Corote!")
                break;
            case "Gatorade":
                console.log("Achei sua Gatorade!")
                break;
            case "Água":
                console.log("Achei sua Água!")
                break;
            case "Coca-Cola":
                console.log("Achei sua Coca-Cola!")
                break;
        
            default:
                console.log(`Não temos essa bebida: (${bebida}) :(`);
                break;
        }