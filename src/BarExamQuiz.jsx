import { useState } from "react";

const questionPool = [
  {
    topic: "Real Property",
    question: "Which interest survives the death of a joint tenant?",
    choices: [
      "Fee simple absolute",
      "Tenancy in common",
      "Joint tenancy with right of survivorship",
      "Life estate"
    ],
    answer: "Joint tenancy with right of survivorship",
    explanation: "Joint tenancy includes the right of survivorship, so the interest passes to the other joint tenant(s)."
  },
  {
    topic: "Civil Procedure",
    question: "What is the standard for granting a summary judgment under the Federal Rules?",
    choices: [
      "There is no dispute as to any material fact and the movant is entitled to judgment as a matter of law.",
      "The complaint fails to state a claim.",
      "The facts are in dispute.",
      "The judge disagrees with the jury verdict."
    ],
    answer: "There is no dispute as to any material fact and the movant is entitled to judgment as a matter of law.",
    explanation: "Summary judgment is granted when there are no material facts in dispute and the moving party is entitled to judgment as a matter of law."
  },
  {
    topic: "Evidence",
    question: "Under the Federal Rules of Evidence, which is not considered hearsay?",
    choices: [
      "A statement offered to prove the truth of the matter asserted.",
      "A statement made by a party opponent.",
      "A statement made out of court to prove what it asserts.",
      "An out-of-court confession introduced for its truth."
    ],
    answer: "A statement made by a party opponent.",
    explanation: "Statements by party opponents are admissions and are not hearsay under the FRE."
  },
  {
    topic: "Trusts",
    question: "What is a requirement for a valid express trust?",
    choices: [
      "Court approval",
      "Written declaration",
      "Trust property",
      "Government registration"
    ],
    answer: "Trust property",
    explanation: "A valid trust must have identifiable trust property, a settlor with intent, and a beneficiary."
  },
  {
    topic: "Wills and Estates",
    question: "Which of the following most likely invalidates a will?",
    choices: [
      "Signed in the presence of two witnesses",
      "Self-proving affidavit",
      "Testator under undue influence",
      "Handwritten holographic will"
    ],
    answer: "Testator under undue influence",
    explanation: "A will is invalid if obtained through undue influence, fraud, or coercion."
  }
];

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-200">
    {children}
  </div>
);

const CardContent = ({ children }) => <div>{children}</div>;

const Button = ({ children, onClick, disabled, className = "" }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-5 py-3 rounded-xl w-full text-left border transition hover:bg-blue-50 ${className}`}
  >
    {children}
  </button>
);

export default function BarExamQuiz() {
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const filteredQuestions =
    selectedTopic === "All"
      ? questionPool
      : questionPool.filter((q) => q.topic === selectedTopic);

  const current = filteredQuestions[currentIndex % filteredQuestions.length];

  const handleChoice = (choice) => {
    setSelected(choice);
    setShowAnswer(true);
    if (choice === current.answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1));
  };

  const uniqueTopics = ["All", ...new Set(questionPool.map((q) => q.topic))];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-10">
          Bar Exam Quiz Practice
        </h1>

        <div className="mb-8">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Topic:
          </label>
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setCurrentIndex(0);
              setScore(0);
              setSelected(null);
              setShowAnswer(false);
            }}
            className="w-full border border-gray-300 p-3 rounded-lg text-base"
          >
            {uniqueTopics.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <Card>
          <CardContent>
            <p className="text-sm text-gray-500">[{current.topic}]</p>
            <h2 className="text-2xl font-semibold mb-6 leading-snug">
              {current.question}
            </h2>
            <div className="space-y-3">
              {current.choices.map((choice, idx) => (
                <Button
                  key={idx}
                  className={
                    selected === choice
                      ? "bg-blue-100 border-blue-300"
                      : "border-gray-300"
                  }
                  onClick={() => handleChoice(choice)}
                  disabled={showAnswer}
                >
                  {choice}
                </Button>
              ))}
            </div>
            {showAnswer && (
              <div className="mt-6">
                <p className="text-lg font-bold">
                  {selected === current.answer ? "✅ Correct!" : "❌ Incorrect."}
                </p>
                <p className="mt-2 text-sm text-gray-700">
                  Explanation: {current.explanation}
                </p>
                <Button
                  className="mt-4 bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                  onClick={handleNext}
                >
                  Next Question
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-base text-gray-600">
          Score: {score} / {currentIndex + 1}
        </p>
      </div>
    </div>
  );
}
