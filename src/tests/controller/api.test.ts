import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";
import useApi from "../../Controller/useApi";

jest.mock("axios");
const mockTempData = {
    type: "gif",
    id: "67shasGadcLq19JVYJ",
    url: "https://giphy.com/gifs/test-fatface-search-cam-67shasGadcLq19JVYJ",
    slug: "test-fatface-search-cam-67shasGadcLq19JVYJ",
    bitly_gif_url: "https://gph.is/2KkV7gB",
    bitly_url: "https://gph.is/2KkV7gB",
    embed_url: "https://giphy.com/embed/67shasGadcLq19JVYJ",
    username: "merkinspurlock",
    source: "",
    title: "test fatface GIF by garbageparty",
    rating: "g",
    content_url: "",
    source_tld: "",
    source_post_url: "",
    is_sticker: 0,
    import_datetime: "2018-05-13 23:15:20",
    trending_datetime: "0000-00-00 00:00:00",
    images: {
        original: {
            height: "480",
            width: "270",
            size: "3294310",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.gif&ct=g",
            mp4_size: "313871",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
            webp_size: "832714",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.webp&ct=g",
            frames: "47",
            hash: "1f44de2e79454d526a27dbaa534b3847",
        },
        downsized: {
            height: "371",
            width: "209",
            size: "1937302",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-downsized.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-downsized.gif&ct=g",
        },
        downsized_large: {
            height: "480",
            width: "270",
            size: "3294310",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        },
        downsized_medium: {
            height: "480",
            width: "270",
            size: "3294310",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        },
        downsized_small: {
            height: "382",
            width: "214",
            mp4_size: "101369",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-downsized-small.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g",
        },
        downsized_still: {
            height: "371",
            width: "209",
            size: "43194",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-downsized_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-downsized_s.gif&ct=g",
        },
        fixed_height: {
            height: "200",
            width: "112",
            size: "754092",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200.gif&ct=g",
            mp4_size: "85513",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200.mp4&ct=g",
            webp_size: "254396",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200.webp&ct=g",
        },
        fixed_height_downsampled: {
            height: "200",
            width: "112",
            size: "99084",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200_d.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200_d.gif&ct=g",
            webp_size: "32582",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200_d.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200_d.webp&ct=g",
        },
        fixed_height_small: {
            height: "100",
            width: "56",
            size: "194174",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100.gif&ct=g",
            mp4_size: "37338",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100.mp4&ct=g",
            webp_size: "96394",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100.webp&ct=g",
        },
        fixed_height_small_still: {
            height: "100",
            width: "56",
            size: "5741",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100_s.gif&ct=g",
        },
        fixed_height_still: {
            height: "200",
            width: "112",
            size: "16600",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200_s.gif&ct=g",
        },
        fixed_width: {
            height: "356",
            width: "200",
            size: "1983685",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w.gif&ct=g",
            mp4_size: "196367",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w.mp4&ct=g",
            webp_size: "568466",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w.webp&ct=g",
        },
        fixed_width_downsampled: {
            height: "356",
            width: "200",
            size: "259882",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w_d.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
            webp_size: "73016",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w_d.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w_d.webp&ct=g",
        },
        fixed_width_small: {
            height: "178",
            width: "100",
            size: "529393",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100w.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100w.gif&ct=g",
            mp4_size: "49033",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100w.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100w.mp4&ct=g",
            webp_size: "211380",
            webp: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100w.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100w.webp&ct=g",
        },
        fixed_width_small_still: {
            height: "178",
            width: "100",
            size: "13329",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/100w_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=100w_s.gif&ct=g",
        },
        fixed_width_still: {
            height: "356",
            width: "200",
            size: "41995",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/200w_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=200w_s.gif&ct=g",
        },
        looping: {
            mp4_size: "1342414",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-loop.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g",
        },
        original_still: {
            height: "480",
            width: "270",
            size: "68310",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy_s.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy_s.gif&ct=g",
        },
        original_mp4: {
            height: "480",
            width: "270",
            mp4_size: "313871",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
        },
        preview: {
            height: "358",
            width: "200",
            mp4_size: "30908",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-preview.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g",
        },
        preview_gif: {
            height: "117",
            width: "66",
            size: "47766",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-preview.gif?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g",
        },
        preview_webp: {
            height: "181",
            width: "102",
            size: "48632",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-preview.webp?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g",
        },
        hd: {
            height: "1920",
            width: "1080",
            mp4_size: "3580609",
            mp4: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/giphy-hd.mp4?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=giphy-hd.mp4&ct=g",
        },
        "480w_still": {
            height: "853",
            width: "480",
            size: "3294310",
            url: "https://media0.giphy.com/media/67shasGadcLq19JVYJ/480w_s.jpg?cid=6ce6f5eeo4jgtjjr03704tdjksvx00mhsp4dbmp5w4torh70&ep=v1_gifs_search&rid=480w_s.jpg&ct=g",
        },
    },
    user: {
        avatar_url:
            "https://media0.giphy.com/avatars/garbageparty/25hNRpEjGVOl.gif",
        banner_image: "",
        banner_url: "",
        profile_url: "https://giphy.com/merkinspurlock/",
        username: "merkinspurlock",
        display_name: "merkinspurlock",
        description: "",
        instagram_url: "https://instagram.com/@garbage_party",
        website_url: "http://www.garbage-party.com/",
        is_verified: false,
    },
    analytics_response_payload:
        "e=Z2lmX2lkPTY3c2hhc0dhZGNMcTE5SlZZSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTZjZTZmNWVlbzRqZ3RqanIwMzcwNHRkamtzdngwMG1oc3A0ZGJtcDV3NHRvcmg3MCZjdD1n",
    analytics: {
        onload: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3c2hhc0dhZGNMcTE5SlZZSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTZjZTZmNWVlbzRqZ3RqanIwMzcwNHRkamtzdngwMG1oc3A0ZGJtcDV3NHRvcmg3MCZjdD1n&action_type=SEEN",
        },
        onclick: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3c2hhc0dhZGNMcTE5SlZZSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTZjZTZmNWVlbzRqZ3RqanIwMzcwNHRkamtzdngwMG1oc3A0ZGJtcDV3NHRvcmg3MCZjdD1n&action_type=CLICK",
        },
        onsent: {
            url: "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPTY3c2hhc0dhZGNMcTE5SlZZSiZldmVudF90eXBlPUdJRl9TRUFSQ0gmY2lkPTZjZTZmNWVlbzRqZ3RqanIwMzcwNHRkamtzdngwMG1oc3A0ZGJtcDV3NHRvcmg3MCZjdD1n&action_type=SENT",
        },
    },
};

