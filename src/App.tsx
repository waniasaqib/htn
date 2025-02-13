import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { authAtom } from './utils/auth';
import FloatingHeartsBackground from './components/FloatingHeartsBackground';
import LoginModal from './components/LoginModal';
import Header from './components/Header';
import Events from './components/Events';
import EventFilter from './components/EventFilter';
import SearchBar from './components/SearchBar';
import { Event, Auth } from './types/other';

const App: React.FC = () => {
  const [auth, setAuth] = useAtom<Auth>(authAtom);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [loginError, setLoginError] = useState('');

  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ['events'],
    queryFn: async () => {
      const res = await fetch('https://api.hackthenorth.com/v3/events');
      const data: Event[] = await res.json();
      return data.sort((a, b) => a.start_time - b.start_time);
    },
  });

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, username: null });
  };

  return (
    <>
    {/* Main Container */}
    <div className="min-h-screen bg-black font-jetbrains text-custom-light overflow-hidden">
      <div className="relative w-full py-16 px-8">

        {/* Floating Hearts Background */}
        <FloatingHeartsBackground />
        
        {/* Main Container */}
        <div className="max-w-6xl mx-auto">

          {/* Header Section */}
          <Header auth={auth} handleLogout={handleLogout} setShowLoginForm={setShowLoginForm} />

          {/* Header Content */}
          <div className="mt-8 relative">

            {/* Search Bar */}
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {/* Event Type Filter */}
            <EventFilter setSelectedType={setSelectedType} selectedType={selectedType} />
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal
        showLoginForm={showLoginForm}
        setAuth={setAuth}
        setLoginError={setLoginError}
        loginError={loginError}
        setShowLoginForm={setShowLoginForm}
      />

      {/* Events Grid */}
      <Events auth={auth} isLoading={isLoading} events={events} searchTerm={searchTerm} selectedType={selectedType} />
    </div>
    </>
  );
};

export default App;
