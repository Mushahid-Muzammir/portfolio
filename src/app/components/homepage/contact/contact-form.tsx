"use client";
import { isValidEmail } from "@/../utils/check-email";
import axios from "axios";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

export default function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({ name: "", email: "", message: "" });

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userInput.name || !userInput.email || !userInput.message) {
      setError({ ...error, required: true });
      return;
    }
    if (error.email) return;

    try {
      setIsLoading(true);
      await axios.post(`${process.env.NEXT_PUBLIC_APP_URL}/api/contact`, userInput);
      toast.success("✅ Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send message. Try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSendMail} className="bg-[#10172d] border border-[#353a52] rounded-lg p-6 shadow-xl">
      <label className="block mb-1">Name</label>
      <input
        className="bg-[#0c1227] border border-[#353a52] rounded-md w-full px-3 py-2 mb-4 focus:border-[#16f2b3] outline-none transition"
        placeholder="Your name"
        value={userInput.name}
        onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
      />

      <label className="block mb-1">Email</label>
      <input
        className="bg-[#0c1227] border border-[#353a52] rounded-md w-full px-3 py-2 mb-4 focus:border-[#16f2b3] outline-none transition"
        value={userInput.email}
        onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
        onBlur={() => setError({ ...error, email: !isValidEmail(userInput.email) })}
        placeholder="you@example.com"
      />
      {error.email && <p className="text-red-400 text-sm mb-2">Enter a valid email</p>}

      <label className="block mb-1">Message</label>
      <textarea
        className="bg-[#0c1227] border border-[#353a52] rounded-md w-full px-3 py-2 h-28 focus:border-[#16f2b3] outline-none transition"
        value={userInput.message}
        onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
        placeholder="Tell me about your needs..."
      />

      {error.required && <p className="text-red-400 text-sm mt-2">All fields are required</p>}

      <button
        disabled={isLoading}
        className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 rounded-md text-white py-3 font-semibold mt-5 hover:opacity-90 transition"
      >
        {isLoading ? "Sending..." : <>Send Message <TbMailForward /></>}
      </button>
    </form>
  );
}
