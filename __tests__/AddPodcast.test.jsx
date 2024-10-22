// import AddPodcast from '@/Components/add-podcast/AddPodcast'
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import { AuthContext } from '@/Components/Provider/AuthProvider/AuthProvider';
// import React from 'react';


// // Mock axios
// jest.mock('axios');

// // Mock SweetAlert2
// jest.mock('sweetalert2', () => ({
//     fire: jest.fn(),
// }));

// // Mock Firebase authentication and app initialization
// jest.mock('firebase/auth', () => ({
//     getAuth: jest.fn(),
// }));

// jest.mock('firebase/app', () => ({
//     initializeApp: jest.fn(),
// }));

// describe('AddPodcast Component', () => {
//     const mockUser = { displayName: 'Test User' };

//     beforeEach(() => {
//         // Mock useContext to return mock user
//         jest.spyOn(React, 'useContext').mockImplementation(() => ({
//             user: mockUser,
//         }));
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });

//     test('renders the form and elements correctly', () => {
//         render(
//             <AuthContext.Provider value={{ user: mockUser }}>
//                 <AddPodcast />
//             </AuthContext.Provider>
//         );

//         // Check for form fields and submit button
//         expect(screen.getByLabelText(/Title of Podcast/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Wallpaper/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Attach the Audio/i)).toBeInTheDocument();
//         expect(screen.getByLabelText(/Category/i)).toBeInTheDocument();
//         expect(screen.getByRole('button', { name: /Upload Podcast/i })).toBeInTheDocument();
//     });

//     test('submits the form and makes the appropriate API calls', async () => {
//         const mockResponse = { data: { insertedId: '12345' } };

//         axios.post.mockResolvedValueOnce(mockResponse); // Mock axios POST request

//         render(
//             <AuthContext.Provider value={{ user: mockUser }}>
//                 <AddPodcast />
//             </AuthContext.Provider>
//         );

//         // Fill out form inputs
//         fireEvent.change(screen.getByLabelText(/Title of Podcast/i), {
//             target: { value: 'Test Podcast' },
//         });
//         fireEvent.change(screen.getByLabelText(/Description/i), {
//             target: { value: 'This is a test podcast' },
//         });
//         fireEvent.change(screen.getByLabelText(/Category/i), {
//             target: { value: 'Technology' },
//         });

//         // Mock File input changes (file uploads)
//         fireEvent.change(screen.getByLabelText(/Wallpaper/i), {
//             target: { files: [new File(['dummy'], 'test.png', { type: 'image/png' })] },
//         });
//         fireEvent.change(screen.getByLabelText(/Attach the Audio/i), {
//             target: { files: [new File(['dummy'], 'test.mp3', { type: 'audio/mp3' })] },
//         });

//         // Submit the form
//         fireEvent.click(screen.getByRole('button', { name: /Upload Podcast/i }));

//         // Wait for the axios.post call to resolve
//         await waitFor(() => {
//             expect(axios.post).toHaveBeenCalledTimes(2); // 2 uploads: image and audio
//             expect(Swal.fire).toHaveBeenCalledWith({
//                 title: 'Success!',
//                 text: 'Podcast Added Successfully',
//                 icon: 'success',
//                 confirmButtonText: 'Ok',
//             });
//         });
//     });

//     test('displays loading spinner while uploading', async () => {
//         axios.post.mockImplementation(() => new Promise(() => { })); // Mock unresolved Promise

//         render(
//             <AuthContext.Provider value={{ user: mockUser }}>
//                 <AddPodcast />
//             </AuthContext.Provider>
//         );

//         fireEvent.change(screen.getByLabelText(/Title of Podcast/i), {
//             target: { value: 'Test Podcast' },
//         });

//         fireEvent.click(screen.getByRole('button', { name: /Upload Podcast/i }));

//         // Check if the loader is visible
//         expect(screen.getByLabelText('circles-with-bar-loading')).toBeInTheDocument();
//     });
// });
