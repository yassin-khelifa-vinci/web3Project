'use client'

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cars } from '../../../../data/cars';
import Image from 'next/image';

const CarPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const [car, setCar] = useState<{ id: number; src: string } | null>(null);

    useEffect(() => {
        if (id) {
            const foundCar = cars.find((car) => car.id === Number(id));
            if (!foundCar) {
                router.push('/404');
            } else {
                setCar(foundCar);
            }
        }
    }, [id, router]);

    if (!car) {
        return <p>Chargement...</p>;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Image
                src={car.src}
                alt={`Car ${car.id}`}
                width={500}
                height={300}
                style={{ objectFit: 'contain' }}
            />
        </div>
    );
};

export default CarPage;
