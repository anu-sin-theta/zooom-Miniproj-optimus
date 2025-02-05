"use client";
import { SignIn } from '@clerk/nextjs';
import { SignUp } from '@clerk/nextjs';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import HomeCard from '@/components/HomeCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LandingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      router.push('/');
    }
  }, [isLoaded, user, router]);

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-2 text-white">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <h1 className="text-4xl font-extrabold mb-6">Welcome to Zoomer</h1>
        <p className="text-lg text-center mb-10 max-w-2xl">
          By Anubhav and Team || Zoom Clone App
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          <HomeCard
            img="/icons/sign-in.svg"
            title="Sign In"
            description="Already have an account? Sign in to continue."
            handleClick={() => router.push('/sign-in')}
          />
          <HomeCard
            img="/icons/sign-up.svg"
            title="Sign Up"
            description="New here? Sign up to create an account."
            handleClick={() => router.push('/sign-up')}
          />
          <HomeCard
            img="/icons/meeting.svg"
            title="Join Meeting"
            description="Join an existing meeting by entering the meeting ID."
            handleClick={() => router.push('/meeting')}
          />
          <HomeCard
            img="/icons/schedule.svg"
            title="Schedule Meeting"
            description="Schedule a new meeting with your team."
            handleClick={() => router.push('/schedule')}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
