const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-6">
      {children}
    </div>
  );
};

export default AuthLayout;
