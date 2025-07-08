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
  },
  {
    topic: "Corporations",
    question: "What is the business judgment rule?",
    choices: [
      "A rule requiring courts to evaluate business decisions based on profitability",
      "A rule that protects directors from liability if they act in good faith and in the best interests of the corporation",
      "A requirement that all shareholder meetings are recorded",
      "A test used in partnership dissolution"
    ],
    answer: "A rule that protects directors from liability if they act in good faith and in the best interests of the corporation",
    explanation: "The business judgment rule shields corporate directors from liability when they make informed, good-faith decisions."
  },
  {
    topic: "Agency",
    question: "Which of the following is true about actual authority?",
    choices: [
      "It arises from a principal's conduct towards a third party",
      "It includes both express and implied authority",
      "It only exists if in writing",
      "It can never be terminated"
    ],
    answer: "It includes both express and implied authority",
    explanation: "Actual authority can be express (stated) or implied (arising from the conduct or situation)."
  }
];

  {
    topic: "Partnerships",
    question: "Which of the following is a distinguishing feature of a general partnership?",
    choices: [
      "Limited liability for all partners",
      "Formation requires filing with the state",
      "Each partner has equal management rights unless agreed otherwise",
      "It must be registered with the SEC"
    ],
    answer: "Each partner has equal management rights unless agreed otherwise",
    explanation: "In a general partnership, all partners have equal rights in the management of the business, unless the partnership agreement states otherwise."
  },
  {
    topic: "Conflict of Laws",
    question: "Under the vested rights approach, which state's law governs a tort claim?",
    choices: [
      "The state where the lawsuit is filed",
      "The state with the most significant relationship",
      "The state where the conduct and injury occurred",
      "The domicile of the defendant"
    ],
    answer: "The state where the conduct and injury occurred",
    explanation: "The vested rights approach applies the law of the place where the rights vested, typically where the conduct and injury both occurred."
  }

    ,
  {
    topic: "Real Property",
    question: "Which future interest is retained by a grantor when a life estate ends?",
    choices: [
      "Remainder",
      "Executory interest",
      "Reversion",
      "Fee simple subject to condition subsequent"
    ],
    answer: "Reversion",
    explanation: "A reversion is the future interest retained by a grantor when a life estate or lesser estate ends."
  },
  {
    topic: "Civil Procedure",
    question: "How many jurors are typically required to reach a verdict in federal civil trials?",
    choices: [
      "Unanimous verdict by 6 jurors",
      "Majority of 12 jurors",
      "Unanimous verdict by at least 6 jurors",
      "All jurors must agree regardless of number"
    ],
    answer: "Unanimous verdict by at least 6 jurors",
    explanation: "Federal civil trials require a unanimous verdict by at least 6 jurors (and no more than 12)."
  },
  {
    topic: "Wills and Estates",
    question: "What is the effect of a validly executed codicil?",
    choices: [
      "It revokes the entire will",
      "It creates a new will",
      "It amends or republishes the will",
      "It terminates all prior wills"
    ],
    answer: "It amends or republishes the will",
    explanation: "A codicil is a supplement that modifies or republishes an existing will without revoking it entirely."
  },
  {
    topic: "Agency",
    question: "What is apparent authority?",
    choices: [
      "Authority given directly to an agent by the principal",
      "Authority the agent assumes for convenience",
      "Authority a third party reasonably believes the agent has",
      "Authority delegated by the agent to another"
    ],
    answer: "Authority a third party reasonably believes the agent has",
    explanation: "Apparent authority arises when a third party reasonably believes the agent has authority, based on the principal’s conduct."
  },
  {
    topic: "Evidence",
    question: "Which of the following is a recognized exception to the hearsay rule?",
    choices: [
      "Statement of intent",
      "Excited utterance",
      "Statement of opinion",
      "Statement made to a police officer"
    ],
    answer: "Excited utterance",
    explanation: "An excited utterance is a statement relating to a startling event made while the declarant was under stress."
  },
  {
    topic: "Trusts",
    question: "What role does the trustee play in a trust?",
    choices: [
      "Creates the trust",
      "Holds and manages trust property for the benefit of the beneficiaries",
      "Inherits the property outright",
      "Oversees probate of the trust"
    ],
    answer: "Holds and manages trust property for the benefit of the beneficiaries",
    explanation: "The trustee has a fiduciary duty to manage and distribute trust property as directed by the terms of the trust."
  },
  {
    topic: "Corporations",
    question: "Which of the following best describes a derivative suit?",
    choices: [
      "A lawsuit by a creditor against a corporation",
      "A lawsuit by a shareholder on behalf of the corporation",
      "A lawsuit between two directors",
      "A lawsuit to dissolve the corporation"
    ],
    answer: "A lawsuit by a shareholder on behalf of the corporation",
    explanation: "A derivative suit allows shareholders to sue to enforce the corporation’s rights when the board fails to act."
  }
  ,
  {
    topic: "Conflict of Laws",
    question: "Which approach focuses on the state with the most significant relationship to the issue?",
    choices: [
      "Governmental interest analysis",
      "Vested rights approach",
      "Significant relationship test",
      "Lex loci delicti"
    ],
    answer: "Significant relationship test",
    explanation: "The Restatement (Second) of Conflict of Laws uses the significant relationship test to determine which state's law applies."
  },
  {
    topic: "Partnerships",
    question: "How is a general partnership taxed under federal law?",
    choices: [
      "As a separate legal entity",
      "As a corporation",
      "It is not taxed; income is passed through to the partners",
      "It pays state franchise taxes only"
    ],
    answer: "It is not taxed; income is passed through to the partners",
    explanation: "A general partnership is a pass-through entity; income is reported on each partner's individual tax return."
  },
  {
    topic: "Real Property",
    question: "Which deed provides the most protection to the grantee?",
    choices: [
      "Quitclaim deed",
      "Special warranty deed",
      "General warranty deed",
      "Bargain and sale deed"
    ],
    answer: "General warranty deed",
    explanation: "A general warranty deed guarantees title against all defects, even those arising before the grantor’s ownership."
  },
  {
    topic: "Civil Procedure",
    question: "When may a federal court hear a case based on diversity jurisdiction?",
    choices: [
      "Parties are from different countries",
      "The amount in controversy exceeds $50,000",
      "Parties are from different states and the amount in controversy exceeds $75,000",
      "Only when a federal question is involved"
    ],
    answer: "Parties are from different states and the amount in controversy exceeds $75,000",
    explanation: "Federal courts have diversity jurisdiction if parties are from different states and the amount in controversy exceeds $75,000."
  },
  {
    topic: "Trusts",
    question: "Which of the following terminates a trust?",
    choices: [
      "Death of a beneficiary",
      "Revocation by the settlor (if permitted)",
      "Change in trustee",
      "Loss of trust property"
    ],
    answer: "Revocation by the settlor (if permitted)",
    explanation: "A revocable trust may be terminated by the settlor if the terms of the trust allow it."
  },
  {
    topic: "Wills and Estates",
    question: "Which is a valid method for revoking a will?",
    choices: [
      "Giving oral instructions",
      "Writing a letter to the executor",
      "Physically destroying the document",
      "Changing the will's location"
    ],
    answer: "Physically destroying the document",
    explanation: "Revocation may occur by physical act, such as burning or tearing the will, with the intent to revoke it."
  },
  {
    topic: "Agency",
    question: "When is a principal liable for the torts of an agent?",
    choices: [
      "Only when the principal is negligent",
      "Only when the agent has actual authority",
      "When the tort is committed within the scope of employment",
      "When the agent acts outside the scope of duties"
    ],
    answer: "When the tort is committed within the scope of employment",
    explanation: "Under respondeat superior, an employer (principal) is liable for torts committed by employees acting within the scope of employment."
  },
  {
    topic: "Evidence",
    question: "Which is an example of character evidence not allowed to prove conduct?",
    choices: [
      "A witness's testimony about prior bad acts to show criminal tendency",
      "Evidence of motive",
      "Impeachment by prior conviction",
      "Statements to show intent"
    ],
    answer: "A witness's testimony about prior bad acts to show criminal tendency",
    explanation: "Character evidence is generally inadmissible to prove conduct unless an exception applies."
  },
  {
    topic: "Corporations",
    question: "What is piercing the corporate veil?",
    choices: [
      "Selling corporate stock to the public",
      "Holding shareholders personally liable for corporate debts",
      "Allowing mergers between unrelated corporations",
      "Requiring financial disclosure"
    ],
    answer: "Holding shareholders personally liable for corporate debts",
    explanation: "Piercing the corporate veil removes the limited liability protection of shareholders when the corporation is misused."
  },
  {
    topic: "Conflict of Laws",
    question: "Which doctrine prevents a state court from applying its own law arbitrarily?",
    choices: [
      "Due Process Clause",
      "Commerce Clause",
      "Full Faith and Credit Clause",
      "Supremacy Clause"
    ],
    answer: "Due Process Clause",
    explanation: "Under the Due Process Clause, a state must have significant contact with a case to apply its law."
  }
