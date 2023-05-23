import { useSentinelVisibility } from '@/hooks/useSentinelVisibility'
import TypedHeading from '../TypedHeading'

export type TrackedTypedHeadingProps = {
  text: string
  bold?: boolean
  small?: boolean
  className?: string
  textClassName?: string
  sentimentelOffset?: number
  containerStyle?: React.CSSProperties | undefined
  textWrapperClassName?: string
}

export function TrackedTypedHeading({
  text,
  bold = false,
  small = false,
  className = '',
  textClassName = '',
  sentimentelOffset = 300,
  containerStyle = undefined,
  textWrapperClassName = '',
}: TrackedTypedHeadingProps) {
  const [isVisible, sentinelRef] = useSentinelVisibility(sentimentelOffset)

  return (
    <div
      ref={sentinelRef}
      className={`absolute flex z-50 justify-center w-screen items-center ${className}`}
    >
      <TypedHeading
        bold={bold}
        small={small}
        isVisible={isVisible}
        text={text}
        style={containerStyle}
        textClassName={textClassName}
        textWrapperClassName={textWrapperClassName}
      />
    </div>
  )
}
