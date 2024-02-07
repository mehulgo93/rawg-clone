const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-white dark:bg-black overflow-auto">
      <div className="max-w-screen-xl h-full w-full">{children}</div>
    </main>
  );
};

export default LandingLayout;