,
  {
    topic: "Agency",
    question: "Which of the following is a duty owed by an agent to a principal?",
    choices: [
      "Duty of reimbursement",
      "Duty of indemnification",
      "Duty of loyalty",
      "Duty of inspection"
    ],
    answer: "Duty of loyalty",
    explanation: "Agents owe fiduciary duties to their principals, including loyalty, obedience, and care."
  },
  {
    topic: "Conflict of Laws",
    question: "Under the governmental interest approach, what determines the applicable law?",
    choices: [
      "Where the plaintiff resides",
      "Where the lawsuit is filed",
      "Whether the state's policies would be advanced by application",
      "Where the contract was signed"
    ],
    answer: "Whether the state's policies would be advanced by application",
    explanation: "The governmental interest approach focuses on whether the forum or other states have an interest in applying their law."
  },
  {
    topic: "Corporations",
    question: "Which document typically initiates the creation of a corporation?",
    choices: [
      "Bylaws",
      "Operating agreement",
      "Articles of incorporation",
      "Shareholder agreement"
    ],
    answer: "Articles of incorporation",
    explanation: "Filing the articles of incorporation with the state creates the corporate entity."
  },
  {
    topic: "Partnerships",
    question: "Which of the following is a right of a partner in a general partnership?",
    choices: [
      "Right to transfer management rights without consent",
      "Right to a guaranteed salary",
      "Right to participate in management",
      "Right to limited liability"
    ],
    answer: "Right to participate in management",
    explanation: "Partners have the right to participate in management unless otherwise agreed."
  },
  {
    topic: "Trusts",
    question: "A resulting trust is most likely imposed when:",
    choices: [
      "A trust fails or is incomplete",
      "A settlor dies",
      "A beneficiary is changed",
      "A trustee breaches fiduciary duties"
    ],
    answer: "A trust fails or is incomplete",
    explanation: "A resulting trust arises by operation of law when an express trust fails or does not exhaust the trust property."
  },
  {
    topic: "Wills and Estates",
    question: "In most jurisdictions, what is required for a holographic will to be valid?",
    choices: [
      "It must be typed and notarized",
      "It must be signed and dated by the testator in their own handwriting",
      "It must be witnessed by two people",
      "It must be filed with the probate court"
    ],
    answer: "It must be signed and dated by the testator in their own handwriting",
    explanation: "A holographic will is handwritten, signed, and often dated by the testator. Witnesses are usually not required."
  },
  {
    topic: "Civil Procedure",
    question: "When must a defendant raise a lack of personal jurisdiction defense?",
    choices: [
      "Anytime before trial",
      "During jury selection",
      "In the first responsive pleading or motion",
      "After discovery"
    ],
    answer: "In the first responsive pleading or motion",
    explanation: "Personal jurisdiction objections are waived unless raised in the first Rule 12 motion or answer."
  },
  {
    topic: "Evidence",
    question: "What is the purpose of a limiting instruction?",
    choices: [
      "To dismiss the evidence from trial",
      "To explain the jury's role",
      "To instruct the jury to consider evidence only for a specific purpose",
      "To exclude irrelevant evidence"
    ],
    answer: "To instruct the jury to consider evidence only for a specific purpose",
    explanation: "A limiting instruction tells the jury to consider certain evidence only for specific issues, not for general purposes."
  },
  {
    topic: "Real Property",
    question: "Which of the following defeats a prior recorded interest?",
    choices: [
      "A quitclaim deed",
      "A subsequent purchaser without notice in a notice jurisdiction",
      "A lien from a judgment creditor",
      "A gift deed filed later"
    ],
    answer: "A subsequent purchaser without notice in a notice jurisdiction",
    explanation: "Under notice statutes, a subsequent BFP without notice prevails over a prior unrecorded interest."
  },
  {
    topic: "Agency",
    question: "How is an agency relationship created?",
    choices: [
      "Only by written contract",
      "Through a court order",
      "By agreement between principal and agent",
      "Only by corporate resolution"
    ],
    answer: "By agreement between principal and agent",
    explanation: "An agency relationship can arise through express or implied agreement between principal and agent."
  }
]

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
