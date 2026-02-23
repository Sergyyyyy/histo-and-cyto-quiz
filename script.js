let updateCorrectScore = 0;
let updateIncorrectScore = 0;
const correntScore = document.getElementById("correct-score");
const incorrectScore = document.getElementById("incorrect-score");

document.getElementById("btn-startQuiz").onclick = function () {
    Swal.fire({
        title: "<h4 style='color: black;'>Choose Your Quiz:</h4>",
        titleColor: 'white',
        showDenyButton: true,
        confirmButtonText: "ANACHEM",
        denyButtonText: `Back`,
        confirmButtonColor: 'rgb(3, 37, 85)',
    }).then((result) => {
        if (result.isConfirmed) {
            runAnachemQuiz()
        } else if (result.isDenied) {
            Swal.fire('Hehe u givin up? 🤣🤣')
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
        "strengthen cell and tissue structure", // 9
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

async function runAnachemQuiz() {

    const anachemQuestions = [
        // Unit 1: Introduction to Analytical Chemistry
        "Define analytical chemistry and distinguish between qualitative and quantitative analysis.",
        "What are classical methods of analysis and give two examples.",
        "Explain the difference between gravimetric and titrimetric methods.",
        "List three instrumental methods based on radiation properties.",
        "What is the role of sampling in quantitative analysis?",
        "Differentiate systematic error from random error.",
        "What is masking in analytical chemistry?",
        "Give two applications of analytical chemistry in medicine.",
        "What is the difference between complete and partial analysis?",
        "Explain the importance of selectivity in choosing an analytical method.",

        // Unit 2: Solutions
        "Define solute and solvent with examples.",
        "Differentiate saturated, unsaturated, and supersaturated solutions.",
        "Calculate the molarity of 9.00 g NaCl in 86.4 mL solution.",
        "How many grams of K2Cr2O7 are required to prepare 250 mL of 2.16 M solution?",
        "Calculate molality and % by mass of a solution containing 24.4 g H2SO4 in 198 g water.",
        "What mass of water must be added to 5.00 g urea to prepare a 1.5% solution?",
        "Explain dilution and write the formula used.",
        "Calculate the molarity of vinegar containing 5.11% acetic acid (density = 1.007 g/mL).",
        "What is mole fraction and how is it calculated?",
        "Differentiate molarity, molality, and normality.",

        // Unit 3: Colligative Properties
        "What are colligative properties? Give four examples.",
        "State Raoult’s Law and its mathematical expression.",
        "Calculate vapor pressure lowering for 75 g sucrose in 180 g water at 27℃.",
        "Calculate boiling point elevation of 2.50 m glucose solution (Kb = 0.512℃/m).",
        "What is freezing point depression and its formula?",
        "Calculate the molecular weight of a compound if 1.150 g dissolves in 10 g water, freezing at -2.16℃.",
        "Define osmotic pressure and write its formula.",
        "What is the van’t Hoff factor (i) and why is it important?",
        "Which solution has the lowest vapor pressure: 1M NaCl, 1M K3PO4, 1M glucose, or 1M MgCl2?",
        "Which solution would be expected to have the highest boiling point: 0.100m KCl, 0.050m Al2(SO4)3, 0.075m K2SO4, or 0.200m sucrose?",

        // Unit 4: Chemical Kinetics
        "Define reaction rate and write its general formula.",
        "Write the rate expressions for 4NH3 + 5O2 → 4NO2 + 6H2O.",
        "Calculate the rate of disappearance of HCl when [HCl] decreases from 1.85 M to 1.58 M in 54 min.",
        "List six factors affecting reaction rates.",
        "Explain collision theory and effective collisions.",
        "What is activation energy and how does it affect reaction rate?",
        "Differentiate zero, first, and second order reactions.",
        "Calculate concentration of N2O5 after 4 min if k = 0.35/min and [N2O5]₀ = 0.16 M.",
        "What is the half-life of a first-order reaction with k = 0.35/min?",
        "Explain the concept of rate-determining step in reaction mechanisms.",

        // Experiment 1: Numbers and Measurements
        "Define accuracy and precision in measurements.",
        "What is percent error and how is it calculated?",
        "Explain systematic error with one example.",
        "Explain random error with one example.",
        "What are significant figures and why are they important?",
        "State the rules for counting significant figures.",
        "How do you round off numbers based on significant figures?",
        "Explain addition/subtraction rule for significant figures.",
        "Explain multiplication/division rule for significant figures.",
        "Differentiate instrumental, method, and personal errors.",

        // Experiment 2: Colligative Properties
        "Explain boiling point elevation and write its formula.",
        "Explain freezing point depression and write its formula.",
        "What is the van’t Hoff factor for NaCl, CaCl2, and sucrose?",
        "Arrange 1 m NaCl, 1 m KNO3, 1 m CaCl2, and 1 m sucrose in order of increasing boiling points.",
        "Arrange 0.4 m NaCl, 0.4 m KNO3, 0.4 m CaCl2, and 0.4 m sucrose in order of increasing freezing points.",
        "Calculate ΔTb for 0.01 m NaOH solution (Kb = 0.512℃/m).",
        "Calculate ΔTb for 0.01 m Fe(NO3)3 solution (Kb = 0.512℃/m).",
        "Explain why electrolytes have higher colligative effects than nonelectrolytes.",
        "What is the theoretical van’t Hoff factor for Na2SO4?",
        "Explain why measured van’t Hoff factors are often lower than theoretical values.",

        // Experiment 3: Chemical Kinetics
        "Write the balanced equation for Na2S2O3 reacting with HCl.",
        "Define initial, instantaneous, and average reaction rates.",
        "Explain how concentration affects reaction rate.",
        "Explain how temperature affects reaction rate.",
        "Explain how catalysts affect reaction rate.",
        "Define rate law and overall order of reaction.",
        "Determine reaction order from initial rate data.",
        "What is the rate law for NO2 + CO → NO + CO2?",
        "What are the units of rate constant for zero, first, and second order reactions?",
        "Explain the concept of overall reaction order.",

        // Statistical Data Analysis
        "Differentiate systematic and random errors.",
        "Define absolute error and relative error.",
        "What is the formula for standard deviation?",
        "What is the coefficient of variation?",
        "Explain confidence interval and confidence level.",
        "What is the Q-test and when is it used?",
        "Explain hypothesis testing and null hypothesis.",
        "Differentiate type I and type II errors.",
        "What is the t-test used for?",
        "What is the F-test used for?",

        // Basic Laboratory Techniques
        "Differentiate top-loading and analytical balances.",
        "List proper practices when using a laboratory balance.",
        "Explain the concept of meniscus in volume measurement.",
        "Differentiate volumetric pipette and measuring pipette.",
        "Explain proper use of a burette in titration.",
        "What is a volumetric flask and its purpose?",
        "Explain the steps in preparing a solution using a volumetric flask.",
        "Why should chemicals not be placed directly on the balance pan?",
        "Why should hot objects not be weighed?",
        "Explain parallax error in reading volumes.",

        // Handling Numbers
        "Define accuracy and precision.",
        "What is uncertainty in measurement?",
        "What are significant figures?",
        "State the rules for counting significant figures.",
        "Explain rounding off rules.",
        "Explain addition/subtraction rule for significant figures.",
        "Explain multiplication/division rule for significant figures.",
        "Why can calculated answers not be more precise than measured data?",
        "Give an example of sandwich zeros.",
        "Explain trailing zeros rule."

    ];

    const anachemAnswers = [
        // Unit 1: Introduction to Analytical Chemistry
        "Analytical chemistry is the study of chemical substances. Qualitative identifies what is present, quantitative measures how much.",
        "Classical methods are wet chemical methods such as precipitation and titration.",
        "Gravimetric methods measure mass, titrimetric methods measure volume of reagent reacting with analyte.",
        "Examples: emission spectroscopy, absorption spectroscopy, Raman spectroscopy.",
        "Sampling ensures the small portion analyzed represents the bulk material.",
        "Systematic errors are reproducible and bias results; random errors are unpredictable and scatter results.",
        "Masking converts interfering species into non-interfering forms.",
        "Applications: diagnosing disease, determining drug toxicity.",
        "Complete analysis measures all components; partial analysis measures selected species.",
        "Selectivity ensures the method responds only to the analyte of interest.",

        // Unit 2: Solutions
        "Solute is the substance dissolved, solvent is the medium. Example: NaCl in water.",
        "Saturated holds max solute, unsaturated less than max, supersaturated more than equilibrium.",
        "Moles = 9.00/58.44 = 0.154 mol. Volume = 0.0864 L. M = 1.78 M.",
        "Moles = 2.16 × 0.250 = 0.540 mol. Mass = 0.540 × 294.185 = 159 g.",
        "Moles H2SO4 = 24.4/98.079 = 0.249 mol. Molality = 0.249/0.198 = 1.26 m. % = 11.0%.",
        "Mass of solute = 5 g. For 1.5% solution, total mass = 333 g. Water = 328 g.",
        "Dilution formula: C1V1 = C2V2.",
        "Moles HOAc = (5.11 g/100 g solution × 1.007 g/mL density × 1000 mL)/60.052 ≈ 0.857 M.",
        "Mole fraction = moles of component / total moles.",
        "Molarity = mol/L, Molality = mol/kg solvent, Normality = equivalents/L.",

        // Unit 3: Colligative Properties
        "Colligative properties depend only on number of solute particles: vapor pressure lowering, boiling point elevation, freezing point depression, osmotic pressure.",
        "Raoult’s Law: P1 = X1P°.",
        "ΔP = X2P°. For 75 g sucrose in 180 g water, ΔP ≈ 0.571 torr.",
        "ΔTb = Kb × m = 0.512 × 2.50 = 1.28℃. BP = 101.28℃.",
        "ΔTf = Kf × m.",
        "Using ΔTf = 2.16℃, MW = (1.150 g / 0.010 mol) ≈ 99.1 g/mol.",
        "Osmotic pressure π = MRT.",
        "Van’t Hoff factor accounts for ion dissociation. NaCl i≈2, CaCl2 i≈3, sucrose i=1.",
        "Lowest vapor pressure: 1M K3PO4 (i=4).",
        "Highest boiling point: 0.050m Al2(SO4)3 (i=5).",

        // Unit 4: Chemical Kinetics
        "Reaction rate = Δ[reactant]/Δt or Δ[product]/Δt.",
        "Rate = -1/4 Δ[NH3]/Δt = -1/5 Δ[O2]/Δt = 1/4 Δ[NO2]/Δt = 1/6 Δ[H2O]/Δt.",
        "Rate = (1.85 - 1.58)/54 = 5.0 × 10^-3 M/min.",
        "Factors: collisions, activation energy, nature of reactants, concentration, temperature, catalyst.",
        "Effective collisions require proper orientation and sufficient energy.",
        "Activation energy is minimum energy required to form transition state.",
        "Zero order: rate independent of [A]; first order: rate ∝ [A]; second order: rate ∝ [A]^2.",
        "[N2O5] = 0.16 e^(-0.35×4) ≈ 0.039 M.",
        "t½ = 0.693/0.35 = 1.98 min.",
        "Rate-determining step is the slowest step controlling overall rate.",

        // Experiment 1: Numbers and Measurements
        "Accuracy = closeness to true value; precision = closeness among repeated values.",
        "% error = (Xi - Xt)/Xt × 100.",
        "Systematic error: e.g., miscalibrated burette.",
        "Random error: e.g., fluctuations in room temperature.",
        "Significant figures include all certain digits plus one uncertain digit.",
        "Rules: nonzero digits significant; sandwich zeros significant; leading zeros not; trailing zeros significant if decimal present.",
        "Round: 4 and below drop, 5 and above round up.",
        "Addition/subtraction: round to least decimal places.",
        "Multiplication/division: round to least significant figures.",
        "Instrumental error from faulty calibration; method error from incomplete reaction; personal error from bias.",

        // Experiment 2: Colligative Properties
        "Boiling point elevation: ΔTb = Kbmi.",
        "Freezing point depression: ΔTf = Kfmi.",
        "NaCl i=2, CaCl2 i=3, sucrose i=1.",
        "Order: sucrose < NaCl < KNO3 < CaCl2.",
        "Order: sucrose < NaCl < KNO3 < CaCl2.",
        "ΔTb = 0.01 × 0.512 × 2 = 0.010℃.",
        "ΔTb = 0.01 × 0.512 × 4 = 0.020℃.",
        "Electrolytes dissociate into multiple particles, increasing colligative effect.",
        "Na2SO4 dissociates into 3 ions, i=3.",
        "Measured i lower due to incomplete dissociation and ion pairing.",

        // Experiment 3: Chemical Kinetics
        "Na2S2O3 + 2HCl → S + SO2 + 2NaCl + H2O.",
        "Initial rate measured at start; instantaneous at a point; average over interval.",
        "Higher concentration increases collisions, faster rate.",
        "Higher temperature increases kinetic energy, faster rate.",
        "Catalysts lower activation energy, increase rate.",
        "Rate law: rate = k[A]^m[B]^n.",
        "Reaction order determined by comparing rate changes with concentration changes.",
        "Rate law: rate = k[NO2]^2.",
        "Units: zero order k = M/s; first order k = 1/s; second order k = 1/(M·s).",
        "Overall order = sum of exponents.",

        // Statistical Data Analysis
        "Systematic errors are reproducible biases; random errors scatter results.",
        "Absolute error = Xi - Xt; relative error = (Xi - Xt)/Xt × 100%.",
        "Standard deviation formula: s = √Σ(xi - x̄)^2/(N-1).",
        "Coefficient of variation = (s/x̄) × 100%.",
        "Confidence interval gives range where true mean lies with certain probability.",
        "Q-test identifies outliers based on gap/range ratio.",
        "Hypothesis testing compares sample mean to known value.",
        "Type I error = false positive; Type II error = false negative.",
        "t-test compares means of two samples.",
        "F-test compares variances of two samples.",

        // Basic Laboratory Techniques
        "Top-loading balance readability ~0.01 g; analytical balance ~0.0001 g.",
        "Practices: stable surface, clean pan, use containers, tare before weighing.",
        "Meniscus is curve of liquid surface; read at bottom at eye level.",
        "Volumetric pipette delivers fixed volume; measuring pipette variable volumes.",
        "Burette used in titration, delivers solution dropwise until endpoint.",
        "Volumetric flask is TC glassware for preparing solutions.",
        "Steps: dissolve solute, transfer, rinse, fill to mark, mix, store.",
        "Chemicals corrode pan; always use containers.",
        "Hot objects cause convection currents, unstable readings.",
        "Parallax error occurs when eye not level with meniscus.",

        // Handling Numbers
        "Accuracy = closeness to true value; precision = reproducibility.",
        "Uncertainty arises because instruments have finite resolution.",
        "Significant figures are digits conveying meaningful measurement information.",
        "Rules: nonzero digits significant; sandwich zeros significant; leading zeros not; trailing zeros significant if decimal present.",
        "Round: 4 and below drop, 5 and above round up.",
        "Addition/subtraction: round to least decimal places.",
        "Multiplication/division: round to least significant figures.",
        "Calculated answers cannot exceed precision of measurements.",
        "Sandwich zeros example: 7003 has 4 sig figs.",
       "Trailing zeros rule: 100.000 has 6 sig figs; 500 has 1 sig fig if no decimal, 500. has 3 sig figs."
    ];


    let score = 0;

    for (let i = 0; i < anachemQuestions.length; i++) {

        const { value: userAnswer } = await Swal.fire({
            title: anachemQuestions[i],
            input: "text",
            inputPlaceholder: "Type your answer...",
            confirmButtonText: "Submit",
            allowOutsideClick: true
        });

        if (!userAnswer) {
            await Swal.fire("Please enter an answer!");
            i--;
            continue;
        }

        const formattedUserAnswer = userAnswer.trim().toLowerCase();
        const correctAnswer = anachemAnswers[i].toLowerCase();

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
                text: `Correct answer: ${anachemAnswers[i]}`
            });
        }
    }

    await Swal.fire(`Quiz Finished! Your score: (${score}/${anachemQuestions.length}) I love youuuu`);
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