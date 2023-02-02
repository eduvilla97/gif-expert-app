interface GifItemProps {
  title: string;
  url: string;
}

export const GifItem = ({ title, url }: GifItemProps) => {
  return (
    // <li>{title}</li>
    // <img src={gif.url} key={uuid()} />

    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
