let updateCorrectScore = 0;
let updateIncorrectScore = 0;
const correntScore = document.getElementById("correct-score");
const incorrectScore = document.getElementById("incorrect-score");

document.getElementById("btn-startQuiz").onclick = function () {
    Swal.fire({
        title: "<h4 style='color: black;'>Choose Your Quiz:</h4>",
        titleColor: 'white',
        showDenyButton: true,
        confirmButtonText: "HISTOLOGY",
        denyButtonText: `CYTOLOGY`,
        confirmButtonColor: 'rgb(3, 37, 85)',
        denyButtonColor: 'rgb(3, 37, 85)'
    }).then((result) => {
        if (result.isConfirmed) {
            runHistologyQuiz()
        } else if (result.isDenied) {
            runCytologyQuiz()
        }
    });
}


// HISTO LAB DEMO FUNCTIONS

async function runHistologyQuiz() {

    const histologyQuestions = [
        "1. What is the function of multipolar neurons?",
        "2. What is the shape of multipolar neurons?",
        "3. What is the function of pseudostratified ciliated columnar epithelium with goblet cells in the trachea?",
        "4. What is the shape of hepatocytes (liver cells)?",
        "5. What is the function of hepatocytes?",
        "6. What is the function of the egg cell (oocyte)?",
        "7. What is the tissue source of the transitional epithelium?",// urinary bladder
        "8. What is the function of simple squamous epithelium in Bowman’s capsule?",
        "9. What is the function of simple cuboidal epithelium in thyroid follicles?",
        "10. What is the function of simple squamous epithelium in the inner cheek?",
        "11. What is the tissue source of the simple columnar epithelium?", // gallbladder
        "12. What is the function of simple cuboidal epithelium in kidney tubules?",
        "13. What is the function of pseudostratified columnar epithelium with stereocilia in the epididymis?",
        "14. What is the function of simple columnar epithelium with microvilli and goblet cells in the ileum?",
        "15. What is the tissue source of stratified squamous epithelium keratinizing?",// epidermis of skin
        "16. What is the tissue source of simple squamous epithelium?",// endothelium of blood vessels
        "17. What is the function of simple squamous epithelium in blood vessels (endothelium)?",
        "18. What is the function of stratified columnar epithelium in the male urethra?",
        "19. What is the tissue source of stratified squamous non-keratinizing epithelium?",// vagina
        "20. What is the function of simple squamous epithelium in sinusoidal vessels of the liver?",
        "21. What is the function of stratified squamous epithelium in the esophagus?",
        "22. What is the tissue source of stratified cuboidal epithelium?",// interlobular duct of the submaxillary glands
        "23. What is the function of endocrine glands in the pancreas (Islets of Langerhans)?",
        "24. What is the function of blood cells (RBCs, WBCs, platelets)?",
        "25. What is the function of sperm cells?"
    ];

    const histologyAnswers = [
        "They receive and transmit signals", // 1
        "Stellate shape", // 2
        "Protection and mucus production", // 3
        "Polygonal or polyhedral", // 4
        "Metabolic functions and detoxification", // 5
        "Sexual reproduction", // 6
        "urinary bladder", // 7
        "Containment and storage", // 8
        "Hormone synthesis", // 9
        "Protection", // 10
        "Gallbladder", // 11
        "Absorption and secretion", // 12
        "Sperm maturation and absorption", // 13
        "Absorption", // 14
        "Epidermis of skin", // 15
        "Endothelium of blood vessels", // 16
        "Acts as a semi-permeable barrier", // 17
        "Conduction and protection", // 18
        "Vagina", // 19
        "Filtration and exchange", // 20
        "Protection", // 21
        "Interlobular duct of the submaxillary glands", // 22
        "Secretion of hormones such as insulin, glucagon, somatostatin, and pancreatic polypeptide", // 23
        "Transport, defense, and clotting", // 24
        "Sexual reproduction and fertilization" // 25
    ];


    let score = 0;

    for (let i = 0; i < histologyQuestions.length; i++) {

        const { value: userAnswer } = await Swal.fire({
            title: histologyQuestions[i],
            input: "text",
            inputPlaceholder: "Type your answer...",
            confirmButtonText: "Submit",
            allowOutsideClick: false
        });

        if (!userAnswer) {
            await Swal.fire("Please enter an answer!");
            i--;
            continue;
        }

        const formattedUserAnswer = userAnswer.trim().toLowerCase();
        const correctAnswer = histologyAnswers[i].toLowerCase();

        if (formattedUserAnswer === correctAnswer) {
            score++;
            updateCorrectScore++
            correntScore.innerHTML = updateCorrectScore
            await Swal.fire("Correct! 🎉");
        } else {
            updateIncorrectScore++
            incorrectScore.innerHTML = updateIncorrectScore
            await Swal.fire({
                icon: "error",
                title: "Incorrect!",
                text: `Correct answer: ${histologyAnswers[i]}`
            });
        }
    }

    await Swal.fire(`Quiz Finished! Your score: (${score}/${histologyQuestions.length}) I love youuuu`);
}



