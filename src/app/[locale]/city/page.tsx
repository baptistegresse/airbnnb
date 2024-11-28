function page() {
  return (
    <div className="w-screen h-screen bg-gray-800">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/zih7Xss12XE?autoplay=1&quality=hd1080"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}


export default page;
