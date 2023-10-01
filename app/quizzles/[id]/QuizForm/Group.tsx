import React, { useEffect, useState } from "react";

import { RadioGroup, Radio, Divider } from "@nextui-org/react";

type Props = {
  answer: any;
  submitted: boolean;
  setCorrect: Function;
};

export default function Group({ answer, submitted, setCorrect }: Props) {
  const [selected, setSelected] = useState(undefined);
  const [correctAnswer, setCorrectAnswer] = useState(undefined);

  useEffect(() => {
    const result = answer.correct_answer_key.replace("a", "answer_");
    setCorrectAnswer(result);
  }, []);

  const onChange = (val: any) => {
    setSelected(val);

    setCorrect(val === correctAnswer);
  };

  return (
    <div className="flex flex-col gap-3 my-4">
      <RadioGroup
        label={answer.question_text}
        value={selected}
        onValueChange={onChange}
      >
        <Radio value="answer_1">{answer["answer_1"]}</Radio>
        <Radio value="answer_2">{answer["answer_2"]}</Radio>
        <Radio value="answer_3">{answer["answer_3"]}</Radio>
        <Radio value="answer_4">{answer["answer_4"]}</Radio>
      </RadioGroup>
      {submitted && correctAnswer && (
        <p className="text-red-500 text-small">
          Correct answer: {answer[correctAnswer]}
        </p>
      )}

      <Divider />
    </div>
  );
}
