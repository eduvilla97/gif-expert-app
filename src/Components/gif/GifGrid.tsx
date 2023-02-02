import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "../../helpers/getGifs";
import { GifPayload } from "../../interfaces/gif";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const [gifs, setGifs] = useState([]);

  const getImages = async () => {
    setGifs(await getGifs(category));
  };

  useEffect(() => {
    getImages();
  }, [category]);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {gifs.map((gif: GifPayload) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
