import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../stores/actions/usersAction";
import bg from "../assets/vector.jpg";

export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // State Form Login
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  // onChange Login Form
  function loginFormChange(e) {
    const { name, value } = e.target;
    setLoginInput({
      ...loginInput,
      [name]: value,
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    const data = loginInput;
    if (
      loginInput.email === "trial@mail.com" &&
      loginInput.password === "qwerty123"
    ) {
      localStorage.setItem('access_token','iniaccesstoken')
      navigate("/");

    } else
      toast.error("Wrong email or password", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    // dispatch(loginUser(data))
    //   .then((data) => {
    //     localStorage.setItem("access_token", data.access_token);
    //     localStorage.setItem("user_id", data.user_id);
    //     localStorage.setItem("email", data.email);
    //     localStorage.setItem("role", data.role);
    //     console.log("Success login admin : ", {
    //       email: data.email,
    //     });
    //     navigate(`/`);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <>
      <div
        className="min-h-screen max-h-min"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: "contain" }}
        data-theme="false"
      >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        {/* <img
          src={genji}
          width="200"
          className="inline-block bg-[rgba(254,185,19,1)]"
        /> */}
        <div className="pt-48 pb-40 pl-20">
          <h1 className="text-4xl font-medium">Selamat Datang di Solusi</h1>
          <h1 className="text-4xl font-medium">Perangkat Lunak Farmasi</h1>
          <h1 className="text-2xl font-medium mb-10">
            Sistem Manajemen Apotek Online
          </h1>
        </div>
        <h1 className="text-xl font-medium text-center">
          Silahkan masuk ke dalam akun anda dan kelola apotek Anda
        </h1>
        <div className="max-w-sm mx-auto my-2 bg-white p-4 rounded-xl shadow shadow-slate-300">
          {/* <div className="my-2">
        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            className="w-6 h-6"
            alt=""
          />
          <span>Login with Google</span>
        </button>
      </div>
      <h1 className="font-medium text-lg text-center">Or</h1> */}

          <form action="" className="" onSubmit={submitHandler}>
            <div className="flex flex-col space-y-5">
              <label for="email">
                <p className="text-xl font-medium text-left text-slate-700 pb-2">
                  Email
                </p>
                <input
                  value={loginInput.email}
                  onChange={loginFormChange}
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                />
              </label>
              <label for="password">
                <p className="text-xl font-medium text-left text-slate-700 pb-2">
                  Password
                </p>
                <input
                  value={loginInput.password}
                  onChange={loginFormChange}
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                />
              </label>
              <div className="flex flex-row justify-between"></div>
              <button
                type="submit"
                className="w-full py-3 font-bold text-white bg-[#016AAB] hover:bg-[#2e87be] rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
              >
                <span>Masuk</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
              </button>
            </div>
            <div className="p-1">
              <h4>
                Belum Registrasi? Silahkan klik
                <a href="/register" className="text-orange-500">
                  {" "}
                  Daftar
                </a>
              </h4>
            </div>
          </form>
        </div>
        {/* <footer className="text-slate-500 font-semibold">
          Created by Hafizh
        </footer> */}
      </div>
    </>
  );
}
