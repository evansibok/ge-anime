import NextLink from "next/link";
import { SaasProvider } from "@saas-ui/react";
import theme from "@/theme";

const Link = (props) => {
  return <NextLink {...props} legacyBehavior />;
};

export default function App({ Component, pageProps }) {
  return (
    <SaasProvider linkComponent={Link} theme={theme}>
      <Component {...pageProps} />
    </SaasProvider>
  );
}
