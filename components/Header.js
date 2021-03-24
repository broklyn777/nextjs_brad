import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        {" "}
        <span>MediaLink</span> News
      </h1>
      <p className={headerStyles.description}>
        Håll dig uppdaterad om det senaste inom Web Development!
      </p>
    </div>
  );
};

export default Header;

/* <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style> */
