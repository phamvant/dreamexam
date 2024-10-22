import ExamPreviewCard from 'components/exam/preview-card';
import Footer from 'components/layout/footer';
import { exam_dummy } from 'dummy/exam-dummy';
import Image from 'next/image';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <div className="flex flex-col gap-10 rounded-xl lg:mx-52">
        <div className="mx-4 lg:mx-0">
          <div className="w-full overflow-x-auto rounded-xl pb-2 pt-1">
            <ul className="animate-carousel flex gap-4">
              {exam_dummy.map((product, i) => (
                <li
                  key={`${product.id}${i}`}
                  className="relative aspect-square h-[30vh] max-h-[200px] w-2/3 max-w-[475px] flex-none md:w-1/3"
                >
                  <Image
                    unoptimized={true}
                    width={1920}
                    height={900}
                    alt="mock"
                    src="/mock.jpg"
                    className="schet h-full flex-grow rounded-xl bg-white/80 object-cover shadow-lg"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" flex gap-4 rounded-xl bg-slate-100 p-5">
          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-10">
            {exam_dummy.map((exam, idx) => {
              return <ExamPreviewCard key={idx} exam={exam} />;
            })}
          </div>
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
