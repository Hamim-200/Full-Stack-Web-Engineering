
import Image from "next/image";
import Link from "next/link";
import { MapPin, CalendarDays, Clock3 } from "lucide-react";
import EditDestinationDialog from "@/components/destination/EditDestinationDialog";
import DeleteDestinationDialog from "@/components/destination/DeleteDestinationDialog";

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:8000/destination/${id}`);
    const destination = await res.json();

    const departureDate = destination.departureDate
        ? (() => {
            const [year, month, day] = destination.departureDate.split("-");
            return `${month}/${day}/${year}`;
        })()
        : "Not specified";

    return (
        <div className="min-h-screen bg-white px-6 py-8 lg:px-12">

            <div className="mx-auto max-w-7xl">

                {/* Top Navigation */}
                <div className="mb-5 flex items-center justify-between">

                    <Link
                        href="/destinations"
                        className="text-sm text-gray-500 transition hover:text-[#1391A5]"
                    >
                        ← Back to Destinations
                    </Link>

                    <div className="flex items-center gap-3">

                        <EditDestinationDialog destination={destination}/>

                        {/* <button className="border border-red-300 px-4 py-2 text-xs font-medium text-red-600 transition hover:bg-red-50">
                            Delete
                        </button> */}

                         <DeleteDestinationDialog id={id} />

                    </div>
                </div>

                {/* Destination Image */}
                <div className="relative h-64 w-full overflow-hidden rounded-sm md:h-[380px]">
                    <Image
                        src={destination.imageUrl}
                        alt={destination.name}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 gap-10 border-t border-gray-100 pt-8 md:grid-cols-3">

                    {/* Destination Information */}
                    <div className="md:col-span-2">

                        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                            <MapPin className="size-4" />
                            {destination.country}
                        </div>

                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            {destination.name}
                        </h1>

                        <div className="mt-3">
                            <span className="rounded-full bg-[#1391A5]/10 px-4 py-1.5 text-sm font-semibold text-[#1391A5]">
                                {destination.category}
                            </span>
                        </div>

                        {/* Overview */}
                        <div className="mt-9">
                            <h2 className="text-xl font-semibold text-gray-900">
                                Overview
                            </h2>

                            <p className="mt-3 text-sm leading-7 text-gray-500">
                                {destination.description ||
                                    "No description available for this destination."}
                            </p>
                        </div>

                    </div>

                    {/* Booking Card */}
                    <div className="h-fit border border-gray-200 bg-white p-6 shadow-md">

                        <p className="text-sm text-gray-500">
                            Starting from
                        </p>

                        <h2 className="mt-1 text-3xl font-bold text-[#1391A5]">
                            ${destination.price}
                        </h2>

                        <p className="mt-1 text-xs text-gray-500">
                            per person
                        </p>

                        {/* Trip Details */}
                        <div className="mt-7 space-y-5 border-t border-gray-100 pt-5">

                            <div className="flex items-center gap-3">
                                <Clock3 className="size-4 text-[#1391A5]" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Duration
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        {destination.duration}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <CalendarDays className="size-4 text-[#1391A5]" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Departure Date
                                    </p>
                                    <p className="text-sm font-medium text-gray-800">
                                        {departureDate}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Booking Button */}
                        <Link
                            href="/my-bookings"
                            className="mt-7 block w-full bg-[#1391A5] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#107787]"
                        >
                            Book Now →
                        </Link>

                        {/* Booking Benefits */}
                        <div className="mt-5 space-y-2 text-xs text-gray-500">
                            <p className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                Easy booking process
                            </p>

                            <p className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                Travel information included
                            </p>

                            <p className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                Customer support available
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DestinationDetailsPage;
