const express = require("express");
const {
  auth: authReddit,
  authCallback: authRedditCallback
} = require("../../services/reddit");
const UserService = require("../../services/users");
const {
  authInstagram,
  authInstagramCallback,
  authInstagramAccessToken
} = require("../../services/instagram");
const AuthenticationMiddleware = require("../../middlewares/Authentication");

const router = express.Router();

router.get(
  "/me",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.me(request, response);
  }
);

router.post("/signin", async (request, response) => {
  return await UserService.signin(request, response);
});

router.post("/signup", async (request, response) => {
  return await UserService.signup(request, response);
});

router.post(
  "/onboard",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.onboard(request, response);
  }
);

router.get(
  "/members",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.listMembers(request, response);
  }
);

router.post(
  "/members",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.inviteMember(request, response);
  }
);

router.put(
  "/profile",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.updateProfile(request, response);
  }
);

router.put(
  "/workspace",
  AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await UserService.updateWorkspace(request, response);
  }
);

router.get(
  "/auth/reddit",
  // AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await authReddit(request, response);
  }
);

router.get(
  "/auth/reddit/callback",
  // AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await authRedditCallback(request, response);
  }
);

router.get(
  "/auth/instagram",
  // AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await authInstagram(request, response);
  }
);

router.get(
  "/auth/instagram/callback",
  // AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await authInstagramCallback(request, response);
  }
);

router.post(
  "/auth/instagram/callback",
  // AuthenticationMiddleware.authenticate.bind(),
  async (request, response) => {
    return await authInstagramAccessToken(request, response);
  }
);

module.exports = router;
