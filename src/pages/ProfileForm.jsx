import React, { useState } from "react";
import axios from "axios";

// useUpdateProfile custom hook
const useUpdateProfile = () => {
  const updateProfile = async (data) => {
    try {
      const response = await axios.post(
        "localhost:8000/api/updateProfile",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            // Include the JWT token in the request headers for authentication.
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // Check if the response status is 200
      if (response.status === 200) {
        // Return the response data
        return response.data;
      } else {
        // Throw an error if the response status is not 200
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      throw new Error(
        error.response?.data?.message || "Failed to update profile"
      );
    }
  };

  return { updateProfile };
};

const ProfileForm = () => {
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const { updateProfile } = useUpdateProfile(); // Use the custom hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "location":
        setLocation(value);
        break;
      case "country":
        setCountry(value);
        break;
      case "language":
        setLanguage(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      location,
      country,
      language,
      phoneNumber,
      //   image,
    };

    try {
      const response = await updateProfile(data);

      // Handle success
      console.log("Profile updated successfully");
    } catch (error) {
      // Handle error
      console.error("Failed to update profile:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Existing input fields for updating profile */}
      {/* ... */}

      {/* New input fields for additional profile information */}
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Country:
        <input
          type="text"
          name="country"
          value={country}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Language:
        <input
          type="text"
          name="language"
          value={language}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Image:
        <input type="file" onChange={handleImageChange} />
      </label>
      <br />
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
