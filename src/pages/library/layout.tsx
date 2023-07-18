export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>DACREED</h1>
      <main> {children}</main>
    </>
  );
}
