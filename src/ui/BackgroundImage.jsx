function BackgroundImage() {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat min-h-[50vh] w-screen"
      style={{ backgroundImage: `url(/background_image.jpg)` }}
    >
      <div className="bg-black min-h-[50vh] opacity-25"></div>
    </div>
  );
}

export default BackgroundImage;
