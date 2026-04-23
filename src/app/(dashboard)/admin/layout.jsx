import DashboardWrapper from "@/components/dashboard/DashboardWrapper";
import React from "react";

export const metadata = {
  title: "Admin Dashboard | Style Bd",
  description: "Manage your Style Bd and orders by admin",
};

const DashboardLayout = ({ children }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default DashboardLayout;
