import  { Suspense } from 'react'
// Packages which handles lazy Loading of Image
import { LazyLoadImage } from 'react-lazy-load-image-component';

// I use this technique to get the type inference, I copy a sample data and infer type from it rather tahn creating my ow --- easy and simple way to create type
const imgObj = {
  "type": "gif",
  "id": "sUESEgyN7FmBG",
  "url": "https://giphy.com/gifs/sUESEgyN7FmBG",
  "slug": "sUESEgyN7FmBG",
  "bitly_gif_url": "http://gph.is/295O5xb",
  "bitly_url": "http://gph.is/295O5xb",
  "embed_url": "https://giphy.com/embed/sUESEgyN7FmBG",
  "username": "",
  "source": "http://imgur.com/gallery/WOuvrYC",
  "title": "jews GIF",
  "rating": "g",
  "content_url": "",
  "source_tld": "imgur.com",
  "source_post_url": "http://imgur.com/gallery/WOuvrYC",
  "is_sticker": 0,
  "import_datetime": "2016-06-27 19:49:48",
  "trending_datetime": "1970-01-01 00:00:00",
  "images": {
    "original": {
      "height": "195",
      "width": "260",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.gif&ct=g",
      "mp4_size": "746926",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.mp4&ct=g",
      "webp_size": "459748",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.webp&ct=g",
      "frames": "50",
      "hash": "ded9b109f92ecdb68483c986b9e4b770"
    },
    "downsized": {
      "height": "195",
      "width": "260",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    "downsized_large": {
      "height": "195",
      "width": "260",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    "downsized_medium": {
      "height": "195",
      "width": "260",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    },
    "downsized_small": {
      "height": "158",
      "width": "211",
      "mp4_size": "95326",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy-downsized-small.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy-downsized-small.mp4&ct=g"
    },
    "downsized_still": {
      "height": "195",
      "width": "260",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
    },
    "fixed_height": {
      "height": "200",
      "width": "267",
      "size": "1355009",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200.gif&ct=g",
      "mp4_size": "234385",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/200.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200.mp4&ct=g",
      "webp_size": "447782",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/200.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200.webp&ct=g"
    },
    "fixed_height_downsampled": {
      "height": "200",
      "width": "267",
      "size": "173202",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200_d.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200_d.gif&ct=g",
      "webp_size": "94356",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/200_d.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200_d.webp&ct=g"
    },
    "fixed_height_small": {
      "height": "100",
      "width": "134",
      "size": "448384",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/100.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100.gif&ct=g",
      "mp4_size": "93848",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/100.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100.mp4&ct=g",
      "webp_size": "171996",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/100.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100.webp&ct=g"
    },
    "fixed_height_small_still": {
      "height": "100",
      "width": "134",
      "size": "8631",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/100_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100_s.gif&ct=g"
    },
    "fixed_height_still": {
      "height": "200",
      "width": "267",
      "size": "24287",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200_s.gif&ct=g"
    },
    "fixed_width": {
      "height": "150",
      "width": "200",
      "size": "801539",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w.gif&ct=g",
      "mp4_size": "160307",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w.mp4&ct=g",
      "webp_size": "296510",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w.webp&ct=g"
    },
    "fixed_width_downsampled": {
      "height": "150",
      "width": "200",
      "size": "112200",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w_d.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w_d.gif&ct=g",
      "webp_size": "59364",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w_d.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w_d.webp&ct=g"
    },
    "fixed_width_small": {
      "height": "75",
      "width": "100",
      "size": "250877",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/100w.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100w.gif&ct=g",
      "mp4_size": "48996",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/100w.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100w.mp4&ct=g",
      "webp_size": "115852",
      "webp": "https://media2.giphy.com/media/sUESEgyN7FmBG/100w.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100w.webp&ct=g"
    },
    "fixed_width_small_still": {
      "height": "75",
      "width": "100",
      "size": "5331",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/100w_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=100w_s.gif&ct=g"
    },
    "fixed_width_still": {
      "height": "150",
      "width": "200",
      "size": "19409",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/200w_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=200w_s.gif&ct=g"
    },
    "looping": {
      "mp4_size": "3500516",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy-loop.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g"
    },
    "original_still": {
      "height": "195",
      "width": "260",
      "size": "35641",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy_s.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy_s.gif&ct=g"
    },
    "original_mp4": {
      "height": "360",
      "width": "480",
      "mp4_size": "746926",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy.mp4&ct=g"
    },
    "preview": {
      "height": "138",
      "width": "184",
      "mp4_size": "42324",
      "mp4": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy-preview.mp4?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy-preview.mp4&ct=g"
    },
    "preview_gif": {
      "height": "56",
      "width": "75",
      "size": "49929",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy-preview.gif?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy-preview.gif&ct=g"
    },
    "preview_webp": {
      "height": "108",
      "width": "144",
      "size": "46136",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/giphy-preview.webp?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=giphy-preview.webp&ct=g"
    },
    "480w_still": {
      "height": "360",
      "width": "480",
      "size": "1740401",
      "url": "https://media2.giphy.com/media/sUESEgyN7FmBG/480w_s.jpg?cid=6ce6f5eeiwbdbxrwhrwbj39njdz3j1xxk68j9fsj71ickd1u&ep=v1_gifs_search&rid=480w_s.jpg&ct=g"
    }
  },
  "analytics_response_payload": "e=Z2lmX2lkPXNVRVNFZ3lON0ZtQkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02Y2U2ZjVlZWl3YmRieHJ3aHJ3YmozOW5qZHozajF4eGs2OGo5ZnNqNzFpY2tkMXUmY3Q9Zw",
  "analytics": {
    "onload": {
      "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNVRVNFZ3lON0ZtQkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02Y2U2ZjVlZWl3YmRieHJ3aHJ3YmozOW5qZHozajF4eGs2OGo5ZnNqNzFpY2tkMXUmY3Q9Zw&action_type=SEEN"
    },
    "onclick": {
      "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNVRVNFZ3lON0ZtQkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02Y2U2ZjVlZWl3YmRieHJ3aHJ3YmozOW5qZHozajF4eGs2OGo5ZnNqNzFpY2tkMXUmY3Q9Zw&action_type=CLICK"
    },
    "onsent": {
      "url": "https://giphy-analytics.giphy.com/v2/pingback_simple?analytics_response_payload=e%3DZ2lmX2lkPXNVRVNFZ3lON0ZtQkcmZXZlbnRfdHlwZT1HSUZfU0VBUkNIJmNpZD02Y2U2ZjVlZWl3YmRieHJ3aHJ3YmozOW5qZHozajF4eGs2OGo5ZnNqNzFpY2tkMXUmY3Q9Zw&action_type=SENT"
    }
  }
}

// Creating type from sample data
export type TImageObject = typeof imgObj;

export type TImageData = {
  height: string;
  width: string;
  size: string;
  url: string;
}

// This components renders the image taking Src from the controller
export function ImageRenderComponent({src} : {src : string}) {
  return <LazyLoadImage src={src} alt='Giphy' className='h-[300px] w-[300px] object-contain' />
}

//  This component has the containet of the image and can be served as intial image render controller
export default function ImageComponent({ image }: { image: TImageObject }) {

  return (
    <div className='image-container min-h-[300px] max-h-[400px] px-[2%] py-[2%] border-b-[3px] min-w-[300px] max-w-[400px]'>
      <Suspense>
        <ImageRenderComponent src={ image.images.original.url} />
      </Suspense>
    </div>

  )
}

