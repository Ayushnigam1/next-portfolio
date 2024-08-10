"use client";
import createCache, { Options } from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { PropsWithChildren, useState } from "react";

const theme = extendTheme({
  fontFamily: {
    display: "Open Sans",
  },
  shadow: {
    xs: `var(--joy-shadowRing, 0 0 #000),
        0 1px 2px 0 rgba(var(--joy-shadowChannel, 187 187 187) / 0.12)`,
    sm: `var(--joy-shadowRing, 0 0 #000),
        0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.11),
        0.5px 1.3px 1.8px -0.6px rgba(var(--joy-shadowChannel, 187 187 187) / 0.18),
        1.1px 2.7px 3.8px -1.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.26)`,
    md: `var(--joy-shadowRing, 0 0 #000),
        0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.12),
        1.1px 2.8px 3.9px -0.4px rgba(var(--joy-shadowChannel, 187 187 187) / 0.17),
        2.4px 6.1px 8.6px -0.8px rgba(var(--joy-shadowChannel, 187 187 187) / 0.23),
        5.3px 13.3px 18.8px -1.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.29)`,
    lg: `var(--joy-shadowRing, 0 0 #000),
        0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.11),
        1.8px 4.5px 6.4px -0.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.13),
        3.2px 7.9px 11.2px -0.4px rgba(var(--joy-shadowChannel, 187 187 187) / 0.16),
        4.8px 12px 17px -0.5px rgba(var(--joy-shadowChannel, 187 187 187) / 0.19),
        7px 17.5px 24.7px -0.7px rgba(var(--joy-shadowChannel, 187 187 187) / 0.21)`,
    xl: `var(--joy-shadowRing, 0 0 #000),
        0.3px 0.8px 1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.11), 
        1.8px 4.5px 6.4px -0.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.13), 
        3.2px 7.9px 11.2px -0.4px rgba(var(--joy-shadowChannel, 187 187 187) / 0.16), 
        4.8px 12px 17px -0.5px rgba(var(--joy-shadowChannel, 187 187 187) / 0.19), 
        7px 17.5px 24.7px -0.7px rgba(var(--joy-shadowChannel, 187 187 187) / 0.21), 
        10.2px 25.5px 36px -0.9px rgba(var(--joy-shadowChannel, 187 187 187) / 0.24), 
        14.8px 36.8px 52.1px -1.1px rgba(var(--joy-shadowChannel, 187 187 187) / 0.27), 21px 52.3px 74px -1.2px rgba(var(--joy-shadowChannel, 187 187 187) / 0.29)`,
  },
});

interface ThemeRegistryProps {
  options: Options;
}
export default function ThemeRegistry(
  props: PropsWithChildren<ThemeRegistryProps>
) {
  const { options, children } = props;

  const [{ cache, flush }] = useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <CssVarsProvider theme={theme}>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </CacheProvider>
  );
}