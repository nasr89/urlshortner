const Url = require("../models/urlModel");
const validator = require("validator");

exports.createUrl = async (req, res) => {
  try {
    // Check if the longUrl is valid
    if (!validator.isURL(req.body.longUrl)) {
      return res.status(400).json({ message: "Please enter a valid url" });
    }

    // Check if the longUrl already exists
    const CheckUrl = await Url.findOne({ longUrl: req.body.longUrl });
    if (CheckUrl) {
      return res.status(400).json({ message: "Url already exists" });
    }

    // Generate a short URL
    const shortUrl = generateShortUrl();
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
