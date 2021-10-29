import { baseUrl } from "config";
export const sendGet = async (url) => {
  const res = await fetch(`${baseUrl + url}`);
  const data = await res.json();
  return data;
};

export const sendPost = async (url, data) => {
  const response = await fetch(`${baseUrl + url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (response.status === 200) {
    return true;
  }
  return false;
};
