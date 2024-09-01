import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';

const SideBarList = ({
    primary,
    open
}) => {
  return (
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>console.log("hey")}>
              <ListItemButton
                sx={[{
                    minHeight: 48,
                    px: 2.5,
                  },
                  open? {justifyContent: 'initial'}: {justifyContent: 'center'},
                ]}
              >
                <ListItemIcon
                  sx={[{
                      minWidth: 0,
                      justifyContent: 'center',
                    },
                    open? {mr: 3}: {mr: 'auto'}
                  ]}
                >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText
                  primary={primary}
                  sx={[open ? {opacity: 1}: {opacity: 0}]}
                />
              </ListItemButton>
            </ListItem>
  )
}

export default SideBarList