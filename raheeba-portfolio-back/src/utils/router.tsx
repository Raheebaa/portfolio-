import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface RouterContextType {
  path: string;
  navigate: (to: string, options?: { replace?: boolean; state?: any }) => void;
  params: Record<string, string>;
}

const RouterContext = createContext<RouterContextType>({
  path: '/',
  navigate: () => {},
  params: {},
});

export const useRouter = () => useContext(RouterContext);
export const useNavigate = () => {
  const { navigate } = useContext(RouterContext);
  return navigate;
};
export const useLocation = () => {
  const { path } = useContext(RouterContext);
  return { pathname: path, search: window.location.search, hash: window.location.hash };
};
export const useParams = <T extends Record<string, string>>(): T => {
  const { params } = useContext(RouterContext);
  return params as T;
};

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [path, setPath] = useState<string>(() => {
    // Normal browser path or hash fallback (e.g. for hash-based SPA if needed)
    return window.location.pathname || '/';
  });

  const [params, setParams] = useState<Record<string, string>>({});

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL and path
  const navigate = useCallback((to: string, options?: { replace?: boolean; state?: any }) => {
    // Check if it's a section anchor link on the current page
    if (to.startsWith('#')) {
      const element = document.querySelector(to);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.pushState(options?.state || null, '', to);
      return;
    }

    // If navigating to home with hash
    if (to.startsWith('/#')) {
      if (window.location.pathname !== '/') {
        window.history.pushState(options?.state || null, '', to);
        setPath('/');
        setTimeout(() => {
          const hash = to.replace('/#', '#');
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const hash = to.replace('/', '');
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(options?.state || null, '', to);
      }
      return;
    }

    if (options?.replace) {
      window.history.replaceState(options?.state || null, '', to);
    } else {
      window.history.pushState(options?.state || null, '', to);
    }
    setPath(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Extract params based on route patterns
  useEffect(() => {
    // Check for /projects/:slug
    const projectMatch = path.match(/^\/projects\/([a-zA-Z0-9_-]+)/);
    if (projectMatch) {
      setParams({ slug: projectMatch[1] });
      return;
    }

    // Check for /notes/:slug
    const noteMatch = path.match(/^\/notes\/([a-zA-Z0-9_-]+)/);
    if (noteMatch) {
      setParams({ slug: noteMatch[1] });
      return;
    }

    setParams({});
  }, [path]);

  return (
    <RouterContext.Provider value={{ path, navigate, params }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
  replace?: boolean;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, replace, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      !e.defaultPrevented &&
      e.button === 0 && // Left click
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !to.startsWith('http') &&
      !to.startsWith('mailto:') &&
      !to.startsWith('tel:')
    ) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
