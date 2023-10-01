import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function PageLayoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
