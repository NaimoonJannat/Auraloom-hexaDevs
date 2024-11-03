import React, { useEffect, useState } from 'react';
import BadgeCard from './BadgeCard';

const BadgeList = () => {
  const [badges, setBadges] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all badges from the backend
  useEffect(() => {
    const fetchBadges = async () => {
      try {
        const response = await fetch('http://localhost:5000/badges');
        const data = await response.json();
        console.log("Fetched badge data:", data); // Log the data to check if it is correct
        setBadges(data); // Update badges state
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching badges:', error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchBadges();
  }, []);

  // Handle badge deletion
  const handleDelete = async (badgeId) => {
    try {
      const response = await fetch(`http://localhost:5000/badges/${badgeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted badge from the state
        setBadges(badges.filter((badge) => badge._id !== badgeId));
      } else {
        console.error('Failed to delete badge');
      }
    } catch (error) {
      console.error('Error deleting badge:', error);
    }
  };

  if (loading) return <div>Loading...</div>; // Display loading message
  // Check if badges are available
  if (!badges.length) return <div>No badges to display</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {badges.map((badge) => (
        <BadgeCard key={badge._id} badge={badge} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default BadgeList;
