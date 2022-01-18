import React from "react";
import Axios from "axios";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from "@material-ui/core";

export default function AttachmentsDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [link, setLink] = React.useState("");
  const [attachments, setAttachments] = React.useState([]);

  React.useEffect(() => {
    let serverUrl =
      "https://37ac4910-074b-4faf-bde8-c37c90795f6b.mock.pstmn.io";

    Axios.get(
      `${serverUrl}/GetAttachments?queryString=${props.queryString}`
    ).then((res) => {
      setAttachments(res.data);
    });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setLink("");
  };

  const handleItemClick = (item) => {
    setLink(item.DownloadLink);
  };

  const handleClickDownload = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Attachments</Button>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Title</DialogTitle>
        <List>
          {attachments.map((item) => (
            <ListItem
              key={item.Name}
              button
              onClick={() => handleItemClick(item)}
            >
              <ListItemText primary={item.Name} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ width: "100%" }} />
        <div>
          {link && <Button onClick={handleClickDownload}>Download</Button>}
        </div>
      </Dialog>
    </>
  );
}
