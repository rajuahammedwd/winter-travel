import "./gallery.css";
const Gallery = ({ data }) => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:px-20 mb-20">
      {data?.map((item) => (
        <div className="group h-fit relative overflow-hidden" key={item.id}>
          <img
            className="w-full h-[500px] overflow-hidden transition-transform duration-700 transform-gpu group-hover:scale-110"
            src={item.img}
            alt={item.title}
          />
          <div className="image-details hidden group-hover:block absolute bottom-0 w-full text-center bg-[#5ca13e] bg-opacity-20 text-white p-4">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.short_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
