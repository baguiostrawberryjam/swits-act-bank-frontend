function MainContent({ children }) {
  return (
    <main className="flex-1 overflow-auto bg-white p-6">
      {children}
    </main>
  );
}

export default MainContent;
