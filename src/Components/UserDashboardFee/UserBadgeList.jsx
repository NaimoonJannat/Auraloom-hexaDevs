import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";
import DashboardHeading from "../Heading/DashboardHeading";

const UserBadgeList = () => {
  const [badges, setBadges] = useState([]);
  const [earnedBadges, setEarnedBadges] = useState([]);
  const [userData, setUserData] = useState(null); // State to hold custom user data
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCustomUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${user.email}`);
        if (!response.ok) {
          throw new Error("Failed to fetch custom user data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching custom user data:", error);
      }
    };

    if (user?.email) {
      fetchCustomUserData();
    }
  }, [user]);

  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const badgeResponse = await fetch("http://localhost:5000/badges");
        if (!badgeResponse.ok) {
          throw new Error("Failed to fetch badges");
        }
        const badgeData = await badgeResponse.json();
        setBadges(badgeData);

        if (userData && userData.played) {
          const totalPlayCount = userData.played.reduce(
            (acc, play) => acc + (play.count || 0),
            0
          );
          const eligibleBadges = badgeData.filter(
            (badge) => totalPlayCount >= badge.value
          );
          setEarnedBadges(eligibleBadges);
        }
      } catch (error) {
        console.error("Error fetching badges or calculating play count:", error);
      }
    };

    if (userData) {
      fetchBadges();
    }
  }, [userData]);

  return (
    <div className="mt-10">
        <DashboardHeading title={"Your Badges" }></DashboardHeading>
      {earnedBadges.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {earnedBadges.map((badge) => (
            <div
              key={badge._id}
              className=" text-white p-4 rounded-lg flex flex-col items-center"
            >
              <Image
                src={badge.imageUrl}
                alt={badge.name}
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{badge.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-400">No badges earned yet.</p>
      )}
    </div>
  );
};

export default UserBadgeList;
