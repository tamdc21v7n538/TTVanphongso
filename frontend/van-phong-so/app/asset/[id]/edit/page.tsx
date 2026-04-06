"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAssetById, updateAsset } from "@/lib/assetService";

export default function EditAsset({ params }: { params: { id: string } }) {
  const router = useRouter();
  const asset = getAssetById(params.id);

  const [name, setName] = useState(asset?.name || "");
  const [status, setStatus] = useState(asset?.status || "");

  if (!asset) return <div>Không tìm thấy tài sản</div>;

  const handleUpdate = () => {
    updateAsset(params.id, { name, status });
    router.push("/asset");
  };

  return (
    <div className="p-6">
      <h1>Sửa tài sản</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mr-2"
      />

      <input
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 mr-2"
      />

      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2"
      >
        Lưu
      </button>
    </div>
  );
}