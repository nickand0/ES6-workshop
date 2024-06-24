let letterMaj = (chaine) => 
chaine.split(' ').map(x =>x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()).join(' ');

console.log(letterMaj("le javascript demande beaucoup de concentration"));



   /* //séparer une phrase en mot et mettre chaque mot dans un tableau 
    function SeparatorTableau(chaine){
        let tableau =[];
        let nouveauMot =("")

        for (let i =0;i< chaine.length;i++ ){
            let caractere = chaine[i];
     
            if (caractere !== ' '){
            nouveauMot += caractere;
            }else{
                if (nouveauMot){
                    tableau.push(nouveauMot);
                    nouveauMot ="";
                }
            }  
        }

        if (nouveauMot){
            tableau.push(nouveauMot)
        }

        return tableau
    }
//fonction pour mettre en majuscule chaque la première lettre de mot
    function MajPremiereLettre (mot){
        let fisrtLetter = mot[0].toUpperCase();
        let resteletter = ''
        for (let j=1 ;j<mot.length;j++){
            resteletter += mot[j];
        }
        return fisrtLetter + resteletter
      
    };
    

// Transformer chaque mot dans le tableau avec la première lettre en majuscule
    function MajTableau (tableau){
        let resultatTableau =[];

        for (let i = 0; i < tableau.length; i++) {
        let result = MajPremiereLettre(tableau[i]);
        resultatTableau.push(result);
            
        } 
        return resultatTableau  
    
    };

// rassembler les mots
    function Rassembler (table){
        let resultfinal=''
        for (i=0 ;i<table.length;i++){
         resultfinal += table[i]+ " "
        }
        return resultfinal
    }
// fonction final
    function letterMaj (chaine){
        let tableau = SeparatorTableau(chaine);
        let tableauMaj = MajTableau (tableau)
        return Rassembler(tableauMaj)
    }*/


   

    


