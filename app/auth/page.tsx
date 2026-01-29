"use client";

import { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/admin/upload");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/upload");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background-950 px-4">
      <div className="w-full max-w-md rounded-lg bg-background-900 p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-text-50">Admin Login</h2>
        
        {error && <p className="mb-4 text-center text-red-500">{error}</p>}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded bg-background-800 p-2 text-text-50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-background-800 p-2 text-text-50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary-500 py-2 font-bold text-background-950 hover:bg-primary-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="my-4 flex items-center justify-between">
          <hr className="w-full border-background-700" />
          <span className="px-2 text-text-300">OR</span>
          <hr className="w-full border-background-700" />
        </div>

        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-2 rounded bg-text-50 py-2 font-bold text-background-950 hover:bg-text-100 transition"
        >
          <FcGoogle size={24} /> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
