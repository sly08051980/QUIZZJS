/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Mercury 1", 
      "Apollo 13", 
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/
let nombre = 0;
let res;


document.addEventListener("DOMContentLoaded", () => {

questionAleatoire()
  
});
  function questionAleatoire(){
    const listeQuestion = questions[nombre];
    if(nombre<=3){
      listeQuestion.answers.forEach((answer) => {
        
          let response = (`${answer}`);
          console.log(response);
          const ul=document.getElementById("answers")
          
          res = document.createElement('li');
          res.className="answer";
          res.innerHTML=answer;
          ul.appendChild(res);        
      });
        document.getElementById('question').innerText=listeQuestion.question;
        choixReponse(listeQuestion,res);
        nombre++;
    }else{
     document.getElementById('question').innerText=`Terminé votre score est de ${score.innerHTML}`;
    }
  }

  function choixReponse(listeQuestion,res) {
    const listeResponse = document.querySelectorAll(".answer");

    listeResponse.forEach((element,index) => {
      element.addEventListener("click", () => {

        console.log("click");
        console.log(index);
        if (listeQuestion.correctAnswerIndex ===index) {
          console.log("bravo");
          listeResponse.forEach((element)=>{
            element.remove();
          })
          calculPoint(); 
        }else{
          questionAleatoire();
          listeResponse.forEach((element)=>{
            element.remove();
          })
        }

      });
    });
  }

function calculPoint(){
  
  let score = document.getElementById('score');
  console.log(score.innerHTML);

  let point=score.innerHTML;
  point++;
  score.innerHTML=point;
  questionAleatoire();
}