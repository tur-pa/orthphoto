const styledGallery = `container mx-auto`;
const styledGrid = `columns-3 gap-5 [&>img:not(:first-child)]:mt-5`;

function Gallery() {
  return (
    <div className={styledGallery}>
      <div className={styledGrid}>
        <img src="src/data/images/001.jpg" alt="photos" />
        <img src="src/data/images/002.jpg" alt="photos" />
        <img src="src/data/images/003.jpg" alt="photos" />
        <img src="src/data/images/004.jpg" alt="photos" />
        <img src="src/data/images/005.jpg" alt="photos" />
        <img src="src/data/images/006.jpg" alt="photos" />
        <img src="src/data/images/007.jpg" alt="photos" />
        <img src="src/data/images/008.jpg" alt="photos" />
        <img src="src/data/images/009.jpg" alt="photos" />
        <img src="src/data/images/010.jpg" alt="photos" />
      </div>
    </div>
  );
}

export default Gallery;
