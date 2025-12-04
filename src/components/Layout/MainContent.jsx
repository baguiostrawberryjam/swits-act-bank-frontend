function MainContent({ children }) {
  return (
    <main className="flex-1 overflow-auto p-6 bg-white">
      {children}
    </main>
  );
}

export default MainContent;
