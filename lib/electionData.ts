export const electionData = {
  generalInfo: {
    definition: "An election is a formal group decision-making process by which a population chooses an individual or multiple individuals to hold public office.",
    importance: "Voting is your democratic right and a way to have a say in how your country or local community is run."
  },
  india: {
    eligibility: {
      age: 18,
      citizenship: "Indian",
      requirements: [
        "Must be an Indian citizen.",
        "Must be 18 years of age or older on the qualifying date (usually Jan 1st of the year).",
        "Must be enrolled in the electoral roll of your constituency."
      ]
    },
    registrationSteps: [
      "Visit the official Voter Services Portal (voters.eci.gov.in).",
      "Fill out Form 6 for new voter registration.",
      "Upload a passport-sized photograph.",
      "Upload proof of age (e.g., Birth Certificate, 10th Standard Marksheet, PAN Card).",
      "Upload proof of residence (e.g., Aadhaar Card, Passport, Electricity Bill)."
    ],
    timeline: [
      { step: "Registration", description: "Voter roll update & registration phase.", status: "completed" },
      { step: "Nomination", description: "Candidates file their nominations.", status: "current" },
      { step: "Campaigning", description: "Candidates campaign in their constituencies.", status: "upcoming" },
      { step: "Voting Day", description: "Go to your polling booth and cast your vote.", status: "upcoming" },
      { step: "Results", description: "Counting of votes and declaration of results.", status: "upcoming" }
    ],
    votingDay: [
      "Find your polling booth using the Voter Helpline App or ECI website.",
      "Carry your Voter ID (EPIC) or an approved alternative ID (like Aadhaar, PAN, Passport).",
      "Stand in the queue and wait for your turn.",
      "The polling officer will verify your name and ID.",
      "Another officer will ink your finger, give you a slip, and take your signature.",
      "Proceed to the EVM (Electronic Voting Machine) and press the button next to your chosen candidate. A beep sound confirms your vote."
    ],
    faqs: [
      { question: "Can I vote online in India?", answer: "No, currently India does not have a provision for online voting for the general public. You must visit your designated polling booth." },
      { question: "What if I don't have a Voter ID card but my name is on the list?", answer: "You can still vote! You can use alternative photo IDs specified by the Election Commission, such as Aadhaar Card, PAN Card, Passport, or Driving License." },
      { question: "How do I check if my name is on the voter list?", answer: "You can search your name on the electoral roll through the official ECI portal (electoralsearch.eci.gov.in) using your details or EPIC number." }
    ]
  }
};
