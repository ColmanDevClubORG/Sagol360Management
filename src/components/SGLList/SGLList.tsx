import type { CSSProperties, Key, ReactNode } from 'react'

interface SGLListProps<T> {
  items: T[]
  renderItem: (item: T) => ReactNode
  getKey: (item: T) => Key
  wrapperStyle?: CSSProperties
  itemStyle?: CSSProperties
}

export const SGLList = <T,>({
  items,
  renderItem,
  getKey,
  wrapperStyle,
  itemStyle,
}: SGLListProps<T>) => {
  const content = items.map((item) => {
    const renderedItem = renderItem(item)
    const key = getKey(item)

    return (
      <div key={key} style={itemStyle}>
        {renderedItem}
      </div>
    )
  })

  return <div style={wrapperStyle}>{content}</div>
}
