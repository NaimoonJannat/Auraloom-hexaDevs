'use client'

import BadgeForm from "@/Components/Badge/BadgeForm";
import BadgeList from "@/Components/Badge/BadgeList";
import SectionTitle from "@/Components/Heading/SectionTitle";



const page = () => {
    return (
        <div>
            <BadgeForm></BadgeForm>
            <div className="container mx-auto">
                <SectionTitle title={"Manage Badges"}></SectionTitle>
                <BadgeList />
            </div>
        </div>
    );
};

export default page;