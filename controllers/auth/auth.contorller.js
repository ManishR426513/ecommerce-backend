import express from "express";
import { compairPassword, hashPassword } from "../../helpers/authHelper.js";
import userModel from "../../models/Users/user.schema.js";
import {
  ErrorResponse,
  notFoundResponse,
  successResponseWithData,
} from "../../helpers/apiResponse.js";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, profilePic, role } = req.body;

    //check email

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return ErrorResponse(res, "User already Exist");
    }
    //password Hashing
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      profilePic,
      role,
    }).save();

    return successResponseWithData(res, "User Created Sucefully", user);
  } catch (err) {
    console.log(err);

    res.status(500).send({
      success: false,
      message: "Error while Registering",
      err,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) {
      return notFoundResponse(res, "email not found");
    }

    //compare Password
    console.log(password, user.password);
    const match = await compairPassword(password, user.password);
    if (!match) {
      return ErrorResponse(res, " Password wrong");
    }
  
  /*  const additionalData = {
      role: user.role,
      profilePic: user.profilePic,

      email: user.email,
      name: user.name,

      password: user.password,
      createdAt: user.createdAt,
    };
    */

    return successResponseWithData(res, "Login successfully", {
      user: {
        id: user._id,
        name: user.name,

        profilePic: user.profilePic,

        email: user.email,

        role: user.role,
      },
     
    });
  } catch {
    res.status(500).send({
      success: false,
      message: "Error while login.....",
    });
  }
};
