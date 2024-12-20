import Image from 'next/image';

const BadgeCard = ({ badge, onDelete }) => {
  console.log(badge);

  if (!badge) return null; // Return null if the badge is not provided

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center">
      <Image
        width={100}
        height={100}
        src={badge.imageUrl || '/fallback-image-path.jpg'} // Provide a fallback image path
        alt={badge.name || 'Badge Image'} // Provide a default alt text
        className="w-16 h-16 mb-4 object-cover rounded-full" // Added rounded-full class for a circular image
      />
      <h3 className="text-xl font-semibold text-[#03045e] mb-2">{badge.name}</h3>
      <p className="text-base text-gray-600 mb-1">
        <span className="font-semibold">Criteria:</span> {badge.criteria}
      </p>
      <p className="text-base text-gray-600 mb-3">
        <span className="font-semibold">Value:</span> {badge.value}
      </p>
      <button
        onClick={() => onDelete(badge._id)}
        className="text-red-600 hover:text-red-800 font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default BadgeCard;
