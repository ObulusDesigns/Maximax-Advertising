'use client'

import React from 'react'
import { ErrorBoundary } from './ErrorBoundary'

// Main providers wrapper with global error boundary
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary
      level="global"
      errorTitle="Application Error"
      errorDescription="We're sorry, but something went wrong. Please try refreshing the page or contact support if the problem persists."
    >
      {children}
    </ErrorBoundary>
  )
}

// Page-level error boundary wrapper
export function PageErrorBoundary({ 
  children,
  errorTitle,
  errorDescription 
}: { 
  children: React.ReactNode
  errorTitle?: string
  errorDescription?: string
}) {
  return (
    <ErrorBoundary
      level="page"
      errorTitle={errorTitle}
      errorDescription={errorDescription}
    >
      {children}
    </ErrorBoundary>
  )
}

// Component-level error boundary wrapper
export function ComponentErrorBoundary({ 
  children,
  fallback,
  errorTitle,
  errorDescription 
}: { 
  children: React.ReactNode
  fallback?: React.ReactNode
  errorTitle?: string
  errorDescription?: string
}) {
  return (
    <ErrorBoundary
      level="component"
      fallback={fallback}
      errorTitle={errorTitle}
      errorDescription={errorDescription}
    >
      {children}
    </ErrorBoundary>
  )
}