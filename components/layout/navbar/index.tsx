import Cart from 'components/cart';
import OpenCart from 'components/cart/open-cart';
import { Menu } from 'lib/shopify/types';
import Link from 'next/link';
import { Suspense } from 'react';
import MobileMenu from './mobile-menu';
const { SITE_NAME } = process.env;

export default async function Navbar() {
  const menu: any = [
    {
      title: 'Master',
      path: ''
    },
    {
      title: 'PhD',
      path: '2023'
    },
    {
      title: 'MBA',
      path: '2024'
    }
  ];

  return (
    <nav className="relative flex items-center justify-between p-4 lg:px-52">
      <div className="block flex-none md:hidden">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full justify-center md:w-1/3 md:justify-start">
          <Link href="/">
            <h1 className="mr-6 text-3xl font-bold leading-tight tracking-tighter text-blue-700/80 dark:text-blue-500">
              Dreamhacker.
            </h1>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          {/* <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense> */}
        </div>
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
  );
}
