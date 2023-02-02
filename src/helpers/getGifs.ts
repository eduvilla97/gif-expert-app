const API_KEY = import.meta.env.VITE_GIPHY_API_KEY || "";

export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((gif: any) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));

  return gifs;
};
