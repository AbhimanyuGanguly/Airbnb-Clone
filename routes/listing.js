const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

router.route("/")
  .get(wrapAsync(async (req, res) => {
    const { category } = req.query; // Extract category from query parameter
    let listings;
    if (category) {
      listings = await Listing.find({ category: category }); // Fetch listings based on category
    } else {
      listings = await Listing.find(); // Fetch all listings if no category is provided
    }
    res.render("listings/index.ejs", { allListings: listings });
  }))   
  .post(isLoggedIn, upload.single('listing[image]'), validateListing, wrapAsync(listingController.createListing))
  .get(wrapAsync(listingController.showSearch));

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm );

router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit",isLoggedIn,isOwner, wrapAsync(listingController.renderEditForm));
module.exports = router;