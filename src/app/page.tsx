"use client";

import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, LetterFx } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
  const links = [
    { href: "http://https://explorer.capheusnode.com/", title: "Explorer", description: "" },
    { href: "http://www.capheusnode.com/", title: "Services", description: "" },
    { href: "http://www.capheusnode.com/", title: "Introductions", description: "" },
  ];

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
      style={{
        backgroundImage: `url('/capheus.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh'
      }}
    >
      {/* Sosyal medya butonları */}
      <Flex as="header" fillWidth justifyContent="flex-end" paddingX="l" paddingY="s" gap="12">
        <Button href="https://github.com/Capheus11" prefixIcon="github" size="l" variant="tertiary">
          GitHub
        </Button>
        <Button href="https://x.com/OzzyyDebreli" prefixIcon="twitter" size="l" variant="tertiary">
          Twitter
        </Button>
        <Button href="https://t.me/c/2355073106/9070" prefixIcon="telegram" size="l" variant="tertiary">
          Telegram
        </Button>
      </Flex>

      {/* Ana içerik */}
      <Flex as="section" fillWidth maxWidth={68} direction="column" alignItems="center" flex={1}>
        <Flex as="main" direction="column" justifyContent="center" fillWidth fillHeight padding="l" gap="l">
          <Flex mobileDirection="column" fillWidth gap="24" alignItems="center">
            <Flex position="relative" flex={2} paddingTop="56" paddingX="xl" alignItems="center" justifyContent="center">
              <img
                src="/coconode.png"
                alt="My Logo"
                style={{ width: '400px', height: 'auto' }}
              />
            </Flex>

            <Flex position="relative" flex={4} gap="24" marginBottom="104" direction="column" alignItems="center">
              <Heading wrap="balance" variant="display-strong-xs" style={{ textAlign: 'center', fontFamily: 'monospace' }}>
                <div style={{ marginTop: '150px' }}>
                  <LetterFx trigger="instant">
                    The crypto world is an ecosystem that combines financial freedom and digital innovation with decentralization.
                  </LetterFx>
                </div>
              </Heading>
            </Flex>
          </Flex>

          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(3, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            {links.map((link) => (
              <Link target="_blank" style={{ padding: 'var(--responsive-space-l)' }} key={link.href} href={link.href}>
                <Flex fillWidth paddingY="8" gap="8" direction="column">
                  <Flex fillWidth gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  {link.description && (
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {link.description}
                    </Text>
                  )}
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>

      <Flex as="footer" fillWidth paddingX="l" paddingY="m" justifyContent="space-between"></Flex>
    </Flex>
  );
}
