
import Dashboard from "@material-ui/icons/Dashboard";

import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import StaffOverview from "./components/staff/Overview";
import StaffProfile from "./components/staff/Profile";
import StaffLeaveView from "./components/staff/LeavesView";
import AdminOverview from "./components/admin/Overview";
import StaffsView from "./components/admin/StaffsView";
import LeavesView from "./components/admin/LeavesView"
import AdminProfile from "./components/admin/Profile"


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: StaffOverview,
    layout: "/staff"
  },
  {
    path: "/profile",
    name: "User Profile",
    icon: Person,
    component: StaffProfile,
    layout: "/staff"
  },
  {
    path: "/leave",
    name: "Leave Requests",
    icon: "content_paste",
    component: StaffLeaveView,
    layout: "/staff"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: AdminOverview,
    layout: "/admin"
  },
  {
    path: "/staffs",
    name: "Staffs",
    icon: Dashboard,
    component: StaffsView,
    layout: "/admin"
  },
  {
    path: "/leaves",
    name: "Leaves",
    icon: Dashboard,
    component: LeavesView,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profiles",
    icon: Dashboard,
    component: AdminProfile,
    layout: "/admin"
  },
  
];

export default routes;
