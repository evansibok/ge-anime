import NextLink from "next/link";
import { SaasProvider } from "@saas-ui/react";
import theme from "@/theme";

const Link = (props) => {
  return <NextLink {...props} legacyBehavior />;
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SaasProvider linkComponent={Link} theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </SaasProvider>
  );
}
