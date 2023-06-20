import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function UserDash() {
    const [imageUrl, setImageUrl] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uDQ1_sHh3M416jBY8v-t1ZEcYfJktaHrKUrkkhUFHVap0MSSMbrwOJH3-Lt4t7RUqHCnm-eKZ7o&usqp=CAU&ec=48600112");
    const dataOfVendor = useSelector(state => state.vendor);
    return <>
        <aside class="profile-card">
            <header>
                <img className="vendorProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uDQ1_sHh3M416jBY8v-t1ZEcYfJktaHrKUrkkhUFHVap0MSSMbrwOJH3-Lt4t7RUqHCnm-eKZ7o&usqp=CAU&ec=48600112" />
                <h2 className="mt-4">
                    {dataOfVendor.vendorData.data.name}
                </h2>
                <hr />

                {/* <!-- and role or location --> */}
                <p className="text-center vendorName">
                    {dataOfVendor.vendorData.data.email}
                </p>

            </header>

            {/* <!-- bit of a bio; who are you? --> */}
            <div class="profile-bio">
                <p>
                    {dataOfVendor.vendorData.data.role}
                </p>
            </div>

        </aside>
    </>
}

export default UserDash;