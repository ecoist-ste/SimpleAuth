import React, { createContext, useState, useContext } from 'react';
import { Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screens/LoginScreen';
import SignupScreen from './Screens/SignupScreen';

// Auth Context & Provider
type AuthContextType = {
  user: string | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  signup: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);

  const login = (email: string, password: string) => {
    // A simple placeholder login
    setUser(email);
    Alert.alert('Login Success', `Welcome, ${email}!`);
  };

  const signup = (email: string, password: string) => {
    // A simple placeholder signup
    setUser(email);
    Alert.alert('Signup Success', `Account created for ${email}!`);
  };

  const logout = () => {
    setUser(null);
    Alert.alert('Logout', 'You have been logged out.');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Stack & Navigation Setup
const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    </AuthProvider>
  );
}
