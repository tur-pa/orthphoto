import InfiniteGallery from "../ui/InfiniteGallery";
import Footer from "../ui/Footer";
import Navigation from "../ui/Navigation";
import BackgroundImage from "../ui/BackgroundImage";
import HeroHeader from "../ui/HeroHeader";
import SelectFilter from "../ui/SelectFilter";

const styledSection = `min-h-[50vh] text-white`;
const styledHero = `flex flex-col items-center`;
const styledContainer = `container mx-auto my-9 flex`;
const styledText = `text-2xl font-semibold`;

function Home() {
  return (
    <div>
      <section className={styledSection}>
        <div className={styledHero}>
          <Navigation></Navigation>
          <HeroHeader></HeroHeader>
        </div>
        <BackgroundImage></BackgroundImage>
      </section>

      <section className={styledContainer + " justify-between"}>
        <h2 className={styledText}>Najnowsze zdjęcia w serwisie Orthphoto</h2>
        <SelectFilter
          options={[
            { value: "created_at", label: "Nowe" },
            { value: "views", label: "Popularne" },
            { value: "rating", label: "Najwyżej oceniane" },
            { value: "comments_num", label: "Komentowane" },
          ]}
        ></SelectFilter>
      </section>

      <InfiniteGallery></InfiniteGallery>

      <Footer></Footer>
    </div>
  );
}

export default Home;