describe("useApi custom hook", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("fetches data when URL changes", async () => {
        const mockData = {
            data: [mockTempData],
            meta: {
                status: 200,
            },
            pagination: {
                total_count: 100,
                count: 25,
                offset: 0,
            },
        };

        const mockedSetLoading = jest.fn();
        const mockUrl = "https://api.giphy.com/v1/gifs/trending";
        const mockApiResponse = {
            data: mockData,
            status: 200,
        };

        (axios.get as jest.Mock).mockResolvedValue(mockApiResponse);

        const { result, waitForNextUpdate } = renderHook(() =>
            useApi(mockUrl, mockedSetLoading),
        );

        expect(result.current.apiData).toBe(null);
        expect(result.current.status).toBe(null);

        // Trigger useEffect
        await waitForNextUpdate();

        expect(axios.get).toHaveBeenCalledWith(mockUrl);
        expect(result.current.apiData).toEqual(mockData);
        expect(result.current.status).toBe(200);
    });

    it("check infiniteLoad", async () => {
        const mockData = {
            data: [mockTempData],
            meta: { status: 200 },
            pagination: { total_count: 100, count: 25, offset: 0 },
        };
        const mockSecondData = {
            data: [mockTempData],
            meta: { status: 200 },
            pagination: { total_count: 100, count: 25, offset: 25 },
        };

        const mockedSetLoading = jest.fn();
        const mockUrl = "https://api.giphy.com/v1/gifs/trending";
        const mockApiResponse = { data: mockData, status: 200 };

        (axios.get as jest.Mock).mockResolvedValue(mockApiResponse);

        const { result, waitForNextUpdate, rerender } = renderHook(
            ({ url, infiniteLoad }) =>
                useApi(url, mockedSetLoading, infiniteLoad),
            { initialProps: { url: mockUrl, infiniteLoad: false } },
        );

        await waitForNextUpdate();

        expect(result.current.apiData).toEqual(mockData);

        // second load
        (axios.get as jest.Mock).mockResolvedValueOnce({
            data: mockSecondData,
            status: 200,
        });
        // with infiniteLoad true
        rerender({ url: mockUrl, infiniteLoad: true });
        await waitForNextUpdate();

        const combinedData = {
            data: [...mockData.data, ...mockSecondData.data],
            meta: mockSecondData.meta,
            pagination: mockSecondData.pagination,
        };

        expect(result.current.apiData).toEqual(combinedData);
    });

    it("updates loading state", async () => {
        const mockData = {
            data: [mockTempData],
            meta: {
                status: 200,
            },
            pagination: {
                total_count: 100,
                count: 25,
                offset: 0,
            },
        };
        const mockedSetLoading = jest.fn();
        const mockUrl = "https://api.giphy.com/v1/gifs/trending";
        const mockApiResponse = { data: mockData, status: 200 };

        (axios.get as jest.Mock).mockResolvedValue(mockApiResponse);
        renderHook(() => useApi(mockUrl, mockedSetLoading));
        expect(mockedSetLoading).toHaveBeenCalledWith(true);
        await new Promise((resolve) => setTimeout(resolve, 100));
        expect(mockedSetLoading).toHaveBeenLastCalledWith(false);
    });
});
