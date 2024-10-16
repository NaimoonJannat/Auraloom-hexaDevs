import TopContent from '@/Components/Home/TopContent'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
//import CreatePlaylist from './page'

describe('TopContent', () => {
    it('renders a heading', () => {
        render(<TopContent />)

        //const heading = screen.getByRole('heading', { level: 1 })
        //const heading = screen.getByText('Docs')
        const heading = screen.getByText('Top Content');

        expect(heading).toBeInTheDocument()
    })
})