import { fireEvent, render, screen } from "@testing-library/react";
//import userEvent from "@testing-library/user-event";
import { AuthContext } from "@/Components/Provider/AuthProvider/AuthProvider";
import Navbar from "@/Components/Navbar/Navbar";
import { useRouter } from "next/navigation";

// Mock useRouter from next/navigation
jest.mock("next/navigation", () => ({
    useRouter: jest.fn(),
}));

jest.mock('firebase/app', () => ({
    initializeApp: jest.fn(),
}));

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
}));

describe("Navbar", () => {
    const mockLogout = jest.fn();
    const mockPush = jest.fn();

    beforeEach(() => {
        // Mock the router's push function
        useRouter.mockImplementation(() => ({ push: mockPush }));
    });

    afterEach(() => {
        // Clear all mocks between tests to avoid conflicts
        jest.clearAllMocks();
    });

    test("renders navbar correctly when user is logged in", () => {
        const user = {
            photoURL: "test-photo-url",
        };

        render(
            <AuthContext.Provider value={{ user, logout: mockLogout }}>
                <Navbar />
            </AuthContext.Provider>
        );

        // Check for the user avatar (adapt if necessary for Next.js image handling)
        const avatarImage = screen.getByRole("img");
        expect(avatarImage).toBeInTheDocument();
        expect(avatarImage).toHaveAttribute("src", user.photoURL);

        // Check for dashboard link
        expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
    });

    test("renders navbar correctly when user is logged out", () => {
        render(
            <AuthContext.Provider value={{ user: null, logout: mockLogout }}>
                <Navbar />
            </AuthContext.Provider>
        );

        // Check that the sign-in and sign-up links are rendered
        expect(screen.getByText(/sign-in/i)).toBeInTheDocument();
        expect(screen.getByText(/sign-up/i)).toBeInTheDocument();
    });

    test("navigates to search results on search submission", async () => {
        render(
            <AuthContext.Provider value={{ user: null, logout: mockLogout }}>
                <Navbar />
            </AuthContext.Provider>
        );

        const searchInput = screen.getByPlaceholderText(/search podcasts.../i);
        const searchButton = screen.getByRole("button"); // No name needed here since it's just an icon

        // Simulate typing and clicking search button
        await userEvent.type(searchInput, "test podcast");
        fireEvent.click(searchButton);

        // Verify that the router's push function was called with the correct URL
        expect(mockPush).toHaveBeenCalledWith("/podcast?search=test%20podcast");
    });

    test("calls logout function on logout button click", () => {
        const user = {
            photoURL: "test-photo-url",
        };

        render(
            <AuthContext.Provider value={{ user, logout: mockLogout }}>
                <Navbar />
            </AuthContext.Provider>
        );

        const logoutButton = screen.getByText(/log out/i);
        fireEvent.click(logoutButton);

        // Check if logout function was called
        expect(mockLogout).toHaveBeenCalled();
    });
});
