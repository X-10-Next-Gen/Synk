import { useState } from "react";

const ProfileSettings = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "AI Developer | Innovator | Tech Enthusiast",
    password: "",
    confirmPassword: "",
    twoFactorAuth: false,
    profilePicture: null as string | null,
    paymentMethod: "paypal", // Default payment method
    paypalEmail: "",
    stripeId: "",
    cryptoWallet: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, profilePicture: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (profile.password && profile.password !== profile.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Profile updated successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">Profile Settings</h1>
      <p className="text-gray-300 mb-6">Update your profile and account settings.</p>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg">
        {/* Profile Picture Upload */}
        <div className="mb-6 text-center">
          {profile.profilePicture ? (
            <img
              src={profile.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-3 border-2 border-blue-400"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-3 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
          <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="hidden" id="profile-pic" />
          <label htmlFor="profile-pic" className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Upload Picture
          </label>
        </div>

        {/* Profile Details */}
        <div className="mb-4">
          <label className="text-white block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        <div className="mb-4">
          <label className="text-white block mb-1">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded resize-none"
          />
        </div>

        {/* Payment Methods */}
        <div className="mb-6">
          <label className="text-white block mb-1">Select Payment Method</label>
          <select
            name="paymentMethod"
            value={profile.paymentMethod}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
          >
            <option value="paypal">PayPal</option>
            <option value="stripe">Stripe</option>
            <option value="crypto">Crypto</option>
          </select>
        </div>

        {/* Payment Details */}
        {profile.paymentMethod === "paypal" && (
          <div className="mb-4">
            <label className="text-white block mb-1">PayPal Email</label>
            <input
              type="email"
              name="paypalEmail"
              placeholder="Enter your PayPal email"
              value={profile.paypalEmail}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>
        )}

        {profile.paymentMethod === "stripe" && (
          <div className="mb-4">
            <label className="text-white block mb-1">Stripe ID</label>
            <input
              type="text"
              name="stripeId"
              placeholder="Enter your Stripe ID"
              value={profile.stripeId}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>
        )}

{profile.paymentMethod === "crypto" && (
  <div className="mb-4">
    <label className="text-white block mb-1">Crypto Wallet Address</label>
    <input
      type="text"
      name="cryptoWallet"
      placeholder="Enter your USDT (TRC20) wallet address"
      value={profile.cryptoWallet}
      onChange={handleChange}
      className="w-full p-2 bg-gray-700 text-white rounded"
    />
  </div>
)}


        {/* Two-Factor Authentication */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            checked={profile.twoFactorAuth}
            onChange={() => setProfile({ ...profile, twoFactorAuth: !profile.twoFactorAuth })}
            className="mr-2"
          />
          <label className="text-white">Enable Two-Factor Authentication (2FA)</label>
        </div>

        {/* Save Button */}
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;
