"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import events from '@/components/eventsData';
import Footer from '@/components/Footer';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import Modal from 'react-modal';

interface Params {
    eventId: string;
}

interface GalleryProps {
    params: Params;
}

const Gallery: React.FC<GalleryProps> = ({ params }) => {
    const { eventId } = params;
    const eventData = events.find((event) => event.id === parseInt(eventId));
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    if (!eventData) {
        return <div>Event not found</div>;
    }

    const openModal = (imageUrl: string) => {
        setSelectedImage(imageUrl);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedImage('');
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName={eventData.title} />
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold mb-4">{eventData.title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventData.images.map((imageUrl, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-boxdark cursor-pointer relative"
                            onClick={() => openModal(imageUrl)}
                        >
                            <Image
                                src={imageUrl}
                                alt={`${eventData.title} ${index + 1}`}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover transition duration-300 transform hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                                <p className="text-white font-bold">View Image</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br />
            <Footer />

            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Zoomed Image"
                className="flex justify-center items-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            >
                <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-5xl w-full">
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-black bg-white rounded-full p-2 focus:outline-none"
                    >
                        &times;
                    </button>
                    <Image
                        src={selectedImage}
                        alt="Zoomed Image"
                        width={800}
                        height={600}
                        className="object-contain w-full h-full"
                    />
                </div>
            </Modal>
        </DefaultLayout>
    );
};

export default Gallery;
