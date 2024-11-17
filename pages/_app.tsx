import type { AppProps } from "next/app";

import { AuthProvider } from "@saas-ui/auth";
import { SaasProvider } from "@saas-ui/react";
import { Layout } from "components/layout";

import theme from "../theme";

function MyApp({ Component, pageProps, router }: AppProps) {
  const { announcement, header, footer } = pageProps;
  //Render layout if not path is not docs, otherwise render the component alone
  if (router.pathname.startsWith("/docs")) {
    return <Component {...pageProps} />;
  }

  return (
    <SaasProvider theme={theme}>
      <Layout
        announcementProps={announcement}
        headerProps={header}
        footerProps={footer}
      >
        <Component {...pageProps} />
      </Layout>
    </SaasProvider>
  );
}

export default MyApp;
