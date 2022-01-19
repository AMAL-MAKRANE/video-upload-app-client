import React, { useMemo } from 'react'

import TextChild from './Child'

const defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  className: '',
}

/*

<Text h1/>
<Text h2/>
<Text h3/>
<Text p/>
<Text size="small" p/>

*/

const Text = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  size,
  children,
  className,
  ...props
}) => {
  const elements = { h1, h2, h3, h4, h5, h6, p }
  const names = Object.keys(elements).filter((name) => elements[name])

  const tag = useMemo(() => {
    if (names[0]) return names[0]

    return 'p'
  }, [names])

  return (
    <TextChild className={className} tag={tag} size={size} {...props}>
      {children}
    </TextChild>
  )
}

const MemoText = React.memo(Text)

export default MemoText
