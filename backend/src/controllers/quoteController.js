import axios from "axios";

export const getQuotes = async (req, res, next) => {
  try {
    const response = await axios.get("https://type.fit/api/quotes");
    const quotes = response.data;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    res.json(randomQuote);
  } catch (error) {
    next(error);
  }
};
