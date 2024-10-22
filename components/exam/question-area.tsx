'use client';

import { Button, Field, Label, Radio, RadioGroup } from '@headlessui/react';
import { useWarnIfUnsavedChanges } from 'lib/leavehook';
import { useEffect, useState } from 'react';

const QuestionArea = ({ questions }: { questions: any[] }) => {
  const [curQues, setCurQues] = useState<number>(0);
  const [response, setResponse] = useState<any[]>(questions);

  useWarnIfUnsavedChanges(true);

  useEffect(() => {
    const handleBeforeUnload = (event: any) => {
      const message = 'You have unsaved changes. Are you sure you want to leave?';
      event.preventDefault();
      event.returnValue = message; // Standard for most browsers
      return message; // For older browsers
    };
    window.addEventListener('popstate', handleBeforeUnload);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center">
        <p className="mb-20 px-10 text-3xl text-blue-800">Question {curQues + 1}</p>
        {questions[curQues].type === 'choice' && (
          <MultipleChoice
            question={questions[curQues]}
            response={response}
            setResponse={setResponse}
            curQues={curQues}
          />
        )}
        {questions[curQues].type === 'free' && (
          <FreeResponse
            question={questions}
            response={response}
            setResponse={setResponse}
            curQues={curQues}
          />
        )}
        {questions[curQues].type === 'fill' && (
          <Fill
            question={questions}
            response={response}
            setResponse={setResponse}
            curQues={curQues}
          />
        )}
      </div>
      <div className="mt-10">
        <div className="flex gap-4">
          <Button
            onClick={() => setCurQues((prev) => (prev > 0 ? prev - 1 : prev))}
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
          >
            Back
          </Button>
          <Button
            onClick={() => setCurQues((prev) => (prev < questions.length - 1 ? prev + 1 : prev))}
            className="rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

function Fill({
  question,
  response,
  setResponse,
  curQues
}: {
  question: any;
  response: any[];
  setResponse: any;
  curQues: number;
}) {
  return (
    <div className="grid-row-2 grid w-full gap-10">
      <div className="rounded-xl bg-slate-200 p-4 text-2xl shadow-xl">
        {question[curQues].question}
      </div>
      <div className="flex justify-center">
        <textarea
          value={response[curQues].response ? response[curQues].response : ''}
          onChange={(val) => {
            setResponse((prev: any) => {
              const newResponse = [...prev];
              newResponse[curQues] = {
                ...newResponse[curQues],
                response: val.target.value
              };
              return newResponse;
            });
          }}
          rows={1}
          className="rounded-xl border-[1px] p-4 md:max-w-[50%]"
        />
      </div>
    </div>
  );
}

function FreeResponse({
  question,
  response,
  setResponse,
  curQues
}: {
  question: any;
  response: any[];
  setResponse: any;
  curQues: number;
}) {
  return (
    <div className="flex w-full flex-wrap gap-10">
      <div className="h-96 min-w-72 flex-1 rounded-xl bg-slate-200 p-4 text-2xl shadow-xl">
        {question[curQues].question}
      </div>
      <textarea
        value={response[curQues].response ? response[curQues].response : ''}
        onChange={(val) => {
          setResponse((prev: any) => {
            const newResponse = [...prev];
            newResponse[curQues] = {
              ...newResponse[curQues],
              response: val.target.value
            };
            return newResponse;
          });
        }}
        className="h-96 min-w-44 flex-1 rounded-xl border-[1px] p-4"
        placeholder="Answer"
      />
    </div>
  );
}

function MultipleChoice({
  question,
  response,
  setResponse,
  curQues
}: {
  question: any;
  response: any[];
  setResponse: any;
  curQues: number;
}) {
  return (
    <div className="mb-10 flex flex-col items-center gap-20">
      <div className="rounded-xl bg-slate-200 p-4 text-2xl shadow-xl lg:mx-32">
        {question.question}
      </div>
      <RadioGroup
        aria-label="Server size"
        className="flex flex-col gap-8"
        value={response[curQues].response ? response[curQues].response : null}
        onChange={(val) => {
          setResponse((prev: any) => {
            const newResponse = [...prev];
            newResponse[curQues] = {
              ...newResponse[curQues],
              response: val
            };
            return newResponse;
          });
        }}
      >
        {question.answer.map((answer: any, idx: number) => (
          <Field key={idx} className="flex items-center gap-2">
            <Radio
              value={answer.content}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-slate-400"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label className={'text-xl'}>{answer.content}</Label>
          </Field>
        ))}
      </RadioGroup>
    </div>
  );
}

export default QuestionArea;
