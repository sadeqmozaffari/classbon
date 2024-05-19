export default function StudentLayout({children}: {children: React.ReactNode}) {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex  min-h-screen   justify-center items-center"></aside>
      <main>{children}</main>
    </>
  );
}
