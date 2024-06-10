import Body from "./components/Body";
import Header from "./components/Header"
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import SuperTokens, { SuperTokensWrapper } from "supertokens-auth-react";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import Passwordless from "supertokens-auth-react/recipe/passwordless";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";
import { PasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/passwordless/prebuiltui';

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
        <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [PasswordlessPreBuiltUI])}
        <Route path="*" element={
            <div>
              <Header />
              <Body />
              <Footer />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}

export default App;
