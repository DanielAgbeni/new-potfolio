"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ProjectUploadForm from "@/components/ProjectUploadForm";

const UploadPage = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.email === "danielagbeni12@gmail.com") {
        setAuthorized(true);
      } else {
        router.push("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-950 text-text-50">
        Loading...
      </div>
    );
  }

  if (!authorized) {
    return null; // Will redirect
  }

  return (
    <div className="min-h-screen bg-background-950 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <ProjectUploadForm />
      </div>
    </div>
  );
};

export default UploadPage;
