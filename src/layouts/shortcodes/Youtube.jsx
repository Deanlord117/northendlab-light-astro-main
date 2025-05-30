const Youtube = ({ id, title }) => {
  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        loading="lazy"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Youtube;
