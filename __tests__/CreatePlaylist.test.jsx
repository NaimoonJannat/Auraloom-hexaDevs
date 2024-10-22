import CreatePlaylist from '@/Components/CreatePlaylist/CreatePlaylist';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '@/Components/Provider/AuthProvider/AuthProvider';
import axios from 'axios';

// Mock Firebase
jest.mock('firebase/app', () => ({
    initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
}));

// Mock Axios
jest.mock('axios');

describe('CreatePlaylist', () => {
    it('renders a heading', () => {
        // Mock Axios get to prevent API calls
        axios.get.mockResolvedValue({ data: [] });

        // Mock AuthContext value
        const mockUser = { email: 'test@example.com', displayName: 'Test User' };

        render(
            <AuthContext.Provider value={{ user: mockUser }}>
                <CreatePlaylist />
            </AuthContext.Provider>
        );

        // Assert that the heading "My Playlist" is rendered
        const heading = screen.getByText('My Playlist');
        expect(heading).toBeInTheDocument();
    });
});
