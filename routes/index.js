const express = require("express");
// const { getCurrentUser, requireAuth, clearTokenCookie } = require("../middleware/authMiddleware");
const router = express.Router();

// Import route modules
// const userRouter = require("./user");
// const loginRouter = require("./login");
const pageRoutes = require("./pagesRoutes");
const errorRoutes = require("./errorRoutes");

// Middleware to set the current user
// router.get("*", getCurrentUser);


// Use page routes
router.use("/", pageRoutes);
// router.use("/send-email", mailsRouter);
// User authentication routes
// router.use("/user", userRouter);
// router.use("/user-login", loginRouter);
// router.use("/transactions", transactionsRouter);

// Logout route
// router.get("/logout", requireAuth, (req, res) => {
//   clearTokenCookie(res);
//   res.redirect("/login");
// });

// Use error handling routes
router.use(errorRoutes);

module.exports = router;
