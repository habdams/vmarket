import UserSchema from "../../schema/userSchema";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

const User = UserSchema;

export const createNewUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = new User({ email, password: await hashPassword(password) });
    await user.save();

    const token = createJWT(user);
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export const signin = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ email });

  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "not authorised" });
  }

  const token = createJWT(user);
  res.json({ token, user: { id: user._id, email: user.email } });
};
