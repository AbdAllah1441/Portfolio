import { useEffect, useMemo, useState } from 'react'

import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud'
import type { ICloud, SimpleIcon } from 'react-icon-cloud'

type IconCloudProps = {
  iconSlugs: string[]
}

export const cloudProps: Omit<ICloud, 'children'> = {
  id: 'skills-icon-cloud',
  containerProps: {
    style: {
      width: '100%',
      height: '100%',
      background: 'transparent',
    },
  },
  canvasProps: {
    style: {
      width: '100%',
      height: '100%',
      background: 'transparent',
    },
  },
  options: {
    clickToFront: 500,
    decel: 0.99,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    interval: 20,
    minSpeed: 0.02,
    maxSpeed: 0.05,
    outlineColour: '#0000',
    reverse: true,
    scrollPause: false,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
    // Pull the sphere in slightly so icons aren't clipped at the canvas edge
    zoom: 0.98,
  },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === 'light' ? '#f3f2ef' : '#080510'
  const fallbackHex = theme === 'light' ? '#6e6e73' : '#ffffff'
  const minContrastRatio = theme === 'dark' ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 64,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e) => e.preventDefault(),
    },
  })
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: IconCloudProps) {
  const [data, setData] = useState<IconData | null>(null)

  useEffect(() => {
    let cancelled = false

    if (!iconSlugs || iconSlugs.length === 0) {
      setData(null)
      return
    }

    fetchSimpleIcons({ slugs: iconSlugs })
      .then((result) => {
        if (!cancelled) {
          setData(result)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setData(null)
        }
      })

    return () => {
      cancelled = true
    }
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data?.simpleIcons) {
      return null
    }

    const icons = Object.values(data.simpleIcons)

    if (icons.length === 0) {
      return null
    }

    return icons.map((icon) => renderCustomIcon(icon, 'dark'))
  }, [data])

  if (!renderedIcons) {
    return (
      <div className="flex h-full w-full items-center justify-center font-mono text-xs tracking-widest text-muted-foreground">
        Loading skills...
      </div>
    )
  }

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>
}
