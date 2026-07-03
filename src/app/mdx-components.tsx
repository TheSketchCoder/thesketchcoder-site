import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold tracking-tight text-[#fff8ec]">
        {children}
      </h1>
    ),
    p: ({ children }) => (
      <p className="mt-4 leading-7 text-[#d9c8ad]">{children}</p>
    ),
    ...components,
  };
}
