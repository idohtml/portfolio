"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { ChevronLeft, ChevronRight, X, Menu } from "lucide-react";
import { navLinks } from "@/lib/constants";

// Navigation link component
// Replace the 'any' type with a proper interface
interface NavLink {
  href: string;
  label: string;
  icon: React.ElementType;
}

// Then update the NavLink component props
const NavLink = ({ 
  link, 
  isSidebarCollapsed, 
  isMobile, 
  onClick 
}: { 
  link: NavLink, 
  isSidebarCollapsed: boolean, 
  isMobile: boolean,
  onClick?: () => void 
}) => {
  const Icon = link.icon;
  
  return (
    <Link
      key={link.href}
      href={link.href}
      className={`flex items-center px-2 py-2.5 rounded-lg transition-all duration-200 hover:bg-accent dark:hover:bg-accent group ${
        isSidebarCollapsed && !isMobile ? "justify-center" : ""
      }`}
      title={isSidebarCollapsed ? link.label : ""}
      onClick={onClick}
    >
      <div className="flex items-center justify-center">
        <Icon
          size={isMobile ? 24 : 20}
          className={`${isMobile ? "mr-4 text-primary dark:text-primary" : "text-muted-foreground dark:text-muted-foreground group-hover:text-primary dark:group-hover:text-primary"}`}
          style={{ marginRight: isSidebarCollapsed && !isMobile ? 0 : isMobile ? undefined : "0.75rem" }}
        />
      </div>
      {(!isSidebarCollapsed || isMobile) && (
        <span className={`font-medium ${isMobile ? "text-lg" : ""} text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary`}>
          {link.label}
        </span>
      )}
    </Link>
  );
};

// User profile component
const UserProfile = ({ 
  isSidebarCollapsed, 
  isMobile, 
  onContactClick 
}: { 
  isSidebarCollapsed: boolean, 
  isMobile: boolean,
  onContactClick?: () => void 
}) => {
  if (isSidebarCollapsed && !isMobile) {
    return (
      <div className="flex justify-center">
        <Avatar className="h-10 w-10 border-2 border-primary dark:border-primary">
          <AvatarImage src="/avatar.jpg" alt="Jacob K" />
          <AvatarFallback className="bg-accent dark:bg-accent text-accent-foreground dark:text-accent-foreground">
            JK
          </AvatarFallback>
        </Avatar>
      </div>
    );
  }
  
  return (
    <>
      <div className={`flex items-center gap-3 ${isMobile ? "mb-6" : "px-2 py-3"}`}>
        <Avatar className={`${isMobile ? "h-12 w-12" : "h-10 w-10"} border-2 border-primary dark:border-primary`}>
          <AvatarImage src="/avatar.jpg" alt="Jacob K" />
          <AvatarFallback className="bg-accent dark:bg-accent text-accent-foreground dark:text-accent-foreground">
            JK
          </AvatarFallback>
        </Avatar>
        <div>
          <h3 className={`font-medium ${isMobile ? "text-lg" : ""} text-foreground dark:text-foreground`}>
            Jacob K
          </h3>
          <p className="text-sm text-muted-foreground dark:text-muted-foreground">
            Developer & Creator
          </p>
        </div>
      </div>

      <div className={isMobile ? "" : "mt-4"}>
        <Button
          variant={isMobile ? "default" : "outline"}
          className={`w-full ${!isMobile && "justify-start text-left text-sm border-dashed border-border dark:border-border"}`}
          asChild
        >
          <Link href="#contact" onClick={onContactClick}>
            {isMobile ? (
              "Available for projects"
            ) : (
              <span className="text-muted-foreground dark:text-muted-foreground">
                Available for projects
              </span>
            )}
          </Link>
        </Button>
      </div>
    </>
  );
};

// Custom hook for handling responsive behavior
const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  return { isMobile };
};

export function Sidebar() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useResponsive();

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile, isMobileMenuOpen]);

  const toggleSidebar = () => {
    if (isMobile) {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    } else {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Desktop sidebar
  const renderDesktopSidebar = () => (
    <aside
      className={`hidden md:flex ${
        isSidebarCollapsed ? "md:w-16" : "md:w-72"
      } bg-card dark:bg-card p-6 md:h-screen md:sticky md:top-0 border-r border-border dark:border-border shadow-sm flex-col transition-all duration-300 ease-in-out`}
    >
      {/* Toggle Button (visible only on desktop) */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-6 bg-primary text-primary-foreground rounded-full p-1 shadow-md z-10 hover:bg-primary/90 transition-all"
        aria-label={isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {isSidebarCollapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
      
      {/* App Logo/Brand */}
      <div
        className={`mb-8 px-2 flex ${
          isSidebarCollapsed ? "justify-center" : "justify-between"
        } items-center`}
      >
        {!isSidebarCollapsed && (
          <h2 className="text-xl font-bold text-primary dark:text-primary">
            Portfolio
          </h2>
        )}
        <ModeToggle />
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {navLinks.map((link) => (
          <NavLink 
            key={link.href}
            link={link} 
            isSidebarCollapsed={isSidebarCollapsed} 
            isMobile={false}
          />
        ))}
      </nav>

      {/* User Profile Section */}
      <div className="pt-6 mt-auto border-t border-border dark:border-border">
        <UserProfile 
          isSidebarCollapsed={isSidebarCollapsed} 
          isMobile={false}
        />
      </div>
    </aside>
  );

  // Mobile header
  const renderMobileHeader = () => (
    <div className="md:hidden flex justify-between items-center p-6 bg-card dark:bg-card border-b border-border dark:border-border">
      <h2 className="text-xl font-bold text-primary dark:text-primary">
        Portfolio
      </h2>
      <div className="flex items-center gap-3">
        <ModeToggle />
        <button
          onClick={toggleSidebar}
          className="bg-primary text-primary-foreground rounded-md p-1.5 shadow-md hover:bg-primary/90 transition-all"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>
    </div>
  );

  // Mobile menu overlay
  const renderMobileMenu = () => (
    <div 
      className={`md:hidden fixed inset-0 bg-background dark:bg-background z-50 transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Mobile menu header */}
        <div className="flex justify-between items-center p-6 border-b border-border dark:border-border">
          <h2 className="text-xl font-bold text-primary dark:text-primary">
            Menu
          </h2>
          <button
            onClick={toggleSidebar}
            className="bg-primary text-primary-foreground rounded-md p-1.5 shadow-md hover:bg-primary/90 transition-all"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        {/* Mobile navigation */}
        <nav className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href}
                link={link} 
                isSidebarCollapsed={false} 
                isMobile={true}
                onClick={closeMobileMenu}
              />
            ))}
          </div>
        </nav>
        
        {/* Mobile user profile */}
        <div className="p-6 border-t border-border dark:border-border">
          <UserProfile 
            isSidebarCollapsed={false} 
            isMobile={true}
            onContactClick={closeMobileMenu}
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {renderDesktopSidebar()}
      {renderMobileHeader()}
      {renderMobileMenu()}
    </>
  );
}
