import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import Link from '@material-ui/core/Link';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';



export const staffListItems = (
  <div>
    <Link color="inherit" href="/" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />

      </ListItem>
    </Link>

    <Link color="inherit" href="/staff/dashboard" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>


    <Link color="inherit" href="/staff/leave" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Leave" />
      </ListItem>
    </Link>


    <Link color="inherit" href="/staff/profile" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
);

export const adminListItems = (
  <div>
    <Link color="inherit" href="/" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />

      </ListItem>
    </Link>

    <Link color="inherit" href="/admin/dashboard" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>


    <Link color="inherit" href="/admin/staffs" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Staffs" />
      </ListItem>
    </Link>
    <Link color="inherit" href="/admin/leaves" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <ContactPhoneIcon />
        </ListItemIcon>
        <ListItemText primary="Leaves" />
      </ListItem>
    </Link>


    <Link color="inherit" href="/admin/profile" underline='none'>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
  </div>
);

// export const secondaryListItems = (
//   <div>
//     <ListSubheader inset>Saved reports</ListSubheader>
//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItem>

//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//         <Profile />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItem>


//     <ListItem button>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItem>
//   </div>
// );