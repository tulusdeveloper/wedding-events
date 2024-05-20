"use client";

import React from 'react';
import Image from 'next/image';
import events from '@/components/eventsData';
import Footer from '@/components/Footer';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';

interface Params {
    eventId: string;
}

interface GalleryProps {
    params: Params;
}

const Gallery: React.FC<GalleryProps> = ({ params }) => {
    const { eventId } = params;
    const eventData = events.find((event) => event.id === parseInt(eventId));

    if (!eventData) {
        return <div>Event not found</div>;
    }

    return (
        <DefaultLayout>
            <Breadcrumb pageName={eventData.title} />
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">{eventData.category}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {eventData.images.map((imageUrl, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-boxdark">
                            <Image
                                src={imageUrl}
                                alt={`${eventData.title} ${index + 1}`}
                                width={400}
                                height={300}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <Footer />
        </DefaultLayout>
    );
};

export default Gallery;
