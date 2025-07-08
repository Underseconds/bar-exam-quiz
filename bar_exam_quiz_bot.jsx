import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questionPool = [
  {
    topic: "Real Property",
    question:
      "A trespasser has possessed land openly and notoriously for 10 years in a state with a 15-year adverse possession statute. What is the legal status of the trespasser’s claim?",
    choices: [
      "The trespasser has gained legal title.",
      "The trespasser may claim ownership if the true owner is absent.",
      "The trespasser cannot claim ownership yet.",
      "The claim is valid if the trespasser paid taxes."
    ],
    answer: "The trespasser cannot claim ownership yet.",
    explanation:
      "The statutory period of 15 years has not yet passed, so title has not vested."
  },
  {
    topic: "Evidence",
    question:
      "Under the Federal Rules of Evidence, which of the following is NOT considered hearsay?",
    choices: [
      "A statement made by the defendant to a friend.",
      "A statement offered to show its effect on the listener.",
      "A statement offered to prove the truth of the matter asserted.",
      "A witness's prior consistent statement offered to prove the truth."
    ],
    answer: "A statement offered to show its effect on the listener.",
    explanation:
      "Statements used to show their effect on the listener are not hearsay because they are not offered for the truth of the matter asserted."
  }
  // More questions will be added from a large dataset
];

export default function BarExamQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const current = questionPool[currentIndex];

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
    setCurrentIndex((prev) => (prev + 1) % questionPool.length);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bar Exam Quiz Practice</h1>
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-gray-500 mb-2">[{current.topic}]</p>
          <h2 className="text-xl font-semibold mb-4">{current.question}</h2>
          <div className="space-y-2">
            {current.choices.map((choice, idx) => (
              <Button
                key={idx}
                className="w-full"
                variant={selected === choice ? "secondary" : "outline"}
                onClick={() => handleChoice(choice)}
                disabled={showAnswer}
              >
                {choice}
              </Button>
            ))}
          </div>
          {showAnswer && (
            <div className="mt-4">
              <p className="text-lg font-bold">
                {selected === current.answer ? "✅ Correct!" : "❌ Incorrect."}
              </p>
              <p className="mt-1 text-sm text-gray-700">
                Explanation: {current.explanation}
              </p>
              <Button className="mt-4" onClick={handleNext}>
                Next Question
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      <p className="mt-6 text-center text-sm text-gray-600">
        Score: {score} / {currentIndex + 1}
      </p>
    </div>
  );
}
