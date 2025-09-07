'use client'

import React, { Component, ReactNode, ErrorInfo } from 'react'
import { AlertCircle, RefreshCw, Home, Phone } from 'lucide-react'
import Link from 'next/link'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  level?: 'global' | 'page' | 'component'
  errorTitle?: string
  errorDescription?: string
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Only log in development environment
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught:', error, errorInfo)
    }
    
    // In production, you could send to an error reporting service
    // Example: sendToErrorReporting(error, errorInfo)
    
    this.setState({
      error,
      errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      const { level = 'component', errorTitle, errorDescription, fallback } = this.props

      // If custom fallback provided, use it
      if (fallback) {
        return <>{fallback}</>
      }

      // Global level error - full page
      if (level === 'global') {
        return (
          <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
            <div className="text-center px-4 py-16 max-w-2xl mx-auto">
              <div className="mb-8">
                <AlertCircle className="w-24 h-24 text-red-500 mx-auto animate-pulse" />
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {errorTitle || 'Oops! Something went wrong'}
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                {errorDescription || "We encountered an unexpected error. Our team has been notified and we're working on fixing it."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center gap-2 bg-maximax-pink text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors shadow-lg hover:shadow-xl"
                  aria-label="Reload the page"
                >
                  <RefreshCw className="w-5 h-5" />
                  Reload Page
                </button>
                
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors shadow-md hover:shadow-lg"
                  aria-label="Go to homepage"
                >
                  <Home className="w-5 h-5" />
                  Go to Homepage
                </Link>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-4">Need immediate assistance?</p>
                <a
                  href="tel:+15617200521"
                  className="inline-flex items-center gap-2 text-maximax-pink font-semibold hover:underline"
                  aria-label="Call us for support"
                >
                  <Phone className="w-5 h-5" />
                  Call (561) 720-0521
                </a>
              </div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-8 text-left">
                  <summary className="cursor-pointer text-sm text-gray-600 hover:text-gray-800">
                    Developer Info
                  </summary>
                  <pre className="mt-4 p-4 bg-gray-100 rounded-lg text-xs overflow-x-auto">
                    {this.state.error.toString()}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </main>
        )
      }

      // Page level error - contained within layout
      if (level === 'page') {
        return (
          <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-red-50 to-pink-50 rounded-lg m-8">
            <div className="text-center px-4 py-12 max-w-lg">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {errorTitle || 'Page Error'}
              </h2>
              
              <p className="text-gray-600 mb-6">
                {errorDescription || 'This page encountered an error. Please try refreshing or return to the homepage.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleReset}
                  className="inline-flex items-center justify-center gap-2 bg-maximax-pink text-white px-5 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors text-sm"
                  aria-label="Try again"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-5 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-sm"
                  aria-label="Go to homepage"
                >
                  <Home className="w-4 h-4" />
                  Homepage
                </Link>
              </div>
            </div>
          </div>
        )
      }

      // Component level error - minimal UI
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                {errorTitle || 'Component Error'}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {errorDescription || 'This section is temporarily unavailable.'}
              </p>
              <button
                onClick={this.handleReset}
                className="text-sm bg-white text-red-600 px-3 py-1 rounded border border-red-200 hover:bg-red-50 transition-colors font-medium"
                aria-label="Retry loading this component"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Hook for functional components to reset error boundary
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null)

  React.useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  return setError
}

// Higher-order component wrapper
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`

  return WrappedComponent
}