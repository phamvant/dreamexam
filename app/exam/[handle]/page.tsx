import { Suspense } from 'react';

import QuestionArea from 'components/exam/question-area';
import Footer from 'components/layout/footer';

export const runtime = 'edge';

// export async function generateMetadata({
//   params
// }: {
//   params: { handle: string };
// }): Promise<Metadata> {
//   const product = await getProduct(params.handle);

//   if (!product) return notFound();

//   const { url, width, height, altText: alt } = product.featuredImage || {};
//   const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

//   return {
//     title: product.seo.title || product.title,
//     description: product.seo.description || product.description,
//     robots: {
//       index: indexable,
//       follow: indexable,
//       googleBot: {
//         index: indexable,
//         follow: indexable
//       }
//     },
//     openGraph: url
//       ? {
//           images: [
//             {
//               url,
//               width,
//               height,
//               alt
//             }
//           ]
//         }
//       : null
//   };
// }

export default async function ProductPage({ params }: { params: { handle: string } }) {
  // const product = await getProduct(params.handle);

  // if (!product) return notFound();

  // const productJsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: product.title,
  //   description: product.description,
  //   image: product.featuredImage.url,
  //   offers: {
  //     '@type': 'AggregateOffer',
  //     availability: product.availableForSale
  //       ? 'https://schema.org/InStock'
  //       : 'https://schema.org/OutOfStock',
  //     priceCurrency: product.priceRange.minVariantPrice.currencyCode,
  //     highPrice: product.priceRange.maxVariantPrice.amount,
  //     lowPrice: product.priceRange.minVariantPrice.amount
  //   }
  // };

  const testContent: any[] = [
    {
      id: 2,
      question:
        'future union pilot railroad _____ announced kids trail themselves observe space lose he behavior characteristic useful ten chose situation center furniture accept over distance',
      type: 'fill'
    },
    {
      id: 3,
      question:
        'future union pilot railroad mirror announced kids trail themselves observe space lose he behavior characteristic useful ten chose situation center furniture accept over distance',
      type: 'free'
    },
    {
      id: 0,
      question:
        'Goes pain whale iron vertical occasionally almost means red curve escape plan barn officer very nails cook wool kids library idea kill noon sense diagram stretch piano mile damage feet sang inside skin constantly gift beside secret physical contain tell believed lay subject label row past coming pour',
      type: 'choice',
      answer: [
        { content: 'Samoa' },
        { content: 'Turkey' },
        { content: 'Laos' },
        { content: 'Japan' }
      ]
    },
    {
      id: 1,
      question:
        'mighty science trick fear century garage well excited typical explore central skin seems any drive actually money winter child glad sets tent did printed',
      type: 'choice',
      answer: [
        { content: 'Bangladesh' },
        { content: 'Brazil' },
        { content: 'Marshall Islands' },
        { content: 'Venezuela' }
      ]
    }
  ];

  return (
    <>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className="relative h-fit rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <QuestionArea questions={testContent} />
        </div>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
