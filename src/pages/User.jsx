import Button from "../ui/Button";
import { FaPencil } from "react-icons/fa6";
import Filter from "../ui/Filter";
import Sort from "../ui/Sort";
import Gallery from "../ui/Gallery";
import AddPhoto from "../features/photos/AddPhoto";
import Avatar from "../ui/Avatar";
import PageNotFound from "../pages/PageNotFound";
import { useProfile } from "../features/users/useProfile";
import { useUser } from "../features/users/useUser";
import { useState } from "react";
import { useUpdateUser } from "../features/users/useUpdateUser";
import { useUpdateProfile } from "../features/users/useUpdateProfile";
import { useProfileStats } from "../features/users/useProfileStats";

const styledUserSection = `flex flex-col items-center justify-center`;
const styledUsername = `text-2xl font-medium mt-7`;
const styledStatsSection = `flex text-center [&>div>h4]:text-lg [&>div>h4]:font-medium [&>div>h4]:text-gray-600 [&>div>p]:text-gray-500 gap-5`;
const styledFilterSection = `container mx-auto my-8 flex justify-end`;

function User() {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const { profile } = useProfile();
  const { user } = useUser();
  const { profileStats } = useProfileStats();

  const [username, setUsername] = useState(profile?.username);
  const { updateUser, isUpdatingUser } = useUpdateUser();
  const { updateProfile, isUpdatingProfile } = useUpdateProfile();

  const { photos: stats } = profileStats || [{}];
  const viewsStats = stats?.reduce((acc, currView) => acc + currView.views, 0);
  const favoriteStats = stats?.reduce(
    (acc, currView) => acc + currView.favorite,
    0,
  );
  const comments_numStats = stats?.reduce(
    (acc, currView) => acc + currView.comments_num,
    0,
  );

  function onChange(e) {
    setUsername(e.target.value);
  }

  function onSubmit() {
    const currId = user.id;
    updateProfile({ currId, username });
    updateUser({ username });
  }

  return (
    <>
      {!profile ? (
        <PageNotFound></PageNotFound>
      ) : (
        <div>
          <section className={styledUserSection}>
            <Avatar></Avatar>
            <h1 className={styledUsername}>{profile?.username}</h1>
            {user ? (
              <div>
                <Button type="bgBtn" onClick={() => setIsOpenEdit(!isOpenEdit)}>
                  <FaPencil /> &nbsp; Edytuj profil
                </Button>
                <AddPhoto></AddPhoto>
              </div>
            ) : null}
            {isOpenEdit ? (
              <div>
                <input
                  type="text"
                  placeholder={user.user_metadata.username}
                  onChange={onChange}
                  value={username}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 sm:text-sm"
                ></input>
                <button onClick={onSubmit}>Change</button>
              </div>
            ) : null}
            <div className={styledStatsSection}>
              <div>
                <p>Wyświetlenia</p>
                <h4>
                  {viewsStats < 1000
                    ? viewsStats
                    : viewsStats / 1000 + ` tysięcy`}
                </h4>
              </div>
              <div>
                <p>Polubienia</p>
                <h4>
                  {favoriteStats < 1000
                    ? favoriteStats
                    : favoriteStats / 1000 + ` tysięcy`}
                </h4>
              </div>
              <div>
                <p>Liczba zdjęć</p>
                <h4>
                  {comments_numStats < 1000
                    ? comments_numStats
                    : comments_numStats / 1000 + ` tysięcy`}
                </h4>
              </div>
            </div>
          </section>
          <section className={styledFilterSection}>
            <Filter
              options={[
                { value: "all", label: "Wszystkie" },
                { value: "popularity", label: "Popularne" },
                { value: "commented", label: "Komentowane" },
              ]}
            ></Filter>
            <Sort></Sort>
          </section>
          <Gallery username={profile?.username}></Gallery>
        </div>
      )}
    </>
  );
}

export default User;
