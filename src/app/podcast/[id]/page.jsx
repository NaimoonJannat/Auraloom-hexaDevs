import Image from "next/image";

const page = async ({ params }) => {

    const { id } = params;
        // Fetch the podcast details from the deployed API using the ID
        const response = await fetch(`https://auraloom-backend.vercel.app/podcasts/${id}`, {
            method: 'GET', // Using GET method to fetch data
            headers: {
            'Content-Type': 'application/json',
            },
        });

        // Check if the response is okay (status code 200)
        if (!response.ok) {
            return <div>Error fetching podcast details.</div>; // Handle error case
        }

        const podcast = await response.json();

        if (!podcast) return <div>Loading...</div>;

    return (
        <div>
            <Image></Image>
            <h1>{podcast.title}</h1>
            <p>{podcast.description}</p>
        </div>
    );
};

export default page;