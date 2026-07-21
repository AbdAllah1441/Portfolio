export type CustomSvgSkillIcon = {
  type: 'svg'
  title: string
  hex: string
  src: string
}

export type CustomImageSkillIcon = {
  type: 'image'
  title: string
  src: string
}

export type CustomSkillIcon = CustomSvgSkillIcon | CustomImageSkillIcon

export const customSkillIcons = {
  tanstack: {
    type: 'svg',
    title: 'TanStack Router',
    hex: '000000',
    src: '/skills/tanstack.svg',
  },
  zustand: {
    type: 'image',
    title: 'Zustand',
    src: '/skills/zustand.png',
  },
} as const satisfies Record<string, CustomSkillIcon>

export const customSkillSlugs = Object.keys(
  customSkillIcons,
) as (keyof typeof customSkillIcons)[]

export function isCustomSkillSlug(
  slug: string,
): slug is keyof typeof customSkillIcons {
  return slug in customSkillIcons
}

function svgToPath(svg: string) {
  const pathStart = svg.indexOf('d="')
  const pathEnd = svg.indexOf('"', pathStart + 3)
  return svg.substring(pathStart + 3, pathEnd)
}

export async function fetchCustomSvgSkillIcons(slugs: readonly string[]) {
  const icons: Record<
    string,
    { slug: string; title: string; hex: string; path: string }
  > = {}

  await Promise.all(
    slugs.map(async (slug) => {
      if (!isCustomSkillSlug(slug)) {
        return
      }

      const icon = customSkillIcons[slug]
      if (icon.type !== 'svg') {
        return
      }

      const response = await fetch(icon.src)

      if (!response.ok) {
        return
      }

      const svg = await response.text()
      const path = svgToPath(svg)

      if (!path) {
        return
      }

      icons[slug] = {
        slug,
        title: icon.title,
        hex: icon.hex,
        path,
      }
    }),
  )

  return icons
}

export function getCustomImageSkillIcons(slugs: readonly string[]) {
  return slugs.flatMap((slug) => {
    if (!isCustomSkillSlug(slug)) {
      return []
    }

    const icon = customSkillIcons[slug]
    if (icon.type !== 'image') {
      return []
    }

    return [icon]
  })
}
