
import Image from "next/image";
import Link from "next/link";

const AllDestinationPage = async () => {
    const res = await fetch("http://localhost:8000/destinations");
    const data = await res.json();

    return (
        <div className="min-h-screen bg-gray-50 px-6 py-10 lg:px-12">

            <div className="mx-auto max-w-7xl">

                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold text-gray-900">
                        Explore All Destinations
                    </h2>
                    <p className="mt-2 text-gray-500">
                        Discover amazing places and plan your next adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                    {data.map((destination) => (
                        <div
                            key={destination._id}
                            className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Destination Image */}
                            <div className="relative h-56 w-full">
                                <Image
                                    src={destination.imageUrl}
                                    alt={destination.name}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>

                            {/* Destination Details */}
                            <div className="p-5">

                                <div className="mb-3 flex items-center justify-between">
                                    <span className="rounded-full bg-[#1391A5]/10 px-3 py-1 text-xs font-semibold text-[#1391A5]">
                                        {destination.category}
                                    </span>

                                    <span className="text-sm text-gray-500">
                                        {destination.country}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900">
                                    {destination.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    {destination.description || "Explore this amazing destination."}
                                </p>

                                <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">

                                    <div className="flex justify-between">
                                        <span>Duration</span>
                                        <span className="font-medium text-gray-900">
                                            {destination.duration} Days
                                        </span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Departure</span>
                                        <span className="font-medium text-gray-900">
                                            {destination.departureDate}
                                        </span>
                                    </div>

                                </div>

                                <div className="mt-5 flex items-center justify-between">

                                    <div>
                                        <p className="text-xs text-gray-500">Starting from</p>
                                        <p className="text-2xl font-bold text-[#1391A5]">
                                            ${destination.price}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/destinations/${destination._id}`}
                                        className="rounded-lg bg-[#1391A5] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#107787]"
                                    >
                                        View Details
                                    </Link>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default AllDestinationPage;
