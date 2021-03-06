import React, { useRef, useState, useEffect } from 'react';
import style from './profileContent.module.css';
import FormWrapper from './formWrapper';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { RiFacebookCircleFill, RiBehanceLine } from "react-icons/ri";
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineDribbble,
  AiOutlineInstagram,
} from "react-icons/ai";
import togglePassword from '../../../hooks/togglePassword';

export default function ProfileContent() {
  const about = useRef();
  const skills = useRef();
  const externalSkills = useRef();
  const changePassword = useRef();

  const [activeMenu, setActiveMenu] = useState('about');
  // Get all divs that have ID defined
  let sections: any;
  if (typeof window === 'object') {
    sections = document.querySelectorAll("div[id]");
  }

  // useEffect(() => {
    
  //   window.addEventListener("scroll", navHighlighter);
  // }, [])

  // const navHighlighter = () => {
  //   // Get current scroll position
  //   let scrollY = window.pageYOffset;

  //   // Loop through sections to get height, top and ID values for each
  //   sections.forEach((current: any) => {
  //     const sectionHeight = current.offsetHeight;
  //     const sectionTop = current.offsetTop - 450;
  //     const sectionId = current.getAttribute('id');

  //     // console.log(sectionTop + " " + sectionHeight + ' ' + sectionHeight+sectionTop);

  //     if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
  //       document
  //         .querySelector(`[data-id=${sectionId}]`)
  //         ?.classList.toggle(`${style.active}`);
  //     } 
  //     else {
  //       document
  //         .querySelector(`[data-id=${sectionId}]`)
  //         ?.classList.remove(`${style.active}`);
  //     }
  //   });
  // }
  
  const moveToSection = (ref: any, elementVal: string) => {
    setActiveMenu(elementVal);
     if (ref && ref.current /* + other conditions */) {
      //  ref.current.scrollIntoView({ behavior: "smooth", block: "start", style: {top: "350px"} }); // behavior: "instant", block: "start"
    const element = ref.current;
    element.classList.toggle(`${style.active}`);
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition - 550;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    }); 
    }
  }
    return (
      <>
        <div
          className={`${style.wrapper} profileSideMenu`}
        >
          {/* <ProfileNav /> */}
          <div className="container">
            <div className={`row`}>
              {/* MENU ITEMS */}
              <div className="d-none d-md-block col-3">
                <div className={`${style.sideContent} profileSideMenuItems`}>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "about" ? style.active : ""
                    }`}
                    onClick={() => moveToSection(about, "about")}
                    data-id="about"
                  >
                    About
                  </div>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "skills" ? style.active : ""
                    }`}
                    onClick={() => moveToSection(skills, "skills")}
                    data-id="skillz"
                  >
                    Skills
                  </div>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "externalLinks" ? style.active : ""
                    }`}
                    onClick={() =>
                      moveToSection(externalSkills, "externalLinks")
                    }
                    data-id="externalLinks"
                  >
                    External Links
                  </div>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "changePassword" ? style.active : ""
                    }`}
                    onClick={() =>
                      moveToSection(changePassword, "changePassword")
                    }
                    data-id="changePassword"
                  >
                    Change Password
                  </div>
                </div>
              </div>
              {/* CONTENT */}
              <div className="col-12 col-md-9">
                <FormWrapper component={<About />} reference={about} />
                <FormWrapper component={<Skills />} reference={skills} />
                <FormWrapper
                  component={<ExternalSkills />}
                  reference={externalSkills}
                />
                <FormWrapper
                  component={<ChangePassword />}
                  reference={changePassword}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

// ABOUT
const About = () => {
  return (
    <>
      <div className="mb-4" id="about">
        <h4 className={style.formHeader}>About You</h4>
        <span className={style.formSubHeader}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonum
        </span>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className={`mb-2 ${style.formLabelText}`}>
            Username
          </label>
          <input
            type="text"
            className={`form-control ${style.formControl}`}
            name="username"
            id="username"
          />
        </div>

        <div className="row mb-3">
          <div className="col-6">
            <label
              htmlFor="firstname"
              className={`mb-2 ${style.formLabelText}`}
            >
              Firstname
            </label>
            <input
              type="text"
              className={`form-control ${style.formControl}`}
              name="firstname"
              id="firstname"
            />
          </div>
          <div className="col-6">
            <label htmlFor="lastname" className={`mb-2 ${style.formLabelText}`}>
              Lastname
            </label>
            <input
              type="text"
              className={`form-control ${style.formControl}`}
              name="lastname"
              id="lastname"
            />
          </div>
        </div>

        <div className="mb-3">
          <div className={`${style.formLabelText} mb-2`}>Gender</div>
          <div className="form-check">
            <div className="d-inline-block me-5">
              <input
                className={`form-check-input ${style.formCheckInput}`}
                type="radio"
                name="gender"
                id="male"
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>

            <div className="d-inline-block">
              <input
                className={`form-check-input ${style.formCheckInput}`}
                type="radio"
                name="gender"
                id="female"
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <div className="mb-2">
            <span className={`${style.formLabelText}`}>
              When is your birthday?
            </span>
          </div>
          <div className="">
            <input
              type="text"
              className={`form-control me-2 d-inline-block ${style.formControl}`}
              name="day"
              id="day"
              style={{ width: "112px" }}
            />
            <input
              type="text"
              className={`form-control me-2 d-inline-block ${style.formControl}`}
              name="month"
              id="month"
              style={{ width: "202px" }}
            />
            <input
              type="text"
              className={`form-control d-inline-block ${style.formControl}`}
              name="year"
              id="year"
              style={{ width: "166px" }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="biography" className={`mb-2 ${style.formLabelText}`}>
            Biography
          </label>
          <textarea
            id="biography"
            rows={5}
            className={`form-control ${style.formControl}`}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className={`mb-2 ${style.formLabelText}`}>
            Phone Number
          </label>
          <input
            type="tel"
            className={`form-control ${style.formControl}`}
            name="phone"
            id="phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="websiteurl" className={`mb-2 ${style.formLabelText}`}>
            Website URL
          </label>
          <input
            type="text"
            className={`form-control ${style.formControl}`}
            name="websiteurl"
            id="websiteurl"
          />
        </div>

        <div className="mt-5 d-flex justify-content-center">
          <button className={`btn ${style.btnSaveChanges}`}>Save Changes</button>
        </div>
      </form>
    </>
  );
}

// SKILLS
const Skills = () => {
  return (
    <>
      <div className="mb-4" id="skillz">
        <h4 className={style.formHeader}>Skills</h4>
        <span className={style.formSubHeader}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonum
        </span>
      </div>
      <div className={style.AutoComplete}>
        <Autocomplete
          multiple
          id="tags-standard"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          // defaultValue={[top100Films[13]]}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              // label="Multiple values"
              placeholder="Type new skill here......"
            />
          )}
        />
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <button className={`btn ${style.btnSaveChanges}`}>Save Changes</button>
      </div>
    </>
  );
}

