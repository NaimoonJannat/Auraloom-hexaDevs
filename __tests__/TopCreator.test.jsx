import TopCreator from '@/Components/Home/TopCreator'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
//import CreatePlaylist from './page'

describe('TopCreator', () => {
    it('renders a heading', () => {
        render(<TopCreator />)

        //const heading = screen.getByRole('heading', { level: 1 })
        //const heading = screen.getByText('Docs')
        const heading = screen.getByText('Top Creators');

        expect(heading).toBeInTheDocument()
    })
})