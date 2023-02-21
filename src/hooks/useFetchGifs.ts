import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    setGifs(await getGifs(category));
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