const ExternalSkills = () => {
  return (
    <>
      <div className="mb-4" id="externalLinks">
        <h4 className={style.formHeader}>External links</h4>
        <span className={style.formSubHeader}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonum
        </span>
      </div>
      <form>
        <div className="mb-4">
          <label htmlFor="behance" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <RiBehanceLine />
              <span className="ms-2">Behance</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
              id="behance"
            >
              {/* <Link href=""> */}
              <a
                target="_blank"
                href="https://www.behance.net/"
                rel="noreferrer"
              >
                https://www.behance.net/
              </a>
              {/* </Link> */}
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              id="behance"
              aria-describedby="behance"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="facebook" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <RiFacebookCircleFill />
              <span className="ms-2">Facebook</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
            >
              {/* <Link href=""> */}
              <a
                target="_blank"
                href="https://web.facebook.com/"
                rel="noreferrer"
              >
                https://web.facebook.com/
              </a>
              {/* </Link> */}
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              id="facebook"
              aria-describedby="facebook"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <AiFillLinkedin />
              <span className="ms-2">LinkedIn</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/
              </a>
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              aria-describedby="behance"
              id="linkedin"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="twitter" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <AiOutlineTwitter />
              <span className="ms-2">Twitter</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
            >
              <a target="_blank" href="https://twitter.com/" rel="noreferrer">
                https://twitter.com/
              </a>
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              aria-describedby="twitter"
              id="twitter"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="twitter" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <AiOutlineDribbble />
              <span className="ms-2">Dribble</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
            >
              <a target="_blank" href="https://dribbble.com/" rel="noreferrer">
                https://dribbble.com/
              </a>
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              aria-describedby="twitter"
              id="twitter"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="twitter" className={`mb-2 ${style.formLabelText}`}>
            <div className="d-flex align-items-center">
              <AiOutlineInstagram />
              <span className="ms-2">Instagram</span>
            </div>
          </label>
          <div className="input-group mb-3">
            <span
              className={`input-group-text d-none d-lg-block ${style.externalLinks} ${style.inputGroupText}`}
            >
              <a target="_blank" href="https://instagram.com/" rel="noreferrer">
                https://instagram.com/
              </a>
            </span>
            <input
              type="text"
              className={`form-control ${style.formControlGrey}`}
              aria-describedby="twitter"
              id="twitter"
            />
          </div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button className={`btn ${style.btnSaveChanges}`}>
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}

const ChangePassword = () => {
  const [PasswordType, Icon] = togglePassword();
  const [NewPasswordType, newPassIcon] = togglePassword();
  return (
    <>
      <div className="mb-4" id="changePassword">
        <h4 className={style.formHeader}>Change password</h4>
        <span className={style.formSubHeader}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonum
        </span>
      </div>
      <form>
        <div className="mb-4 position-relative">
          <label htmlFor="password" className={`mb-2 ${style.formLabelText}`}>
            Password
          </label>
          <input
            type={PasswordType}
            className={`form-control ${style.formControl} pe-5`}
            name="password"
            id="password"
          />
          <div className={style.passwordToggle}>{Icon}</div>
        </div>

        <div className="mb-3 position-relative">
          <label
            htmlFor="newpassword"
            className={`mb-2 ${style.formLabelText}`}
          >
            New Password
          </label>
          <input
            type={NewPasswordType}
            className={`form-control ${style.formControl} pe-5`}
            name="newpassword"
            id="newpassword"
          />
          <div className={style.passwordToggle}>{newPassIcon}</div>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <button className={`btn ${style.btnSaveChanges}`}>
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'L??on: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL??E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Am??lie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];