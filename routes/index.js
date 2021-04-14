const express = require('express');
const { route } = require('./api');
const router = express.Router();
const apiRouter = require('./api');
router.use('/api', apiRouter);

//Static routes
// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve frontend's index.html file at the root route
  route.get('/', (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, '../../frontend', 'build', 'index.html')
    )
  })

  //Serve static assets in the frontend's build folder
  router.use(express.static(path.resolve('../frontend/build')))

  //Serve the frontend's index.html file at all other routes NOT starting with /api
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie("XSRF-TOKEN", req.csrfToken());
    res.sendFile(
      path.resolve(__dirname, "../../frontend", "build", "index.html")
    );
  });
}

module.exports = router;