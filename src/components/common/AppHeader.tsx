import { Center, Container, createStyles, Header } from "@mantine/core";
import { AppLogo } from "./AppLogo";
import { AppMenu } from "./AppMenu";
import { LanguagePicker } from "./LanguagePicker";

const HEADER_HEIGHT = 70;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export function AppHeader() {
  const { classes, cx } = useStyles();
  //   const { address } = useMetaMask();

  return (
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container className={classes.inner}>
        <AppLogo />
        <Center>
          <LanguagePicker />
          <div style={{ width: 10 }} />
          {/* {address ? <AppMenu /> : <ConnectWallet />} */}
          <AppMenu />
        </Center>
      </Container>
    </Header>
  );
}
