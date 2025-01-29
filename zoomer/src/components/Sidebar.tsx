'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import SliderToggle from '@/components/SliderToggle';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const [selected, setSelected] = useState("light");
  
  useEffect(() => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      setSelected(savedTheme);
      document.body.className = savedTheme + '-mode';
    }, [])

     
        useEffect(() => {
        document.body.className = selected;
      }, [selected]);

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between  bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((items) => {
          const isActive = pathname === items.route || pathname.startsWith(`${items.route}/`);
          
          return (
            <Link
              href={items.route}
              key={items.label}
              className={cn(
                'flex gap-4 itemss-center p-4 rounded-lg justify-start',
                {
                  'bg-purple-1': isActive,
                  'hover:bg-purple-2': !isActive,
                  'text-black': isActive,
                  'hover:text-black': !isActive,
                }
              )}
            >
              <Image
                src={items.imgUrl}
                alt={items.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {items.label}
              </p>
            </Link>
          );
        })}
      <SliderToggle selected={selected} setSelected={setSelected} />
      </div>
      <div>

      </div>
    </section>
  );
};

export default Sidebar;
const sidebarLinks = [
    {
        label: 'Home',
        route: '/dashboard',
        imgUrl: 'icons/Home.svg',
    },
    {
        label: 'Upcoming',
        route: '/upcoming',
        imgUrl: 'icons/upcoming.svg',
    },
    {
        label: 'Previous',
        route: '/previous',
        imgUrl: 'icons/previous.svg',
    },
    {
        label: 'Recordings',
        route: '/recordings',
        imgUrl: 'icons/Video.svg',
    },
    {
        label: 'Personal Room',
        route: '/personal-room',
        imgUrl: 'icons/add-personal.svg',
    },
]


