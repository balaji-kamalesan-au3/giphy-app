// Trendings Component is Rendered at the trendings route, this route contains a button at the bottom to load more images

//  Required Imports
import { useEffect, useState } from "react";
// Created a custom hook to handle API data => Explained it in detail within the file
import useApi, { TApiData } from "../Controller/useApi";
// To Manage the Images and its grid I have created a Image Component
import ImageComponent, { ImageRenderComponent, TImageObject } from "./Image";
// Loader Giph file
import Loading from "../Assets/giphy-preview.webp";
// This Image Grid Composes the Images into Grid
import ImageGrid from "./ImageGrid";
import { MdOutlineTrendingUp } from "react-icons/md";
import { IconComponent } from "./Home";

export default function Trendings() {
    //  Loader state
    const [loading, setLoading] = useState(false);
    // I use this to state to hold the current component data and append the new date to the end, because if we delete or create a new data array the component will be completely loaded again
    const [useIniniteScroll, setUseInfiniteScroll] = useState(false);

    // Offset Tracker
    const [offset, setOffset] = useState(0);

    // Trending URL State
    const [trendingUrl, setTrendingUrl] = useState(getTrendingURL(offset));

    // Custom hook initialization which serves the data to the componen
    const { apiData }: { apiData: TApiData | null } = useApi(
        trendingUrl,
        setLoading,
        useIniniteScroll,
    );

    // ImageComponents State contains the Elements Array
    const [imageComponents, setImageComponents] = useState<JSX.Element[]>([]);

    // This hook computes the  image components and adds them to imageComponents state
    useEffect(() => {
        setLoading(true);
        if (imageComponents.length > 0) {
            setImageComponents([]);
        }
        const tempComponents = apiData?.data.map((img: TImageObject) => (
            <ImageComponent image={img} key={img.id} />
        ));
        if (tempComponents) setImageComponents(tempComponents);
        setLoading(false);
    }, [apiData, imageComponents.length]);

    // Load More function is called when the load more button is clicked, this handles the offset and initiate the loadmore by creating a trending url to get the next giphs
    function loadMore() {
        setUseInfiniteScroll(true);
        setTrendingUrl(getTrendingURL(offset + 25));
        setOffset((prev) => prev + 25);
    }

    return (
        <>
            {/* Most of the Componets are as same as Home component other than button which loads more trending images */}
            <div className="flex items-center mx-[10%] py-[15px] border-b-[2px]">
                <IconComponent
                    Icon={MdOutlineTrendingUp}
                    className="text-[50px] text-[#90d8e8]"
                />
                <span className="text-[28px] font-[600] ml-[20px] ">
                    Trendings
                </span>
            </div>
            <div className="flex justify-center">
                {loading && (
                    <div id="loading">
                        <ImageRenderComponent src={Loading} />
                    </div>
                )}
                {!loading && (
                    <div className="flex flex-col justify-center items-center">
                        <ImageGrid components={imageComponents} />
                        {/* Button to load more trending posts */}
                        <button
                            className="bg-[#6157ff] rounded-[2px] h-[40px] w-[120px] my-[15px] text-white cursor-pointer "
                            onClick={() => loadMore()}
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

// Function to create new trending url based on offset
function getTrendingURL(offset: number) {
    return `https://api.giphy.com/v1/gifs/trending?api_key=eNiAGe2c3DEi7x0E1u9WT9bB4bFj6Dn0&limit=25&offset=${offset}&rating=g&bundle=messaging_non_clips`;
}
