"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { projects } from "@/data/projects";

const MigratePage = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [migrating, setMigrating] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
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

  const handleMigration = async () => {
    setMigrating(true);
    setLogs([]);
    let successCount = 0;

    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      try {
        // Create a document ID based on the existing ID
        const docId = project.id.toString();
        
        // Stagger timestamps so they sort correctly (newest first usually, so we might want to reverse or just use index)
        // Assuming the list is currently in the order we want (or reverse). 
        // Let's just give them current time - index seconds to keep relative order if sorted by time.
        const createdAt = new Date(Date.now() - i * 1000);

        await setDoc(doc(db, "projects", docId), {
          ...project,
          createdAt: createdAt,
          // Ensure optional fields are handled if they might be undefined in source (though they seem defined in data/projects.ts)
        });

        setLogs(prev => [...prev, `✅ Migrated: ${project.title}`]);
        successCount++;
      } catch (error: any) {
        console.error(error);
        setLogs(prev => [...prev, `❌ Failed: ${project.title} - ${error.message}`]);
      }
    }

    setLogs(prev => [...prev, `🏁 Migration Complete. ${successCount}/${projects.length} projects migrated.`]);
    setMigrating(false);
  };

  if (loading) return <div className="p-10 text-white">Loading...</div>;
  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Migrate Projects to Firebase</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <p className="mb-4 text-gray-300">
            Found <strong>{projects.length}</strong> hardcoded projects in <code>data/projects.ts</code>.
            Click below to upload them to Firestore.
          </p>
          
          <button
            onClick={handleMigration}
            disabled={migrating}
            className={`w-full py-3 px-6 rounded font-bold transition ${
              migrating 
                ? "bg-gray-600 cursor-not-allowed" 
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {migrating ? "Migrating..." : "Start Migration"}
          </button>
        </div>

        <div className="bg-black p-4 rounded border border-gray-700 h-96 overflow-y-auto font-mono text-sm">
          {logs.length === 0 ? (
            <span className="text-gray-500">Waiting to start...</span>
          ) : (
            logs.map((log, idx) => (
              <div key={idx} className="mb-1">{log}</div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MigratePage;
