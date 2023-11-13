import { PDFViewer } from "@react-pdf/renderer";
import Resume from "./Resume";

export default () => (
  <PDFViewer style={{ width: "100%", height: "100%" }}>
    <Resume />
  </PDFViewer>
);
