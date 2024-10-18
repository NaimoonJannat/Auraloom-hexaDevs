import CardDemo from '@/Components/StrimingNow/CardDemo';
import TrendingPodcasts from '@/Components/StrimingNow/TrendingPodcasts';
import SupscriptionSlide from '@/Components/Supscription/SupscriptionSlide';
import React from 'react';

const page = () => {
    return (
        <div>
            <TrendingPodcasts></TrendingPodcasts>
            <SupscriptionSlide></SupscriptionSlide>
            <CardDemo></CardDemo>
        </div>
    );
};

export default page;