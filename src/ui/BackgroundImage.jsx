const styledImage = `absolute top-0 -z-10 min-h-[50vh] w-screen bg-cover bg-center bg-no-repeat brightness-75`;

function BackgroundImage() {
  return (
    <div
      style={{ backgroundImage: `url(/background_image.jpg)` }}
      className={styledImage}
    ></div>
  );
}

export default BackgroundImage;
