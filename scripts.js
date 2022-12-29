if (document.title == "Quiz") {
  const questions = [
    {
      question: "Which animal is Rudolph?",
      options: ["Lion", "Tiger", "Raindeer", "Elephant"],
      indicador: "animals",
      correcta: "Raindeer",
    },
    {
      question: "Which one is a turrón brand?",
      options: ["Suchard", "Nike", "Channel", "J&B"],
      indicador: "turron",
      correcta: "Suchard",
    },
    {
      question: "Who is american?",
      options: ["Baltasar", "Santa", "Melchor", "Gaspar"],
      indicador: "american",
      correcta: "Santa",
    },
    {
      question: "When is the gallo mass?",
      options: ["24 December", "1 January", "25 December", "6 July"],
      indicador: "gallo",
      correcta: "24 December",
    },
    {
      question: "Which one can be a present?",
      options: ["Coal", "Maths", "Space", "Norway"],
      indicador: "common",
      correcta: "Coal",
    },
    {
      question: "Where is Santa's house?",
      options: ["South Pole", "Albacete", "North Pole", "France"],
      indicador: "santa",
      correcta: "North Pole",
    },
    {
      question: "What is aguinaldo?",
      options: ["A drug", "A song", "A brand", "A tip"],
      indicador: "aguinaldo",
      correcta: "A tip",
    },
    {
      question: "Who is invisible?",
      options: ["The friend", "Hacienda", "Your mum", "Superman"],
      indicador: "invisible",
      correcta: "The friend",
    },
  ];

  for (let i = 0; i < questions.length; i++) {
    const newQuestion = document.createElement("fieldset");
    const newForm = document
      .getElementById("preguntas")
      .appendChild(newQuestion);
    const leyenda = document.createElement("legend");
    newQuestion.appendChild(leyenda);

    for (let j = 0; j < 4; j++) {
      const answer = document.createElement("div");
      newQuestion.appendChild(answer);
      answer.setAttribute("class", "respuestas");
      answer.setAttribute("id", `respuesta${[i]}${[j]}`);

      const answerb = document.createElement("input");
      answer.appendChild(answerb);
      answerb.setAttribute("id", `respuesta${[i]}${[j]}${[i]}`);

      const answera = document.createElement("label");
      answer.appendChild(answera);
      answera.setAttribute("for", `respuesta${[i]}${[j]}${[i]}`);

      answerb.value = questions[i].options[j];
      answerb.name = questions[i].indicador;
      answerb.type = "radio";

      leyenda.innerHTML = questions[i].question;
      answera.innerHTML = questions[i].options[j];
    }
  }

  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      console.log(event);
      let counter = 0;
      for (let k = 0; k < 40; k++) {
        for (let i = 0; i < questions.length; i++) {
          for (let j = 0; j < 4; j++) {
            if (
              event.target[k].checked === true &&
              event.target[k].defaultValue === questions[i].options[j] &&
              questions[i].options[j] === questions[i].correcta
            ) {
              //console.log(`respuesta${[i]}${[j]}`);
              document.getElementById(
                `respuesta${[i]}${[j]}`
              ).style.backgroundColor = "green";
              counter++;
            } else if (
              event.target[k].checked === true &&
              event.target[k].defaultValue === questions[i].options[j] &&
              questions[i].options[j] !== questions[i].correcta
            ) {
              document.getElementById(
                `respuesta${[i]}${[j]}`
              ).style.backgroundColor = "red";
            }
          }
        }
      }
      console.log(counter);
      document.getElementById("marcador").innerHTML = counter + "/10 correct answers";
    });


    
}
