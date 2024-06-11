import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Body from "./components/Body";
import Tofel from "./components/Tofel";
import Ielts from "./components/Ielts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
  appInfo: {
    appName: "my-app",
    apiDomain: "http://localhost:3001",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth"
  },
  recipeList: [
    Passwordless.init({
      contactMethod: "EMAIL_OR_PHONE"
    }),
    Session.init()
  ]
});

function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [PasswordlessPreBuiltUI])}
            <Route path="/" element={<Body />} />
            <Route path="/Tofel" element={<Tofel />} />
            <Route path="/Ielts" element={<Ielts />} />
          </Routes>
          <Faq />
          <Footer />
        </div>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
