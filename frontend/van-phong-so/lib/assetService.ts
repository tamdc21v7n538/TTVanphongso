export type Asset = {
  id: string;
  name: string;
  status: string;
};

const assets: Asset[] = [
  { id: "1", name: "Laptop Dell", status: "Đang dùng" },
  { id: "2", name: "Máy chiếu", status: "Rảnh" },
];

export const getAssets = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(assets);
    }, 500); 
  });
};

export const getAssetById = (id: string) =>
  assets.find(a => a.id === id);

export const addAsset = (asset: Asset) => {
  assets.push(asset);
};

export const deleteAsset = (id: string) => {
  const index = assets.findIndex(a => a.id === id);
  if (index !== -1) {
    assets.splice(index, 1);
  }
};
export const updateAsset = (id: string, updatedData: Partial<Asset>) => {
  const asset = assets.find(a => a.id === id);
  if (asset) {
    Object.assign(asset, updatedData);
  }
};