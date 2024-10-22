import { Button } from '@headlessui/react';

export default function ExamPreviewCard({ exam }: { exam: any }) {
  return (
    <div className="flex h-fit flex-col gap-2 rounded-xl bg-white p-4 shadow-lg">
      <p className="line-clamp-1 font-bold">{exam.name}</p>
      <span>Thời gian: {exam.time_limit}</span>
      <p>Số câu: {exam.number_of_question}</p>
      <p>Số tham gia: {exam.taken}</p>

      <a href={`/exam/${exam.id}`} target="_blank">
        <Button className="w-full rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500">
          Tham gia
        </Button>
      </a>
    </div>
  );
}
