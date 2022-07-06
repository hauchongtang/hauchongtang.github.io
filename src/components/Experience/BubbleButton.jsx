import React from "react";
import { Link, Chip } from '@mui/material';

const BubbleButton = ({ href, label, backgroundColor, textColor }) => {
  return (
    <>
      <Link href={href} sx={{ textDecoration: 'none', marginRight: '8px', marginTop: '2px' }}>
        <Chip
          sx={[
            { backgroundColor: backgroundColor, color: textColor },
            { "&:hover": { backgroundColor: backgroundColor } }
          ]}
          label={label}
          onClick={() => { }}
        />
      </Link>
    </>
  )
}

export default BubbleButton;