const nameHeroi = "Seijyn";

let levelScore =500;



    if (levelScore >= 100 && levelScore < 1000) {

        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel é Ferro")
    }else if(levelScore > 1000 && levelScore <= 2000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel agora é Bronze")
    }else if(levelScore > 2000 && levelScore <= 5000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel agora é Prata")
    }else if(levelScore > 6000 && levelScore <= 7000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel agora é Ouro")
    }else if(levelScore > 7000 && levelScore <= 8000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel agora é Platina")
    }else if(levelScore > 8000 && levelScore <= 9000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+ "XP seu nivel agora é Ascendente")
    }else if(levelScore > 9000 && levelScore < 10000){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+"XP seu nivel agora é Imortal")
    }else if(levelScore >=10000 ){
        console.log("O guerreiro "+nameHeroi+" tem "+levelScore+"XP seu nivel agora é Radiante")
    }else{
        console.log("GAME OVER")
    }
