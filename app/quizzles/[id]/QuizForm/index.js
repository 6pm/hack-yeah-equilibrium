import React, { useState } from "react";
import { Checkbox, Divider, Button } from "@nextui-org/react";
import { arraysAreEqual } from './utils'
import { submitQuiz } from '@/app/lib/backend'
import Group from "./Group";


function formatAnswer(correctAnswer) {
  return `answer${correctAnswer.replace("a", "_")}`;
}

const Quiz = ({ quiz }) => {
  const [ans1] = useState(quiz.quiz_questions[0]);
  const [ans2] = useState(quiz.quiz_questions[1]);
  const [ans3] = useState(quiz.quiz_questions[2]);
  const [ans4] = useState(quiz.quiz_questions[3]);
  const [submitted, setSubmitted] = useState(false);
  const [ans1Correct, setAns1Correct] = useState(false);
  const [ans2Correct, setAns2Correct] = useState(false);
  const [ans3Correct, setAns3Correct] = useState(false);
  const [ans4Correct, setAns4Correct] = useState(false);

  const handleSubmit = async () => {
    const allCorrect = [ans1Correct, ans2Correct, ans3Correct, ans4Correct].every(Boolean)
    setSubmitted(true)

    if (allCorrect) {
      const res = await submitQuiz(quiz.point_award)
      alert(`Congratulations! You just received ${quiz.point_award} coins 🥳`)
      console.log('send request', res)
    }
  };

  return (
    <>
      <Divider />
      <Group answer={ans1} submitted={submitted} setCorrect={setAns1Correct} />
      <Group answer={ans2} submitted={submitted} setCorrect={setAns2Correct} />
      <Group answer={ans3} submitted={submitted} setCorrect={setAns3Correct} />
      <Group answer={ans4} submitted={submitted} setCorrect={setAns4Correct} />

      <Button
        onClick={handleSubmit}
        size="lg"
        // color={disabledSubmit ? 'default' : 'primary'}
        color={'primary'}
        className="font-bold py-2 px-4 rounded my-6"
      >
        Submit
      </Button>
    </>
  )



  // const disabledSubmit = Object.keys(answers).length !== 4

  // const checkAllCorrect = () => {
  //   const arr1 = Object.values(answers).map((i) => i.replace("nswer_", ""))
  //   const arr2 = quiz.quiz_questions.map((i) => i.correct_answer_key)
  //   console.log(
  //     "answers",
  //     arr1, arr2,
  //     arraysAreEqual(arr1, arr2)
  //   );

  //   return arraysAreEqual(arr1, arr2)
  // };
  // const handleAnswer = (questionId, answerKey) => {
  //   const updatedAnswers = {
  //     ...answers,
  //     [questionId]: answerKey,
  //   };
  //   setAnswers(updatedAnswers);

  //   setIncrement(prev => prev + 1);
  // };

 

  // return (
  //   <div className="p-4">
  //     {/* <span>{answerIncrement}</span> */}
  //     {quiz.quiz_questions.map((q) => {
  //       return (
  //         <div key={q.id} className="mb-4">
  //           <p className="font-bold mb-2">{q.question_text}</p>
  //           {["answer_1", "answer_2", "answer_3", "answer_4"].map(
  //             (answerKey, index) => {
  //               const isSelected = answers[q.id]?.key === answerKey;
  //               const isCorrectAnswer =
  //                 formatAnswer(q.correct_answer_key) === answerKey;

  //               let bgColor = "";
  //               if (submitted && isSelected && isCorrectAnswer)
  //                 bgColor = "bg-green-200";
  //               if (submitted && isSelected && !isCorrectAnswer)
  //                 bgColor = "bg-red-200";

  //               return (
  //                 <div key={`${answerKey}-${index}`} className={bgColor}>
  //                   <Checkbox
  //                     checked={answers[q.id] === answerKey}
  //                     disabled={submitted}
  //                     onChange={() => {
  //                       handleAnswer(q.id, answerKey)
  //                     }}
  //                   >
  //                     {q[answerKey]}
  //                   </Checkbox>
  //                   {submitted && isCorrectAnswer && (
  //                     <span className="ml-2 text-green-500">✓</span>
  //                   )}
  //                 </div>
  //               );
  //             }
  //           )}

  //           <Divider className="my-4" />
  //         </div>
  //       );
  //     })}


  //     <Button
  //       onClick={handleSubmit}
  //       // color={disabledSubmit ? 'default' : 'primary'}
  //       color={'primary'}
  //       className="font-bold py-2 px-4 rounded"
  //       // isDisabled={disabledSubmit}
  //     >
  //       Submit
  //     </Button>
  //   </div>
  // );
};

export default Quiz;
