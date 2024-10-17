import TrendingPodcasts from '@/Components/StrimingNow/TrendingPodcasts';
import SupscriptionSlide from '@/Components/Supscription/SupscriptionSlide';
import React from 'react';

const page = () => {
    return (
        <div>
            <TrendingPodcasts></TrendingPodcasts>
            <SupscriptionSlide></SupscriptionSlide>
        </div>
    );
};

export default page;