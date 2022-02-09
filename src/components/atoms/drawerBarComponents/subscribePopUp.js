import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" fullWidth onClick={handleClickOpen}>
        Sign Up zur Release Version
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign Up</DialogTitle>
        <form action="https://web.us1.list-manage.com/subscribe/post?u=0e0ae2dacd97de1468fbc0eec&amp;id=8962cf87da" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
        <DialogContent>
          <DialogContentText>
            Du willst informiert werden, sobald die Web-App fertig ist? Hinterlasse uns deine Mail und wir benachrichtigen dich!
          </DialogContentText>
          {/*<DialogContentText>
            Oder hinterlasse uns dein Feedback. Es hilft uns, das Produkt so zu gestalten, dass es Dich auch wirklich unterstützt.
          </DialogContentText>*/}
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Box value="" name="b_0e0ae2dacd97de1468fbc0eec_8962cf87da">
            <Button onClick={handleClose} type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe">Subscribe</Button>
          </Box>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
