import { Page, Text, View, Document, StyleSheet, Font, Image, Link } from "@react-pdf/renderer";
import NeoTechBold from "../NeoTech_Bold.otf";
import NeoTechStandard from "../NeoTechStd-Black.otf";
import OpenSansStandard from "../OpenSans-Regular.ttf";
import OpenSansBold from "../OpenSans-Bold.ttf";
import OpenSansItalic from "../OpenSans-Italic.ttf";
import { IJobExperience, IJobItem, MyHistory } from "./JobHistory";

import GitHubLogo from "./assets/Github.png";
import LinkedInLogo from "./assets/LinkedIn.png";
import GmailLogo from "./assets/Gmail.png";

Font.registerHyphenationCallback((words) => [words]);

Font.register({
  family: "NeoTech",
  fonts: [{ src: NeoTechStandard }, { src: NeoTechBold, fontWeight: "bold" }],
});

Font.register({
  family: "OpenSans",
  fonts: [{ src: OpenSansStandard }, { src: OpenSansBold, fontWeight: "bold" }, { src: OpenSansItalic, fontStyle: "italic" }],
});

// Create Document Component
export default () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Heading />
      <Externals />
      <SideBar />
      <Experience />
      <Divider />
    </Page>
  </Document>
);

export const Heading = () => (
  <View style={styles.heading}>
    <Text style={{ position: "absolute", top: 20, left: 50, width: 200 }}>Jayden</Text>
    <Text style={{ position: "absolute", top: 60, left: 160, width: 200 }}>Whiley</Text>
  </View>
);

export const Divider = () => (
  <View style={{ position: "absolute", top: 130, left: 175, backgroundColor: "#2b80d8", height: 680, width: 4, borderRadius: 5 }}></View>
);

export const Externals = () => (
  <View style={{ position: "absolute", top: 20, right: 0, width: 180 }}>
    <View style={{ display: "flex", flexDirection: "row", opacity: 0.5 }}>
      <Image style={{ width: 20, height: 20, marginRight: 5 }} src={LinkedInLogo}></Image>
      <Link src="https://www.linkedin.com/in/JWhiley/">
        <Text style={{ fontFamily: "OpenSans", fontSize: 12 }}>JWhiley</Text>
      </Link>
    </View>
    <View style={{ display: "flex", flexDirection: "row", opacity: 0.5, marginTop: 8 }}>
      <Image style={{ width: 20, height: 20, marginRight: 5 }} src={GitHubLogo}></Image>
      <Link src="https://github.com/jaydenwhiley">
        <Text style={{ fontFamily: "OpenSans", fontSize: 12 }}>JaydenWhiley</Text>
      </Link>
    </View>
    <View style={{ display: "flex", flexDirection: "row", opacity: 0.5, marginTop: 8 }}>
      <Image style={{ width: 20, height: 20, marginRight: 5 }} src={GmailLogo}></Image>
      <Link src="mailto:jaydenwhiley@gmail.com">
        <Text style={{ fontFamily: "OpenSans", fontSize: 12 }}>JaydenWhiley@gmail.com</Text>
      </Link>
    </View>
  </View>
);

export const SideBar = () => (
  <View
    style={{
      position: "absolute",
      top: 130,
      left: 10,
      width: 160,
      padding: "0px 5px",
    }}>
    <Education />
    <Skills />
    <Avocational />
  </View>
);

export const Experience = () => (
  <View style={{ position: "absolute", top: 130, left: 200, width: 380, borderColor: "black", borderWidth: 0 }}>
    <Text style={styles.mainTitle}>Experience</Text>
    {MyHistory.map((x) => (
      <JobListing {...x} />
    ))}
  </View>
);

export const JobListing = ({ Title, Period, Company, Subtitle, Items }: IJobExperience) => (
  <View style={{ fontSize: 10, marginTop: 10 }}>
    <View style={{ display: "flex", flexDirection: "row" }}>
      <Text style={{ fontWeight: "bold" }}>{Title}</Text>
      <Text style={{ margin: "0px 5px" }}>|</Text>
      <Text>{Company}</Text>
      <Text style={{ margin: "0px 5px" }}>|</Text>
      <Text>{Period}</Text>
    </View>
    <Text style={{ marginTop: 5 }}>{Subtitle}</Text>
    <View style={{ fontSize: 10 }}>
      {Items.map((x) => (
        <JobItem {...x} />
      ))}
    </View>
  </View>
);

export const JobItem = ({ Title, Notes }: IJobItem) => (
  <View style={{ marginTop: 10 }}>
    <Text style={{ fontStyle: "italic" }}>{Title}</Text>
    <View>
      {Notes.map((x) => (
        <Text style={{ marginTop: 5, marginLeft: 5, fontSize: 9 }}>- {x}</Text>
      ))}
    </View>
  </View>
);

export const Education = () => (
  <View>
    <Text style={styles.sectionTitle}>Education</Text>
    <View style={styles.sectionContent}>
      <Text>Queensland University</Text>
      <Text>Of Technology</Text>
      <Text style={{ marginTop: 5 }}>Bachelor of Electrical</Text>
      <Text>Engineering</Text>
    </View>
  </View>
);

export const Skills = () => (
  <View style={{ marginTop: 20 }}>
    <Text style={styles.sectionTitle}>Skills</Text>
    <View style={styles.sectionContent}>
      <Text>Typescript, Javascript</Text>
      <Text>React & React Native</Text>
      <Text>Redux, Material UI</Text>
      <Text>HTML, CSS</Text>
      <Text style={{ marginTop: 20 }}>Node.js, Next.js, .Net (C#)</Text>
      <Text>SignalR / WebSockets</Text>
      <Text>PostgreSQL & Marten</Text>
      <Text>MongoDB</Text>
      <Text style={{ marginTop: 20 }}>Azure, Heroku</Text>
      <Text>Azure DevOps, Docker</Text>

      <Text style={{ marginTop: 20 }}>OSX, Linux (Ubuntu Mate)</Text>
    </View>
  </View>
);

export const Avocational = () => (
  <View style={{ marginTop: 20 }}>
    <Text style={styles.sectionTitle}>Avocational</Text>
    <View style={styles.sectionContent}>
      <Text>Flutter (Dart), Svelte</Text>
      <Text>Solidity, Web3.js</Text>
      <Text>Arduino (C/C++)</Text>
      <Text>Java, Python</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  SideBar: {},
  sectionContent: {
    marginTop: 10,
    textAlign: "right",
    fontSize: 12,
  },
  mainTitle: {
    fontFamily: "NeoTech",
    fontWeight: "bold",
    fontSize: "20pt",
    color: "#2b80d8",
  },
  sectionTitle: {
    textAlign: "right",
    fontFamily: "NeoTech",
    fontWeight: "bold",
    fontSize: "20pt",
    color: "#2b80d8",
  },
  heading: {
    position: "relative",
    fontFamily: "NeoTech",
    fontWeight: "bold",
    fontSize: "40pt",
    color: "#2b80d8",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "white",
    fontFamily: "OpenSans",
  },
  section: {
    fontFamily: "NeoTech",
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
