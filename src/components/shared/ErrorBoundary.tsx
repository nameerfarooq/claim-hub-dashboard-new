import { Component, ReactNode } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error) {
        console.error('Error in chart component:', error)
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="text-red-500">
                    Something went wrong in the chart.
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
