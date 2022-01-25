import { forwardRef } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MuiLink from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import { isUriScheme } from "./utils";
import clsx from "clsx";

const Anchor = styled("a")({});

interface NextLinkComposedProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">,
    Omit<import("next/link").LinkProps, "href" | "as"> {
  to: import("next/link").LinkProps["href"];
  linkAs?: import("next/link").LinkProps["as"];
  href?: import("next/link").LinkProps["href"];
}

export const NextLinkComposed = forwardRef<
  HTMLAnchorElement,
  NextLinkComposedProps
>(function NextLinkComposed(props, ref) {
  const {
    children,
    href,
    linkAs,
    locale,
    prefetch,
    replace,
    scroll,
    shallow,
    to,
    ...other
  } = props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
    >
      <Anchor ref={ref} {...other}>
        {children}
      </Anchor>
    </NextLink>
  );
});

export type LinkProps = {
  activeClassName?: string;
  as?: import("next/link").LinkProps["as"];
  href: import("next/link").LinkProps["href"];
  noLinkStyle?: boolean;
} & Omit<NextLinkComposedProps, "to" | "linkAs" | "href"> &
  Omit<import("@mui/material/Link").LinkProps, "href" | "children">;

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  props,
  ref
) {
  const {
    activeClassName = "active",
    as: linkAs,
    children,
    className: classNameProps,
    href,
    noLinkStyle,
    role, // Link don't have roles.
    ...other
  } = props;

  const ExternalLink = noLinkStyle ? Anchor : MuiLink;

  const router = useRouter();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = clsx(classNameProps, {
    ...(router.pathname === pathname && { activeClassName }),
  });

  const isExternal = typeof href === "string" && isUriScheme(href);

  return isExternal ? (
    <ExternalLink className={className} href={href} ref={ref} {...other}>
      {children}
    </ExternalLink>
  ) : (
    <MuiLink
      component={NextLinkComposed}
      className={className}
      linkAs={linkAs}
      ref={ref}
      to={href}
      {...other}
    >
      {children}
    </MuiLink>
  );
});

export default Link;
