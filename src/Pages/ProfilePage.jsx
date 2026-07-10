import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePage.css";
import { useAuth } from "../context/AuthContext";
import { API_URL } from "../config";

function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    village: "",
    state: "",
    farmSize: "",
    crop: "",
  });

  const [isProfileExists, setIsProfileExists] = useState(false);

  // Load Profile
  useEffect(() => {
    if (!user) return;

    async function fetchProfile() {
      try {
        const response = await fetch(
          `${API_URL}/api/users/${user.email}`
        );

        const data = await response.json();

        if (response.ok) {
          setFormData({
            name: data.user.name,
            email: data.user.email,
            phone: data.user.phone,
            village: data.user.village,
            state: data.user.state,
            farmSize: data.user.farmSize,
            crop: data.user.crop,
          });

          setIsProfileExists(true);
        } else {
          setFormData((prev) => ({
            ...prev,
            email: user.email,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchProfile();
  }, [user]);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save / Update Profile
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isProfileExists
        ? `${API_URL}/api/users/${user.email}`
        : `${API_URL}/api/users`;

      const method = isProfileExists ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsProfileExists(true);
        alert(data.message);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="profile-container">
      <h2>👨‍🌾 Farmer Profile</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          readOnly
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="village"
          placeholder="Enter Village"
          value={formData.village}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="Enter State"
          value={formData.state}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="farmSize"
          placeholder="Enter Farm Size"
          value={formData.farmSize}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="crop"
          placeholder="Preferred Crop"
          value={formData.crop}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isProfileExists ? "Update Profile" : "Save Profile"}
        </button>
      </form>
    </div>
  );
}

export default ProfilePage;