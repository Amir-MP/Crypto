import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

const actions = [
  { icon: "G", name: "Google", link: "https://www.google.com/" },
  { icon: "B", name: "BlockChain", link: "https://www.blockchain.com/" },
  { icon: "I", name: "investopedia", link: "https://www.investopedia.com/" },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <SpeedDial
        ariaLabel="SpeedDial uncontrolled open example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
