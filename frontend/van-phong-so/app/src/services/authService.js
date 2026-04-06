// SERVICE: QUẢN LÝ TÀI SẢN 

const API_URL = "http://localhost:5000/api/assets";

export const getAssets = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createAsset = async (data) => {
  return fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteAsset = async (id) => {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};