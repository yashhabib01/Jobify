import { UnAuthenticatedError } from "../errors/index.js";
const checkPermission = (requestUser, resourceUserId) => {
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new UnAuthenticatedError("Not authorized to access the route");
};
export default checkPermission;
