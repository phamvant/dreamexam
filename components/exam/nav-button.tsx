'use client';

import { Button } from '@headlessui/react';

export default function ExamNavButton() {
  return (
    <div className="flex gap-4">
      <Button className=" rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500">
        Back
      </Button>
      <Button className=" rounded-xl bg-sky-600 px-4 py-2 text-sm text-white transition-colors duration-200 data-[active]:bg-sky-700 data-[hover]:bg-sky-500">
        Next
      </Button>
    </div>
  );
}
