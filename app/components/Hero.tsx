"use client";

import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Hero = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const hour = new Date().getHours();
        if (hour < 12) {
            setGreeting("Good Morning,");
        } else if (hour < 18) {
            setGreeting("Good Afternoon,");
        } else {
            setGreeting("Good Evening,");
        }
    }, []);

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-10 rounded-lg shadow-lg min-h-screen w-full flex flex-col justify-center items-center">
            <div className="text-5xl font-extrabold">
                <span>{greeting}</span>
                <span className="block pt-2">Welcome to the Indie Cryptocurrency</span>
                <span className="text-yellow-300 pl-2">Revolution</span>
            </div>
            <div className="flex justify-center pt-6 text-lg text-slate-200">
                Create a frictionless wallet from India with just a Google Account.
            </div>
            <div className="flex justify-center pt-2 text-lg text-slate-200">
                Convert your INR into cryptocurrency effortlessly.
            </div>
            <div className="pt-10 flex justify-center">
                {session?.user ? (
                    <SecondaryButton onClick={() => router.push("/dashboard")}>
                        Go to Dashboard
                    </SecondaryButton>
                ) : (
                    <SecondaryButton onClick={() => signIn("google")}>
                        Login with Google
                    </SecondaryButton>
                )}
            </div>
        </div>
    );
};
