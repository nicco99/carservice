const express = require("express");

const router = express.Router();

// Static pages
const staticPages = [
  { path: "/", view: "index" },
    { path: "/about", view: "about" },
     { path: "/booking", view: "booking" },
      { path: "/contact", view: "contact" },
        { path: "/team", view: "team" },
         { path: "/service", view: "service" },
{ path: "/testimonial", view: "testimonial" }
];

staticPages.forEach(({ path, view }) => {
  router.get(path, (req, res) => {
    if (path === "/change-password") {
      res.locals.resetToken = req.query;
    }
    res.render(view);
  });
});

// Protected dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    // const users = await findAll();
    // const Transactions = await allTransactions(req, res);
    // const totalProfits = await TotalProfits(req, res);
    // const totalMonthlyProfits = await TotalMonthlyProfits(req, res);
    // const activeUsers = users.filter(u => u.account_status > 1);
    // const premiumUsers = users.filter(u=>u.account_status > 2)
    // const recentUsers = await getRecentUsers(); // Fetch recent users
    // const transactions = await getTransactions(); // Fetch recent users

    res.render("dashboard", { currentPage: "dashboard" });
  } catch (err) {
    console.error("Error loading dashboard:", err);
    res.status(500).send("Internal Server Error");
  }
});

// Protected pages with data requirements
// const protectedPages = [
//   { path: "send-mails", view: "send-mails", data: (req,res) => ({}) }, 
//   { path: "form1", view: "form2", data: () => ({}) }, 
//   { path: "notifications", view: "notifications", data: () => ({}) }, 
//   { path: "transactions", view: "transactions", data: async (req, res) => ({ transactions: await allTransactions(req,res),moment: moment }) }, 
//   { path: "users", view: "users", data: async (req, res) => ({ users: await findAll() }) }, 
//   { path: "profile", view: "profile", data: (req) => ({ user: req.user }) } 
// ];

// Create dynamic routes for protected pages
// protectedPages.forEach(({ path, view, data }) => {
//   router.get(`/${path}`, requireAuth, async (req, res) => {
//     try {
//       const additionalData = data ? await data(req, res) : {};
//       res.render(view, { currentPage: path, ...additionalData });
//     } catch (err) {
//       console.error(`Error loading ${path}:`, err);
//       res.status(500).send("Internal Server Error");
//     }
//   });
// });

module.exports = router;
