import React from "react";
import Gallerycard from "../../Components/gallerycard";
function Gallery() {
    return (
        <div className="images">

            <Gallerycard
                image={require("../../Assets/2k23pic/banner.jpg")}
                name="CRYPTERA 2K23"
            />

            <Gallerycard
                image={require("../../Assets/2k23pic/paper presentation.jpg")}
                name="Paper Presentation"
            />

            <Gallerycard
                image={require("../../Assets/2k23pic/Jumbled Code.jpg")}
                name="Jumbled Code"
            />

            <Gallerycard
                image={require("../../Assets/2k23pic/UI design Contest.jpg")}
                name="UI Design Contest"
            />
            <Gallerycard
                image={require("../../Assets/2k23pic/blockchain.jpg")}
                name="Workshop on Blockchain"
            />

            <Gallerycard
                image={require("../../Assets/2k23pic/startup.jpg")}
                name="Workshop on Startup"
            />

        </div>
    );
}
export default Gallery