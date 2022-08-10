import React, { useEffect, useState } from "react";
import styles from "../Profile/Profile.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  console.log("user", user);

  // *** retrieving Current User ....

  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("buyer");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setCurrentUser(foundUser);
    } else {
      navigate("/Login");
    }
  }, []);
  return (
    <>
      <div className={styles.container}>
        <h2>{currentUser.name}</h2>
        <h2>{currentUser.email}</h2>
      </div>
    </>
  );
};

export default Profile;
