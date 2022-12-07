const User = require("../models/User");
const Deck = require("../models/Deck");
const JWT = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");
const { id } = require("@hapi/joi/lib/base");

const encodedToken = (userID) => {
  return JWT.sign(
    {
      iss: "Truong Bui",
      sub: userID,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 3),
    },
    JWT_SECRET
  );
};

// Su dung callback
// const index = (req, res, next) => {
//   User.find({}, (err, users) => {
//     if (err) {
//       next();
//     }
//     return res.status(200).json({ users });
//   });
// };

// Su dung promise
// const index = (req,res,next)=>{
//   User.find({}).then((users)=>{
//     return res.status(200).json({users})
//   }).catch((err)=>{
//     next(err)
//   })
// }

const index = async (req, res, next) => {
  // Su dung async-await
  const users = await User.find({});
  // throw new Error("random error!");
  return res.status(200).json({ users });
  // Bỏ try-catch vì đã sử dụng express-promise-router
};

const getUserDeck = async (req, res, next) => {
  const { userID } = req.params;
  const user = await User.findById(userID).populate("decks");
  return res.status(200).json({ decks: user.decks });
};

// const newUser = (req, res, next) => {
//   const newUser = new User(req.body);
//   console.log(req.body);

//   newUser.save((err, user) => {
//     console.error(err);
//     console.log(user);
//   });
// };

const create = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json({ user: newUser });
  } catch (error) {
    next(error);
  }
};

const createUserDeck = async (req, res, next) => {
  const { userID } = req.params;
  const newDeck = new Deck(req.body);
  const user = await User.findById(userID);
  newDeck.owner = user;
  await newDeck.save();
  user.decks.push(newDeck._id);
  await user.save();
  return res.status(201).json({ deck: newDeck });
};

const detail = async (req, res, next) => {
  // const userID = req.params.userID // Cach 1
  const { userID } = req.params; // Cach 2
  const user = await User.findById(userID);
  return res.status(200).json({ user });
};

const replace = async (req, res, next) => {
  const { userID } = req.params;
  const newUser = req.body;
  const result = await User.findByIdAndUpdate(userID, newUser);
  return res.status(200).json({ success: true });
};
const update = async (req, res, next) => {
  const { userID } = req.params;
  const newUser = req.body;
  const result = await User.findByIdAndUpdate(userID, newUser);
  return res.status(200).json({ success: true });
};

const secret = async (req, res, next) => {
  const user = req.user;
  return res.status(200).json({ user });
};
const signIn = async (req, res, next) => {
  const user = req.user;
  const token = encodedToken(req.user._id);
  res.setHeader("Authorization", token);
  return res.status(200).json({ success: true, user, token });
};
const signUp = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const foundUser = await User.findOne({ email });
  if (foundUser) {
    return res.status(403).json({ message: "Email đã tồn tại, vui lòng sử dụng email khác !" });
  }
  const newUser = new User({ firstName, lastName, email, password });
  newUser.save();
  const token = encodedToken(newUser._id);
  res.setHeader("Authorization", token);
  return res.status(201).json({ success: true, newUser, token });
};

module.exports = {
  getAll: index,
  postNewUser: create,
  getUser: detail,
  replaceUser: replace,
  updateUser: update,
  getUserDeck: getUserDeck,
  postUserDeck: createUserDeck,
  signUp: signUp,
  signIn: signIn,
  secret: secret,
};
