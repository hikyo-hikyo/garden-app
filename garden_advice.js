class main {
    constructor() {
        this.advice = "";
        this.adviceDict = {};  // JavaScript object acting as dictionary
    }

    // Collecting user input with validation
    dataCollection() {
        let season = prompt("Enter the season, summer or winter:").trim().toLowerCase();

        if (season !== "summer" && season !== "winter") {
            alert("Error: Invalid season. Please enter 'summer' or 'winter'.");
            return null; // Stop execution
        }

        let plantType = prompt("Enter the type of plant, flower or vegetable:").trim().toLowerCase();

        if (plantType !== "flower" && plantType !== "vegetable") {
            alert("Error: Invalid plant type. Please enter 'flower' or 'vegetable'.");
            return null;
        }

        return { season, plantType };
    }

    // Generate advice based on inputs
    generateAdvice(season, plantType) {
        this.advice = "";  // Reset advice

        if (season === "summer") {
            this.advice += "Water your plants regularly and provide some shade.\n";
        } else if (season === "winter") {
            this.advice += "Protect your plants from frost with covers.\n";
        } else {
            this.advice += "No advice for this season.\n";
        }

        if (plantType === "flower") {
            this.advice += "Use fertiliser to encourage blooms.";
        } else if (plantType === "vegetable") {
            this.advice += "Keep an eye out for pests!";
        } else {
            this.advice += "No advice for this type of plant.";
        }

        return this.advice;
    }

    // Store advice in dictionary/object
    storeAdvice(season, plantType, advice) {
        const key = `${season}_${plantType}`;
        this.adviceDict[key] = advice;
    }

    // Show all stored advice
    showAllAdvice() {
        if (Object.keys(this.adviceDict).length === 0) {
            console.log("No advice stored yet.");
            return;
        }

        console.log("\n=== All Stored Advice ===");
        for (const [key, adv] of Object.entries(this.adviceDict)) {
            const displayKey = key.replace("_", " - ");
            console.log(`${displayKey}:`);
            console.log(`   ${adv}`);
            console.log("-".repeat(40));
        }
    }
}

//  Run the program 
const advisor = new main();

const result = advisor.dataCollection();

if (result) {
    const { season, plantType } = result;
    
    const advice = advisor.generateAdvice(season, plantType);
    
    advisor.storeAdvice(season, plantType, advice);
    
    console.log(advice);           // Print current advice
    advisor.showAllAdvice();       // Show all stored advice
}