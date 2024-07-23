import { BACKEND_URL } from "../../api/config";

const getResponse = async (searchInput) => {
  const response = await fetch(`${BACKEND_URL}?messages=${searchInput}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: searchInput }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData = await response.json();
  if (!responseData) {
    return "No data found";
  }
  return responseData.messages;
};

export default getResponse;
