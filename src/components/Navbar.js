import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, animateScroll as scroll } from "react-scroll";
import { Modal, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [open, setOpen] = useState(false);
  const handleClose = () => setNav(!nav);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openSignIn, setOpenSignIn] = useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const signUp = (event) => {
    // this will cause from refreshing the page
    event.preventDefault();
  };
  const signIn = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-screen h-[80px] z-10 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">COMPILER.</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/admin" smooth={true} offset={-200} duration={500}>
                ADMIN
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3" onClick={() => setOpen(true)}>
            Sign Up
          </button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <Modal
        open={open}
        // EVERY SINGLE TIME U CLICK OUTSIDE THE MODAL IT SWT THE STATE  OF THE MODAL TO FALSE IE IT WILL CLOSE THE MODAL
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <form className="app_signup">
            <center>
              <img
                className="app_headerImage"
                src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
                alt="applogo"
              />
            </center>
            <TextField
              margin="dense"
              label="USERNAME"
              variant="outlined"
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="dense"
              label="EMAIL"
              variant="outlined"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="PASSWORD"
              variant="outlined"
              color="secondary"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button variant="contained" type="submit" onClick={signUp}>
              SignUp
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal
        open={open}
        // EVERY SINGLE TIME U CLICK OUTSIDE THE MODAL IT SWT THE STATE  OF THE MODAL TO FALSE IE IT WILL CLOSE THE MODAL
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <form className="app_signup">
            <center>
              <img
                className="app_headerImage"
                src="https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png"
                alt="applogo"
              />
            </center>
            <TextField
              margin="dense"
              label="USERNAME"
              variant="outlined"
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="dense"
              label="EMAIL"
              variant="outlined"
              placeholder="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              label="PASSWORD"
              variant="outlined"
              color="secondary"
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button variant="contained" type="submit" onClick={signUp}>
              SignUp
            </Button>
          </form>
        </Box>
      </Modal>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            About
          </Link>
        </li>

        <div className="flex flex-col my-4">
          <Button onClick={() => setOpen(true)}>SIGN IN</Button>
          <Button onClick={() => setOpen(true)}>SIGN UP</Button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
