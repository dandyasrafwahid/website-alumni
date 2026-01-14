"use client";

import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/login");
      } else {
        console.error("Logout Error: ", await res.text());
        router.push("/");
      }
    } catch (err) {
      console.error("An error occured during logout: ", err);
    }
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer">
      Logout
    </button>
  );
};

export default LogoutButton;
