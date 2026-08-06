'use client'
import { cn } from '@/lib/utils'
import { AnimatePresence, Transition, motion } from 'motion/react'
import {
  Children,
  cloneElement,
  ReactElement,
  useEffect,
  useState,
  useId,
} from 'react'

/**
 * Props for the AnimatedBackground component.
 */
export type AnimatedBackgroundProps = {
  children:
    | ReactElement<{ 'data-id': string }>[]
    | ReactElement<{ 'data-id': string }>
  defaultValue?: string
  onValueChange?: (newActiveId: string | null) => void
  className?: string
  transition?: Transition
  enableHover?: boolean
}

/**
 * A component that animates a background pill behind its children elements.
 * Useful for tabs, navigation menus, or segmented controls.
 * @param props.children - Child elements, must have a 'data-id' attribute.
 * @param props.defaultValue - The initially active element ID.
 * @param props.onValueChange - Callback when the active element changes.
 * @param props.className - Additional CSS classes.
 * @param props.transition - Configuration for the motion transition.
 * @param props.enableHover - Whether to trigger the background on hover instead of click.
 */
export function AnimatedBackground({
  children,
  defaultValue,
  onValueChange,
  className,
  transition,
  enableHover = false,
}: AnimatedBackgroundProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const uniqueId = useId()

  const handleSetActiveId = (id: string | null) => {
    setActiveId(id)

    if (onValueChange) {
      onValueChange(id)
    }
  }

  useEffect(() => {
    if (defaultValue !== undefined) {
      setActiveId(defaultValue)
    }
  }, [defaultValue])

  return Children.map(children, (child: any, index) => {
    const id = child.props['data-id']

    const interactionProps = enableHover
      ? {
          onMouseEnter: () => handleSetActiveId(id),
          onMouseLeave: () => handleSetActiveId(null),
        }
      : {
          onClick: () => handleSetActiveId(id),
        }

    return cloneElement(
      child,
      {
        key: index,
        className: cn('relative inline-flex', child.props.className),
        'data-checked': activeId === id ? 'true' : 'false',
        ...interactionProps,
      },
      <>
        <AnimatePresence initial={false}>
          {activeId === id && (
            <motion.div
              layoutId={`background-${uniqueId}`}
              className={cn('absolute inset-0', className)}
              transition={transition}
              initial={{ opacity: defaultValue ? 1 : 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            />
          )}
        </AnimatePresence>
        <div className="z-10">{child.props.children}</div>
      </>,
    )
  })
}
