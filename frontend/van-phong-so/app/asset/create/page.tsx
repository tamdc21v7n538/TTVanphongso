"use client";

import { useState } from "react";
import { addAsset } from "@/lib/assetService";
import { useRouter } from "next/navigation";

export default function CreateAsset() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  const handleAdd = () => {
    addAsset({
      id: Date.now().toString(),
      name,
      status,
    });

    router.push("/asset");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Tạo tài sản
      </h1>

      <input
        placeholder="Tên tài sản"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        placeholder="Trạng thái"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Thêm
      </button>
    </div>
  );
}