// CYTOLOGY FUNCTIONS

async function runCytologyQuiz() {

    const cytologyQuestions = [
        "1. What is the fundamental unit of life?", // Cell
        "2. All eukaryotic cells are bounded by the?", // Cell membrane
        "3. What is the function of peroxisomes?",
        "4. What is the scientific study of cell referred to?", // Cytology
        "5. What is the function of the Golgi apparatus?",
        "6. What is the function of the nucleus?",
        "7. What regulates passage of materials in and out of the cell?", // Selective barrier
        "8. The cell membrane is visible only in the?", // Electron microscope
        "9. What is the function of intermediate filaments?",
        "10. This is a semi permeable layer consisting of phospholipid bilayer and membrane proteins that are free to ove laterally within the place of one leaflet.", // Plasma membrane
        "11. This provides support for organelles and serves as medium through which diffusion occurs.", // Cytosol 
        "12. What type of organelle are ribosomes?", // Non-membrane-bound
        "13. What type of organelle is the peroxisomes?", // Membrane-bound
        "14. What type of organelle are centrioles?", // Non-membrane-bound
        "15. What is the function of centrioles?",
        "16. What are examples of microfilaments?", // Actin, microvilli
        "17. What is the function of neutrophils?",
        "18. What is the function of eosinophils?",
        "19. This cytoskeletal component provides tracks for organelle and chromosome movement.", // Microtubules
        "20. These are mononucleated with variation in shape depending on structural type", // Nerve cells
        "21. What is the shape of red blood cells?", // Discoid shaped
        "22. What is the function of the barr body?",
        "23. How many chromosomes does a haploid have?", // 23
        "24. What contains Nissl bodies?", // Perikaryon
        "25. This carries impulses from the cell body." // Axon
    ];

    const cytologyAnswers = [
        "cell", // 1
        "cell membrane", // 2
        "detoxify harmful substances and break down fatty acids", // 3
        "cytology", // 4
        "modify, package, and sort materials from the ER", // 5
        "house DNA and direct protein synthesis", // 6
        "selective barrier", // 7
        "electron microscope", // 8
        "strengthen cell and tissue structureP", // 9
        "plasma membrane", // 10
        "cytosol", // 11
        "non-membrane-bound", // 12
        "membrane-bound", // 13
        "non-membrane-bound", // 14
        "help form mitotic spindle", // 15
        "actin, microvilli", // 16
        "first responders to bacterial or fungal infection", // 17
        "respond to parasitic infections and allergic reactions", // 18
        "Microtubules", // 19
        "nerve cells", // 20
        "discoid shaped", // 21
        "inactivated X chromosome, equalizes gene dosage", // 22
        "23", // 23
        "perikaryon", // 24
        "axon" // 25
    ];


    let score = 0;

    for (let i = 0; i < cytologyQuestions.length; i++) {

        const { value: userAnswer } = await Swal.fire({
            title: cytologyQuestions[i],
            input: "text",
            inputPlaceholder: "Type your answer...",
            confirmButtonText: "Submit",
            allowOutsideClick: false
        });

        if (!userAnswer) {
            await Swal.fire("Please enter an answer!");
            i--;
            continue;
        }

        const formattedUserAnswer = userAnswer.trim().toLowerCase();
        const correctAnswer = cytologyAnswers[i].toLowerCase();

        if (formattedUserAnswer === correctAnswer) {
            score++;
            updateCorrectScore++
            correntScore.innerHTML = updateCorrectScore
            await Swal.fire("Correct! 🎉");
        } else {
            updateIncorrectScore++
            incorrectScore.innerHTML = updateIncorrectScore
            await Swal.fire({
                icon: "error",
                title: "Incorrect!",
                text: `Correct answer: ${cytologyAnswers[i]}`
            });
        }
    }

    await Swal.fire(`Quiz Finished! Your score: (${score}/${cytologyQuestions.length}) mwamwamwaa`);
}

let toggleCounter = 0;

document.getElementById("btn-darkmode").onclick = function () {
    toggleCounter++;

    const body = document.body;
    const btnToggle = document.getElementById("btn-darkmode");

    if (toggleCounter % 2 == 0) {
        body.style.backgroundColor = "rgb(186, 206, 206)";
        btnToggle.style.backgroundColor = "black";
        btnToggle.style.color = "white";
        btnToggle.innerHTML = "Dark Mode";

    } else {
        body.style.backgroundColor = "black";
        btnToggle.style.backgroundColor = "rgb(186, 206, 206)";
        btnToggle.style.color = "black";
        btnToggle.innerHTML = "Light Mode";
    }
}