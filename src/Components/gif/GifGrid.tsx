import { GifItem } from "./GifItem";
import { GifPayload } from "../../interfaces/gif";
import { useFetchGifs } from "../../hooks/useFetchGifs";

interface GifGridProps {
  category: string;
}

export const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className="card-grid">
        {gifs.map((gif: GifPayload) => (
          <GifItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
