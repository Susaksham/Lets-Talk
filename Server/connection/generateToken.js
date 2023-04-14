import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
export const generateToken = async (id) => {
  try {
    const jwtToken = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log(jwtToken);
    return jwtToken;
  } catch (err) {
    console.log(err);
    return "wrong token";
  }
};
