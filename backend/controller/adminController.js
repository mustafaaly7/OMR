import crypto from "crypto";
import SendResponse from "../helper/sendResponse.js";
import User from "../models/userSchema.js";
import Subscription from "../models/subscriptionSchema.js";
import { send } from "process";
import { sendMail } from "../utils/nodeMailer.js";

export const addUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate required fields
    if (!email ) {
      return SendResponse(res, 400, true, null, "Email is required");
    }

    // Find existing user
    let user = await User.findOne({ email });
    if (!user) {
      return SendResponse(res, 404, true, null, "User not found. Please ask the user to request a subscription first.");
    }

    // Generate license key
    const key = crypto.randomBytes(16).toString("hex");

    // Generate expiry date based on plan
    let keyExpiry = new Date();
    // if (subscriptionPlan === "Basic") 
      keyExpiry.setMonth(keyExpiry.getMonth() + 1);
    // if (subscriptionPlan === "Pro") keyExpiry.setMonth(keyExpiry.getMonth() + 6);
    // if (subscriptionPlan === "Enterprise") keyExpiry.setFullYear(keyExpiry.getFullYear() + 1);

    // Set dynamic price
    // let price = 0;
    // if (subscriptionPlan === "Basic") price = 9;
    // else if (subscriptionPlan === "Pro") price = 19;
    // else if (subscriptionPlan === "Enterprise") price = 60;

    // Create a new subscription for this user
    // const subscription = await Subscription.create({
    //   tier: subscriptionPlan,
    //   price,
    //   key,
    //   hasLicenseKey: true,
    //   keyExpiry,
    //   users: [user._id], // link this user to subscription
    // });

      user.key = key;
    user.hasLicenseKey = true;
    user.keyExpiry = keyExpiry;
    await user.save();

    // // Link subscription to user
    // if (!user.subscriptionIds.includes(subscription._id)) {
    //   user.subscriptionIds.push(subscription._id);
    //   user.requestedPlan = null // set requested plan
    //   await user.save();
    // }

    // Send email with license key
    const emailHtml = `
      <h2>Thank You for Your Purchase!</h2>
      <p>Hello,</p>
      <p>Thank you for purchasing .</p>
      <p>Your license key is: <strong>${key}</strong></p>
      <p>This key will expire on: <strong>${keyExpiry.toDateString()}</strong></p>
      <p>If you face any issues, please contact our support.</p>
      <br/>
      <p>Best Regards,<br/>Admin Team</p>
    `;

    await sendMail(email, "Your License Key & Subscription Details", emailHtml);

    return SendResponse(res, 201, false, user, "User subscription created successfully");
  } catch (error) {
    return SendResponse(res, 500, true, null, error.message);
  }
};



export const getAllUsers = async (req, res) => {
  try {
    // ?filter=requested | active | all
    const { filter = "all" } = req.query;

    let query = {};
    if (filter === "requested") {
      query = { hasLicenseKey: false };
    } else if (filter === "active") {
      query = { hasLicenseKey: true }; // optionally also add: , key: { $ne: null }
    } // else "all" -> {}

    const users = await User.find(query)
      .select("-__v")
      .sort({ createdAt: -1 });

    return SendResponse(res, 200, false, users, "Users retrieved successfully");
  } catch (error) {
    return SendResponse(res, 500, true, null, error.message);
  }
};


// export const getPlans = async(req,res)=>{
//     try {
//         const plans = await Subscription.find().populate("users", "email subscriptionPlan keyExpiry hasLicenseKey").select("-__v").sort({ createdAt: -1 });
//         if (!plans || plans.length === 0) {
//             return SendResponse(res, 404, true, null, "No plans found");
//         }
//         return SendResponse(res, 200, false, plans, "Plans retrieved successfully");


//     } catch (error) {
        
//         SendResponse(res, 500, true, null, error.message);
//     }
// }