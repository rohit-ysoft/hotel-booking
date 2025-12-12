import React, { useEffect, useState } from "react";
import ReCard from "../../../reusable/cards/reCard";
import { getHotelFacilities } from "../../../../api/hotelFacilityApi";
import { useParams } from "react-router-dom";

const HotelFacilityList = () => {

    const { id } = useParams();
    const [hotelFacility, setHotelFacility] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchHotelFacility = async () => {
            try {
                const data = await getHotelFacilities(id);
                console.log("Hotel Facility List of data =>", data)

                const facilitiesArray = Array.isArray(data.data)
                    ? data.data
                    : [];

                console.log("New Hotel Facility List of data =>", facilitiesArray)
                setHotelFacility(facilitiesArray);
            } catch (error) {
                console.error("Error fetching hotel Facilities =>", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchHotelFacility();
        }
    }, [id]);


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {hotelFacility?.map((hotel) => (
                <ReCard
                    key={hotel._id}
                    image={hotel.category}
                    title={hotel.name}
                    subtitle={hotel.location}
                    description={hotel.description}
                    buttonLabel="View Facility"
                    onClick={() => console.log("Open:", hotel._id)}
                    footer={`⭐ ${hotel.rating} Rating`}
                />
            ))}
        </div>
    );
};

export default HotelFacilityList;
