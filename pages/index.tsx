import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  Button,
  ButtonGroup,
  Icon,
  useBreakpointValue,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Metrists - Continues Deploymenyt for Books"
        description="Metrists is the Continues Publishing tool for Markdown files."
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  const fullWidthButtons = useBreakpointValue({ base: true, md: false });
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            width="100%"
            title={
              <FallInPlace>
                Write Markdown,
                <br /> Continuesly Publish.
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Publish your books through multiple channels, by simply pushing
                it to GitHub.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup
                pt="12"
                spacing={4}
                alignItems="center"
                width="100%"
                justifyContent="center"
              >
                <ButtonLink
                  colorScheme="primary"
                  size="lg"
                  href="/docs"
                  linkProps={{
                    //@ts-ignore
                    style: {
                      width: fullWidthButtons ? "100%" : "auto",
                    },
                  }}
                >
                  Documentation
                </ButtonLink>
                <Button
                  size="lg"
                  variant="outline"
                  display={{
                    base: "none",
                    md: "inline",
                  }}
                  leftIcon={
                    <Icon
                      as={FiCopy}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(-5px)",
                        },
                      }}
                    />
                  }
                >
                  npx metrists init
                </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem title="1. Write in Markdown">
        <Text color="muted" fontSize="lg">
          Each new markdown file is a chapter, with Frontmatter for metadata.
        </Text>
      </HighlightsItem>
      <HighlightsItem colSpan={[1, null, 2]} title="2. Execuate a Command">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Execute a single command for Metrists to turn your markdown files
            into a deployable Metrists project.
          </Text>
          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                npx
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                metrists publish
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="3. Push & Publish Your Book
"
      >
        <Text color="muted" fontSize="lg">
          Push your files to GitHub and connect your hosting service of choice,
          with no no additional configuration.
        </Text>
        <Wrap mt="8">
          {[
            "Vercel",
            "Netlify",
            "Coolify",
            "Railway",
            "Self-host",
            "Cloudflare (coming soon)",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="That's it"
        gradient={["pink.200", "purple.500"]}
      >
        <VStack alignItems="start">
          <Text>
            Push your Markdown files to GitHub and let Continues Deployment deal
            handle rest.
          </Text>
          <Box mt="3">
            <ButtonLink colorScheme="primary" size="md" href="/docs">
              Documentation
            </ButtonLink>
          </Box>
        </VStack>
      </HighlightsTestimonialItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      align="left"
      columns={{
        base: 1,
        md: 2,
        lg: 4,
      }}
      px={{
        base: 4,
        md: 8,
        lg: 8,
      }}
      iconSize={4}
      features={[
        {
          title: "Host Agnostic.",
          icon: FiBox,
          description:
            "Metrists is merely a tool that runs in your CI/CD. We don't care where you host your book.",
          variant: "inline",
        },
        {
          title: "Output-Agnostic.",
          icon: FiBox,
          description:
            "Though we only support web outputs right now, we'll soon support ePub files and audiobook.",
          variant: "inline",
        },
        {
          title: "Intuitive.",
          icon: FiLock,
          description:
            "With sensible defaults, Metrists stays out of your way. You'll rarely need to look at the docs.",
          variant: "inline",
        },
        {
          title: "Commercially Inviable",
          icon: FiCode,
          description:
            "While we'd love to make products around Metrists, we would (and will probably have to) do it for free!",
          variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []],
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support us by becoming a stargazer! 🚀 ",
        description:
          '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        href: "https://github.com/saas-js/saas-ui",
        action: false,
      },
    },
  };
}
