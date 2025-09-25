import axios from "axios";
// async component

export default async function  Home() {
  async function getUserDetails() {
    const response = await axios.get("");
    return response.data;
  }
  const userData = await getUserDetails();
  return (
    <div >
      hwllo
      {userData.email}
      {userData.name}
    </div>
  );
}
