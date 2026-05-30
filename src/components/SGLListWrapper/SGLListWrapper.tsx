import { Fragment } from 'react'
import type { CSSProperties, Key, ReactNode } from 'react'

interface SGLListWrapperProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  getKey: (item: T) => Key
  wrapperStyle?: CSSProperties
  itemStyle?: CSSProperties
}

export const SGLListWrapper = <T,>({
  items,
  renderItem,
  getKey,
  wrapperStyle,
  itemStyle,
}: SGLListWrapperProps<T>) => {
  const content = items.map((item) => {
    const renderedItem = renderItem(item)
    const key = getKey(item)

    return itemStyle ? (
      <div key={key} style={itemStyle}>
        {renderedItem}
      </div>
    ) : (
      <Fragment key={key}>{renderedItem}</Fragment>
    )
  })

  return wrapperStyle ? <div style={wrapperStyle}>{content}</div> : <>{content}</>
}
