// This is a custom hook implementation , which will get the data from the API and return it to the component, most of the data related operations can be isolated and perfomed here, which makes it easy to manage the data separately from the UI.

// This hoook recieves a URL from the view and get the data based on that URL and if load more is enabled then it will load more data and append it to the previously loaded data else it will just return the new data


// Required Imports

// I use Axios for to get data from API
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TImageObject } from '../Components/Image';

type TMeta = {
  "status": number,
  "msg": string,
  "response_id": string
}

type TPagination = {
  "total_count": number,
  "count": number,
  "offset": number,
}


export type TApiData = {
  data : TImageObject[],
  meta : TMeta,
  pagination : TPagination
}

export default function useApi(url: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>, infiniteLoad : boolean = false ){

  // Data returned from API is stored here
  const [apiData, setApiData] = useState<TApiData | null>(null);
  const [status, setStatus] = useState<number|null>(null)

  // Whenever the URL changes new data is fetched, we can check if the url is same as previosu then dont call the fetch else we can call the fetch
  useEffect(() => {
    getData();
  },[url])

  // Function to fetch the data and set the data based on infinite scroll
  async function getData(){

    const apiData1 = await axios.get(url);
    if(infiniteLoad){
      setApiData(prev => {
        console.log(prev ? [...prev.data, ...apiData1.data.data] : [...apiData1.data.data])
        return {
          data: prev? [...prev.data, ...apiData1.data.data]:[...apiData1.data.data],
          meta : apiData1.data.meta,
          pagination : apiData1.data.pagination
        }
      })
    }
    else {
      setLoading(true)
      setApiData(apiData1.data);
      setLoading(false)
    }
    setStatus(apiData1.status);

  }

  // returns the data and status back to UI
  return {apiData,status }
}
