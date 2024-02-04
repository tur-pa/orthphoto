const styledAvatar = `w-[130px] h-[130px] rounded-full object-cover`;

function Avatar() {
  return (
    <div>
      <img
        className={styledAvatar}
        src="https://images.pexels.com/photos/19402529/pexels-photo-19402529/free-photo-of-verde-atras-do-verde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="avatar"
      ></img>
    </div>
  );
}

export default Avatar;
