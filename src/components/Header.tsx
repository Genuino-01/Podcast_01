import React from 'react';
import { Mic2, Settings, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Mic2 className="h-8 w-8" />
            <h1 className="text-2xl font-bold">PodcastAI</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white/10 rounded-full">
              <Settings className="h-6 w-6" />
            </button>
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm">{user?.name}</span>
                <button
                  onClick={() => logout()}
                  className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full">
                <User className="h-5 w-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};