import TrendingTopic from '@/Components/Home/TrendingTopic'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('TrendingTopic', () => {
    it('renders a heading', () => {
        render(<TrendingTopic />)

        //const heading = screen.getByRole('heading', { level: 1 })
        const heading = screen.getByText('Trending');

        expect(heading).toBeInTheDocument()
    })
})