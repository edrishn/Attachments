import AttachmentsDialog from "./AttachmentsDialog";

export default function App() {
  let serverURL = "https://37ac4910-074b-4faf-bde8-c37c90795f6b.mock.pstmn.io";
  return (
    //Test
    <div className="App">
      <AttachmentsDialog serverUrl={serverURL} queryString="Product/1" />
    </div>
  );
}
