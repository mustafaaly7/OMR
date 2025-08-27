import SendResponse from "../helper/sendResponse.js";
import Subscription from "../models/subscriptionSchema.js";
import User from "../models/userSchema.js";
import { sendMail } from "../utils/nodeMailer.js";

export const userSubscription = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate required fields
    if (!email ) {
      return SendResponse(res, 400, true, null, "Email is required");
    }

    // Check if user already exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create user without license key (admin will add it later)
      user = await User.create({
        email,
      });
    }

    // Send email to admin
    const emailHtml = `
     <h2>New Subscription Request</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p>Status set to <strong>requested</strong>.</p>
      <p>Please review in the admin panel and approve / assign license when ready.</p>
    `;

    await sendMail(process.env.ADMIN_EMAIL, "New Subscription Request", emailHtml);

    return SendResponse(res, 200, false, user, "Subscription request sent to admin successfully");
  } catch (error) {
    return SendResponse(res, 500, true, null, error.message);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { mac, key } = req.body;

    // Validate input
    if (!mac || !key) {
      return SendResponse(res, 400, true, null, "MAC address and key are required.");
    }

    // Find user by license key
    const user = await User.findOne({ key });
    if (!user) {
      return SendResponse(res, 404, true, null, "Invalid license key.");
    }

    // Save MAC address if not already stored
    if (!user.mac) {
      user.mac = mac;
      await user.save();
    }

    // Optional: if you want to lock key to a specific MAC
    if (user.mac !== mac) {
      return SendResponse(res, 403, true, null, "This license key is already linked to another device.");
    }

    // Success response
    return SendResponse(res, 200, false, { email: user.email, key: user.key }, "Login successful.");
  } catch (error) {
    console.log(error.message);
    return SendResponse(res, 500, true, null, error.message);
  }
};
