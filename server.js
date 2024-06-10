const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const Passwordless = require("supertokens-node/recipe/passwordless");
const cors = require("cors");
const {middleware} = require("supertokens-node/framework/express");

const express = require('express');
const app = express();


supertokens.init({
    framework: "express",
    supertokens: {
        // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
        connectionURI: "https://try.supertokens.com",
        // apiKey: <API_KEY(if configured)>,
    },
    appInfo: {
        // learn more about this on https://supertokens.com/docs/session/appinfo
        appName: "my-app",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
        apiBasePath: "/auth",
        websiteBasePath: "/auth"

    },
    recipeList: [
        Passwordless.init({
            flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
            contactMethod: "EMAIL_OR_PHONE"
        }),
        Session.init() // initializes session features
    ]
});

app.use(cors({
    origin: "http://localhost:3000",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

// IMPORTANT: CORS should be before the below line.
app.use(middleware());

app.listen(3001, (req, res) => {
    console.log("server is running");
})