import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Script from 'next/script'

export default function feedBackInvolve(props) {
  return(
    <>
    <Box sx={{backgroundColor: "#C0D5CD"}}>
      <Toolbar />
      <div className="involveme_embed" data-project="feedback-zur-beta-version-1" dataEmbedMode="fullscreen">
        <Script src="https://manuelnenninger.involve.me/embed"></Script>
      </div>
    </Box>
    </>
  )
}
