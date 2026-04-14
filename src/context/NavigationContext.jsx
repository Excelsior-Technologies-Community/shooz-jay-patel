import { createContext, useState, useCallback, useContext } from "react";

export const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [currentPage, setCurrentPage] = useState("home");
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);

  const navigateTo = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const toggleCartSidebar = useCallback(() => {
    setIsCartSidebarOpen((prev) => !prev);
  }, []);

  const openCartSidebar = useCallback(() => {
    setIsCartSidebarOpen(true);
  }, []);

  const closeCartSidebar = useCallback(() => {
    setIsCartSidebarOpen(false);
  }, []);

  const value = {
    currentPage,
    navigateTo,
    isCartSidebarOpen,
    toggleCartSidebar,
    openCartSidebar,
    closeCartSidebar,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within NavigationProvider");
  }
  return context;
}
