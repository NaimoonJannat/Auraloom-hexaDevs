export default function CreatorDashboard() {
    return (
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold">Creator Dashboard</h2>

            <section className="my-4">
                <h3 className="text-lg font-semibold">Upload New Podcast</h3>
                <div className="bg-gray-100 p-4 rounded">
                    <button className="bg-blue-500 text-white p-2 rounded shadow hover:bg-blue-600">
                        Upload
                    </button>
                </div>
            </section>

            <section className="my-4">
                <h3 className="text-lg font-semibold">My Podcasts</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {/* List of podcasts */}
                    <div className="bg-yellow-100 p-4 rounded shadow">Podcast 1</div>
                    <div className="bg-yellow-100 p-4 rounded shadow">Podcast 2</div>
                </div>
            </section>

            <section className="my-4">
                <h3 className="text-lg font-semibold">Metrics</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-100 p-4 rounded shadow">
                        <p>Subscriptions: 1200</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded shadow">
                        <p>Likes: 150</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded shadow">
                        <p>Comments: 45</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
