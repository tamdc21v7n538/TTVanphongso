"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAssets } from "@/lib/assetService";
import { Asset } from "@/lib/assetService";
import { deleteAsset } from "@/lib/assetService";
export default function AssetPage() {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAssets();
      setAssets(data as Asset[]);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div className="p-6">
      <h1>Quản lý tài sản</h1>

      <Link href="/asset/create">+ Tạo tài sản</Link>

      {assets.map((a) => (
        <div key={a.id} className="border p-3 mt-2 rounded">
          <Link href={`/asset/${a.id}`}>
            {a.name} - {a.status}
          </Link>

          <button
            onClick={() => {
              if (confirm("Bạn chắc chắn muốn xóa không?")) {
                deleteAsset(a.id);
                setAssets((prev) => prev.filter((item) => item.id !== a.id));
              }
            }}
            className="ml-4 text-red-500"
          >
            Xóa
          </button>

          <Link href={`/asset/${a.id}/edit`} className="ml-4 text-blue-500">
            Sửa
          </Link>
        </div>
      ))}
    </div>
  );
}
