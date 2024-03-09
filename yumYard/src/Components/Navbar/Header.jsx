import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import images from "../../constants/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";
import {
  getAuth,signOut ,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { app } from "../../firebase";
import {
  faShoppingCart,
  faEnvelopeOpen,
  faTags,
  faBars,
  faAddressCard,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import Panel from "../Cart/Panel";

const Header = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [confirmpassword, setconfirmpassword] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [openModalsignup, setOpenModalsignup] = useState(false);
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((userCredential) =>
      toast.success("Logged in successfully")
    );
  };
  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        toast.success("Logged In sucessfully.");
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
  };
  function onCloseModalsignup() {
    setOpenModalsignup(false);
    setEmail("");
    setpassword("");
    setconfirmpassword("");
  }
  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
    setpassword("");
    setconfirmpassword("");
  }
  const handleonSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => toast.success("Logged in SuccessFully"))
      .catch((error) =>
        toast.error("Password not matched or User not registered")
      );
    onCloseModal();
    // console.log(email);
    // console.log(password);
    setEmail("");
    setpassword("");
  };

  const handleonSubmitsignup = (e) => {
    e.preventDefault();
    // console.log(email);
    // console.log(password);
    // console.log(confirmpassword);
    if (password !== confirmpassword) {
      toast.error("Passwords do not match");
    } else {
      createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => toast.success("User Registered")
      );
      onCloseModalsignup();

      setconfirmpassword("");
      setEmail("");
      setpassword("");
    }
  };
  const logout=()=>{
    signOut(auth).then(() => {
      toast.success("SignOut Sucessfull");
    }).catch((error) => {
        toast.error("SignOut unsuccessfull");
    });
  }
  const handleClick = (e) => {
    e.preventDefault();
    setShowPanel(!showPanel);
  };

  return (
    <nav className="app__navbar bg-gradient-to-r from-amber-200 to-yellow-300 overflow-x-hidden">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans ">
          <a
            href="#"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faHouse} />
              Home
            </span>
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#about"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faAddressCard} />
              About
            </span>
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#menu"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faBars} />
              Menu
            </span>
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#price"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faTags} />
              Pricing
            </span>
          </a>
        </li>
        <li className="p__opensans">
          <a
            href="#contact"
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faEnvelopeOpen} />
              Contact Us
            </span>
          </a>
        </li>
        <li className="p__opensans">
          {/* <a
            href="#_"
            onClick={handleClick}
            class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-yellow-600 rounded-xl group border-2 border-black"
          >
            <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-600 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-300 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-black">
              <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
              Cart
            </span>
          </a> */}

          {/* {showPanel && */}
          <Panel />
        </li>
      </ul>
      <div className="app__navbar-login">
        {user && (
          <>
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
          />
          <button onClick={logout}>
           <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Logout</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
              </button>
          </>
        )}
        {!user && (
          <>
            <button onClick={() => setOpenModal(true)}>
              {" "}
              <a href="#_" class="relative inline-block text-lg group">
                <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span class="relative">Login</span>
                </span>
                <span
                  class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to our platform
                  </h3>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Your email" />
                    </div>
                    <TextInput
                      id="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="password" value="Your password" />
                    </div>
                    <TextInput
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(event) => setpassword(event.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      Lost Password?
                    </a>
                  </div>
                  <div className="w-full">
                    <Button onClick={handleonSubmit} className="bg-orange-400">
                      Log in to your account
                    </Button>
                  </div>
                  <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?&nbsp;
                    <a
                      href="#"
                      className="text-cyan-700 hover:underline dark:text-cyan-500"
                    >
                      <button onClick={() => setOpenModalsignup(true)}>
                        Create account
                      </button>
                    </a>
                  </div>
                  <div className="flex flex-col gap-y-5 justify-center items-center">
                    <button
                      onClick={githubLogin}
                      type="button"
                      class="py-2 px-4 max-w-md flex justify-center items-center bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="mr-2"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z"></path>
                      </svg>
                      Sign in with GitHub
                    </button>

                    <button
                      onClick={googleLogin}
                      class="px-4 py-2 w-full border justify-center flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                    >
                      <img
                        class="w-6 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Login with Google</span>
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
            <div className="bg-orange-700 " />
        <button onClick={() => setOpenModalsignup(true)}>
          <a href="#_" class="relative inline-block text-lg group">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span class="relative">SignUp</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </button>
        <Modal
          show={openModalsignup}
          size="md"
          onClose={onCloseModalsignup}
          popup
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign up with our platform
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Create your password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(event) => setpassword(event.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Confirm your  password" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  required
                  value={confirmpassword}
                  onChange={(event) => setconfirmpassword(event.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
              </div>
              <div className="w-full">
                <Button
                  className="bg-orange-400"
                  onClick={handleonSubmitsignup}
                >
                  Sign up with your account
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
          </>
        )}

        
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000000"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              size={60}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links w-full">
              <li>
                <a
                  href="#home"
                  onClick={() => setToggleMenu(false)}
                  className="font-extrabold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setToggleMenu(false)}
                  className="font-extrabold"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => setToggleMenu(false)}
                  className="font-extrabold"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#awards"
                  onClick={() => setToggleMenu(false)}
                  className="font-extrabold"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setToggleMenu(false)}
                  className="font-extrabold"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
