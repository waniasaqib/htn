import { Auth, Event } from './other';

export interface TypewriterTextProps {
    text: string;
    color?: string;
    fontSize?: string;
    delay?: boolean;
}

export interface LoginModalProps {
    showLoginForm: boolean;
    loginError: string;
    setLoginError: React.Dispatch<React.SetStateAction<string>>;
    setAuth: any;
    setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EventProps {
    auth: Auth;
    isLoading: boolean;
    events: Event[];
    searchTerm: string;
    selectedType: string;
}

export interface HeartAnimationProps {
  position: string;
  size?: string;
  type?: 'full' | 'empty';
  animationDelay?: number;
}

export interface HeaderProps {
    auth: Auth;
    handleLogout: () => void;
    setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SearchBarProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export interface EventFilterProps {
    setSelectedType: (type: string) => void;
    selectedType: string;
}

