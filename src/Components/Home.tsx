// Home Component is Rendered at the root, I tried to implment Modular approach for most of the components keeping the control within home component to make sure control stays in single place -- Usually we use redux for this but as the app requirement did not require the complexity I just left it

// I have commmented the details of state and how it works for better understanding, if you find confusing please let me know

//  Required Imports
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

// Created a custom hook to handle API data => Explained it in detail within the file
import useApi, { TApiData } from "../Controller/useApi";
// I have used React Icons
import { FaSearch } from "react-icons/fa";
import { IconContext, IconType } from "react-icons";

// To Manage the Images and its grid I have created a Image Component
import ImageComponent, { ImageRenderComponent, TImageObject } from "./Image";
// Loader Giph Image
import Loading from "../Assets/giphy-preview.webp";
import { Link } from "react-router-dom";

// This Image Grid Composes the Images into Grid
import ImageGrid from "./ImageGrid";

export default function Home() {
    // Controlled search input state
    const [searcInput, setSearchInput] = useState<string>("");

    // I use this to state to hold the current component data and append the new date to the end, because if we delete or create a new data array the component will be completely loaded again
    const [useIniniteScroll, setUseInfiniteScroll] = useState(false);

    // Offset Tracker
    const [offset, setOffset] = useState(0);


    // ImageComponents State contains the Elements Array
    const [imageComponents, setImageComponents] = useState<JSX.Element[]>([]);

    // This state holds the Search URL When the Search button is hit
    const [searchURL, setSearchURL] = useState(getSearchURL(searcInput,offset));

    // Manages the loading of my Component
    const [loading, setLoading] = useState(false);


    // Whenver the Input Changes this function handles the change and sets the state
    function changeSearchInput(e: ChangeEvent<HTMLInputElement>) {
        setSearchInput(e.target.value);
    }

    // Custom hook initialization which serves the data to the component
    const { apiData }: { apiData: TApiData | null } = useApi(
        searchURL,
        setLoading,
        useIniniteScroll,
    );

    // This hook computes the  image components and adds them to imageComponents state
    useEffect(() => {
        if (imageComponents.length > 0) {
            setImageComponents([]);
        }
        const tempComponents = apiData?.data.map((img: TImageObject) => (
            <ImageComponent image={img} key={img.id} />
        ));
        if (tempComponents) setImageComponents(tempComponents);
    }, [apiData, imageComponents.length]);

    // when search is clicked I just change the search url which in turn calls my Custom hook to change the data, simple chaining technique which is properly controlled
    function onSearchClick() {
        setSearchURL(getSearchURL(searcInput,offset));
    }

    function loadMore() {
        setUseInfiniteScroll(true);
        setSearchURL(getSearchURL(searcInput,offset + 25));
        setOffset((prev) => prev + 25);
    }
    return (
        <div className=" dark:bg-[#181818] dark:text-white ">
            {/* I have used Tailwind css -- This Part Handles the Link button to Trendings  */}
            <div className="flex justify-center my-[2%]">
                <Link to="/trendings">
                    <div className="bg-gradient-to-r from-[#9933ff] to-[#6257ff] h-[45px] px-[50px] text-white flex justify-center items-center rounded-[15px] font-[700] text-[21px] cursor-pointer ">
                        Trendings
                    </div>
                </Link>
            </div>

            {/* This Component handles the Search */}

            <SearchBox
                value={searcInput}
                onChange={changeSearchInput}
                onSearch={onSearchClick}
            />

            {/* Main Component which is conditionally Rendered ---  1. If Loading show giphy 2. If not Loading and no component show text 3. else show components */}
            <div className="flex justify-center">
                {loading && (
                    <div id="loading">
                        <ImageRenderComponent src={Loading} />
                    </div>
                )}
                {!loading && (
                    <>
                        {imageComponents.length === 0 && (
                            <div> Please Enter a Search Term</div>
                        )}
                        {imageComponents.length > 0 && (
                            <div className="flex flex-col justify-center items-center">
                                <ImageGrid components={imageComponents} />
                                <button
                                    className="bg-[#6157ff] rounded-[2px] h-[40px] w-[120px] my-[15px] text-white cursor-pointer "
                                    onClick={() => loadMore()}
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// Search box type Declarations
type TSearchBox = {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
};

// SearchBox Component
function SearchBox(props: TSearchBox) {

    function onEnter(e : KeyboardEvent<HTMLInputElement>){
        if(e.key === "Enter"){
            props.onSearch();
        }
    }

    return (
        <div className="flex w-[100%] justify-center items-center mb-[2.5%]">
            <input
                type="text"
                placeholder="Search all the GIFs..."
                className="h-[50px] border-[2px] border-r-0 focus:outline-none pl-[2%] rounded-l-[10px] w-[30%] dark:text-black"
                value={props.value}
                onChange={props.onChange}
                onKeyDown={onEnter}
            />
            <IconComponent
                Icon={FaSearch}
                className="global-class-name bg-gradient-to-r from-[#e646b6] px-[10px] to-[#ff6666] text-white text-[50px] font-[900] rounded-r-[10px] cursor-pointer"
                onSearch={props.onSearch}
            />
        </div>
    );
}

// Icon Component which is Reused

export function IconComponent({
    Icon,
    className,
    onSearch,
}: {
    Icon: IconType;
    className: string;
    onSearch?: () => void;
}) {
    return (
        <IconContext.Provider value={{ className: className }}>
            <div id="search-action" onClick={onSearch ? onSearch : () => { }}>
                <Icon />
            </div>
        </IconContext.Provider>
    );
}

// Function to generate URL on Search Query

function getSearchURL(searchQuery: string,offset: number) {
    return `${process.env.REACT_APP_BASE_URL}/search?api_key=eNiAGe2c3DEi7x0E1u9WT9bB4bFj6Dn0&q=${searchQuery}&limit=25&offset=${offset}`;
}
