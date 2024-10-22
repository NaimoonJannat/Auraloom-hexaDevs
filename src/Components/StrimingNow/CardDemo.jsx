import Image from 'next/image';

const creators = [
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
  {
    name: 'Diana',
    role: 'Podcast Host',
    imageUrl: 'https://i.ibb.co.com/8YcHVt3/837c75ac-2ded-4eb2-ba9e-f8f3473a3ee1.png',
  },
];

const CardDemo = () => {
  return (
    <section className="bg-gray-100 py-16 px-5 sm:px-10 lg:px-32">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        Top Creators
      </h2>

      {/* Creators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {creators.map((creator, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <Image
                src={creator.imageUrl}
                alt={creator.name}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{creator.name}</h3>
            <p className="text-gray-600">{creator.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardDemo;
