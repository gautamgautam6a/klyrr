import React, { Suspense } from 'react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'

interface LazySectionProps {
  children: React.ReactNode
  fallback?: React.ReactNode
  className?: string
  minHeight?: string
}

const DefaultFallback = () => (
  <div className="flex items-center justify-center py-16">
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
)

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <DefaultFallback />, 
  className = "",
  minHeight = "200px"
}) => {
  const { targetRef, shouldLoad } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '200px 0px',
    triggerOnce: true
  })

  return (
    <div 
      ref={targetRef} 
      className={className}
      style={{ minHeight: shouldLoad ? 'auto' : minHeight }}
    >
      {shouldLoad ? (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      ) : (
        <div style={{ height: minHeight }} className="flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}
    </div>
  )
}

export default LazySection