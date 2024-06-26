import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  signOut,
  doesSessionExist,
} from "supertokens-auth-react/recipe/session";
const Header = () => {
  const navigate = useNavigate();
  const [login, islogin] = useState();

  useEffect(() => {
    async function checkSession() {
      const sessionExists = await doesSessionExist();
      islogin(sessionExists);
    }
    checkSession();
  }, []);

  async function onLogout() { 
    await signOut();
    alert("Logout successful");
    navigate("/auth"); 
  }
  async function onLogin() {
    navigate("/auth"); 
  }
  return (
    <div className="flex justify-around p-3 border-b-2 sticky top-0 bg-white">
      <div className="flex gap-4 items-center">
        <Link to={"/"}>
          <button className="flex font-bold text-3xl gap-2 items-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M5.46 30.9003C7.6 31.99 10.4 31.99 16 31.99C21.6 31.99 24.4 31.99 26.54 30.9003C28.42 29.9406 29.95 28.4111 30.91 26.5317C32 24.3924 32 21.5933 32 15.995C32 10.3968 32 7.59763 30.91 5.45829C29.95 3.57888 28.42 2.04936 26.54 1.08966C24.4 0 21.6 0 16 0C10.4 0 7.6 0 5.46 1.08966C3.58 2.04936 2.05 3.57888 1.09 5.45829C0 7.59763 0 10.3968 0 15.995C0 21.5933 0 24.3924 1.09 26.5317C2.05 28.4111 3.58 29.9406 5.46 30.9003Z"
                  fill="#114AC6"
                ></path>
                <path
                  d="M5.97998 19.014C5.35998 18.924 4.76998 19.2039 5.08998 19.8437C7.72998 25.2121 9.63998 29.1208 11.03 31.9499C12.4 31.9999 14.03 31.9999 16 31.9999C21.6 31.9999 24.4 31.9999 26.54 30.9103C28.42 29.9506 29.95 28.421 30.91 26.5416C31.43 25.522 31.7 24.3623 31.84 22.8228C27.22 22.133 19.36 20.9734 5.97998 19.014Z"
                  fill="#0B2283"
                ></path>
                <path
                  d="M28.75 12.2562C24.93 11.7163 7.71002 9.29708 5.72002 9.01716C5.02002 8.9172 4.88002 9.19711 5.08002 9.51701C7.74002 13.8956 12.17 21.2533 12.85 22.353C13.37 23.1927 13.8 23.3127 14.57 22.7829C15.51 22.1431 16.64 21.3733 17.74 20.6235C19.41 22.0231 20.49 23.0628 21.96 24.7223C22.1 24.8822 22.3 25.0322 22.48 24.7422C22.73 24.3324 23.9 20.5336 24.76 16.8147C24.87 16.3149 25.1 15.875 25.16 15.785C25.29 15.5651 25.51 15.2052 26.22 14.7554C27.36 14.0556 28.15 13.6357 28.72 13.3458C29.24 13.0759 29.45 12.9559 29.49 12.656C29.49 12.4661 29.51 12.3661 28.75 12.2562Z"
                  fill="#ACC5FF"
                ></path>
                <path
                  d="M28.75 12.2562C24.93 11.7163 7.71002 9.29708 5.72002 9.01716C5.02002 8.9172 4.88002 9.19711 5.08002 9.51701C7.74002 13.8956 12.17 21.2533 12.85 22.353C13.37 23.1927 13.8 23.3127 14.57 22.7829C15.51 22.1431 16.64 21.3833 17.74 20.6235C18.48 20.1037 20.46 18.8241 20.76 18.6741C21.2 18.4542 21.47 19.4239 21.8 21.3433C21.83 21.5333 21.95 21.7832 21.93 21.5133C21.86 20.3936 21.79 19.4239 21.76 19.024C21.71 18.3742 21.68 18.1443 20.86 17.6645C18.37 16.2349 11.55 12.5261 8.96002 11.1365C8.09002 10.6666 9.15002 10.9466 9.48002 11.0365C12.32 11.8163 20.54 14.1256 23.98 15.1253C24.58 15.2952 24.68 15.5451 24.54 16.3749C24.27 18.0643 23.56 21.3533 22.54 24.4124C22.51 24.5023 22.4 24.8422 22.29 24.8922C22.35 24.8722 22.41 24.8322 22.47 24.7323C22.72 24.3224 23.89 20.5236 24.75 16.8047C24.86 16.3049 25.09 15.865 25.15 15.7751C25.28 15.5551 25.5 15.1952 26.21 14.7454C27.35 14.0456 28.14 13.6257 28.71 13.3358C29.23 13.0659 29.44 12.9459 29.48 12.646C29.49 12.4661 29.51 12.3661 28.75 12.2562Z"
                  fill="white"
                ></path>
              </g>
            </svg>
            TestGlider
          </button>
        </Link>
        <Link to={"/tofel"} className="font-semibold hover:bg-gray-300 rounded-3xl p-2">TOEFL</Link>
        <Link to={"/Ielts"} className="font-semibold hover:bg-gray-300 rounded-3xl p-2">IELTS</Link>
        <Link className="font-semibold border-r-2 border-gray-300 w-28 hover:bg-gray-300 rounded-3xl p-2 text-center">
          Digital SAT
        </Link>
        <Link className="hover:bg-gray-300 rounded-3xl p-2">TUTOR</Link>
        <Link className="hover:bg-gray-300 rounded-3xl p-2">TG Study Abroad</Link>
      </div>
      <div>
        {login ? (
          <button
            className="bg-blue-600 p-3 text-white w-20 rounded-3xl font-bold hover:bg-blue-700"
            onClick={onLogout}
          >
            Logout
          </button>
        ) : (
          <button
            className="bg-blue-600 p-3 text-white w-20 rounded-3xl font-bold hover:bg-blue-700"
            onClick={onLogin}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
