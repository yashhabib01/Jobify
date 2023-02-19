import { NotFoundError } from "../errors/index.js";
const notFoundMiddleware = (req, res) => {
  throw new NotFoundError("Route does note exits");
  // res.status(404).send("Route does not exits");
};

export default notFoundMiddleware;
