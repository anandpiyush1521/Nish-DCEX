"use client";

import { signIn, useSession } from "next-auth/react";
import { SecondaryButton } from "./Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
        <div className="hero-container">
            {/* Bold, Animated Background */}
            <div className="background-image"></div>

            {/* Animated Greeting */}
            <motion.div
                className="text-5xl font-extrabold text-center hero-text"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <span>{greeting}</span>
                <motion.span
                    className="block pt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    Welcome to the Indie Cryptocurrency
                </motion.span>
                <motion.span
                    className="text-yellow-300 pl-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    Revolution
                </motion.span>
            </motion.div>

            {/* Subtitle */}
            <motion.div
                className="subtitle"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ transform: "translateX(-10%)" }}
            >
                Create a frictionless wallet from India with just a Google Account.
            </motion.div>
            <motion.div
                className="subtitle"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                style={{ transform: "translateX(10%)" }}
            >
                Convert your INR into cryptocurrency effortlessly.
            </motion.div>

            {/* Call-to-Action Button */}
            <motion.div
                className="pt-10 flex justify-center hero-button"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{ transform: "translateY(-20px)" }}
            >
                {session?.user ? (
                    <SecondaryButton
                        onClick={() => router.push("/dashboard")}
                        className="hover:scale-105 transition-transform duration-300"
                    >
                        Go to Dashboard
                    </SecondaryButton>
                ) : (
                    <SecondaryButton
                        onClick={() => signIn("google")}
                        className="hover:scale-105 transition-transform duration-300"
                    >
                        Login with Google
                    </SecondaryButton>
                )}
            </motion.div>

            <style jsx>{`
                .hero-container {
                    position: relative;
                    width: 100vw;
                    min-height: 100vh;
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    overflow: hidden;
                    color: white;
                    background: linear-gradient(135deg, #ff006e, #fb5607, #ffbe0b, #8338ec, #3a86ff);
                    background-size: 400% 400%;
                    animation: gradientShift 6s ease-in-out infinite;
                }

                .background-image {
                    position: absolute;
                    top: 0;
                    left: -30px; /* Shift to the left */
                    width: calc(100vw + 60px); /* Expand to compensate for the left shift */
                    height: 100vh;
                    background: linear-gradient(to right, #ff8a00, #e52e71, #9c1aff, #0078ff, #00f9ff);
                    background-size: 300% 300%;
                    animation: colorShift 8s ease-in-out infinite;
                    z-index: -1;
                    filter: brightness(0.7);
                }

                .hero-text {
                    margin-bottom: 40px; /* Shift upward */
                    transform: translateY(-30px); /* Shift further upward */
                }

                .subtitle {
                    color: #e2e8f0;
                    padding-top: 1rem;
                    font-size: 1.125rem;
                    max-width: 40rem;
                    margin: 0 auto;
                    transform: translateY(-10px); /* Shift upward */
                }

                .hero-button {
                    transform: translateY(-20px); /* Shift button upward */
                }

                @keyframes gradientShift {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                @keyframes colorShift {
                    0% {
                        background-position: 0% 0%;
                    }
                    50% {
                        background-position: 100% 100%;
                    }
                    100% {
                        background-position: 0% 0%;
                    }
                }
            `}</style>
        </div>
    );
};
