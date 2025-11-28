"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { db, storage, auth } from "@/utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useRouter } from "next/navigation";

type ProjectFormData = {
  title: string;
  link: string;
  githubLink?: string;
  description: string;
};

const ProjectUploadForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProjectFormData>();
  const [loading, setLoading] = useState(false);
  const [pcImage, setPcImage] = useState<File | null>(null);
  const [mobileImage, setMobileImage] = useState<File | null>(null);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const router = useRouter();

  const onSubmit = async (data: ProjectFormData) => {
    if (!auth.currentUser || auth.currentUser.email !== "danielagbeni12@gmail.com") {
      setStatus({ type: 'error', message: "Unauthorized: You must be logged in as admin." });
      return;
    }

    if (!pcImage) {
      setStatus({ type: 'error', message: "PC Image is required." });
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      // Upload PC Image
      const pcStorageRef = ref(storage, `projects/${Date.now()}_pc_${pcImage.name}`);
      await uploadBytes(pcStorageRef, pcImage);
      const pcImageUrl = await getDownloadURL(pcStorageRef);

      // Upload Mobile Image (Optional)
      let mobileImageUrl = "";
      if (mobileImage) {
        const mobileStorageRef = ref(storage, `projects/${Date.now()}_mobile_${mobileImage.name}`);
        await uploadBytes(mobileStorageRef, mobileImage);
        mobileImageUrl = await getDownloadURL(mobileStorageRef);
      }

      // Save to Firestore
      await addDoc(collection(db, "projects"), {
        ...data,
        pcimg: pcImageUrl,
        mobileimg: mobileImageUrl,
        createdAt: new Date(),
        id: Date.now(), // Using timestamp as simple ID for now, or let Firestore generate ID
      });

      setStatus({ type: 'success', message: "Project uploaded successfully!" });
      reset();
      setPcImage(null);
      setMobileImage(null);
    } catch (error: any) {
      console.error("Error uploading project:", error);
      setStatus({ type: 'error', message: error.message || "Failed to upload project." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-lg bg-gray-800 p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">Upload New Project</h2>
      
      {status && (
        <div className={`mb-4 rounded p-3 ${status.type === 'success' ? 'bg-green-600' : 'bg-red-600'} text-white`}>
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-400">Project Title</label>
          <input
            {...register("title", { required: "Title is required" })}
            className="w-full rounded bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="My Awesome Project"
          />
          {errors.title && <p className="text-sm text-red-500">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-400">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            rows={4}
            className="w-full rounded bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of the project..."
          />
          {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-400">Live Link</label>
            <input
              {...register("link", { required: "Live link is required" })}
              className="w-full rounded bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
            {errors.link && <p className="text-sm text-red-500">{errors.link.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">GitHub Link (Optional)</label>
            <input
              {...register("githubLink")}
              className="w-full rounded bg-gray-700 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        {/* Images */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-400">PC Image (Required)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setPcImage(e.target.files?.[0] || null)}
              className="w-full text-gray-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">Mobile Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setMobileImage(e.target.files?.[0] || null)}
              className="w-full text-gray-400 file:mr-4 file:rounded file:border-0 file:bg-gray-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-gray-500"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full rounded py-3 font-bold text-white transition ${
            loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Uploading...' : 'Upload Project'}
        </button>
      </form>
    </div>
  );
};

export default ProjectUploadForm;
