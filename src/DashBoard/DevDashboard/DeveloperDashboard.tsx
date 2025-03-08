import { Routes, Route } from "react-router-dom";
import DevDashboard from "./DevDashboard";
import ManageTools from "./Pages/ManageTools";
import Earnings from "./Pages/Earnings";
import ProfileSettings from "./Pages/ProfileSettings";
import Support from "./Pages/Support";

const DeveloperDashboard = () => {
  return (
    <DevDashboard>
      <Routes>
        <Route path="manage-tools" element={<ManageTools />} />
        <Route path="earnings" element={<Earnings />} />
        <Route path="support" element={<Support />} />
        <Route path="profile" element={<ProfileSettings />} />
      </Routes>
    </DevDashboard>
  );
};

export default DeveloperDashboard;
