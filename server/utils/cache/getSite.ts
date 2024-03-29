

export const getCachedSite = cachedFunction(async (id: string) => {
    const storage = useStorage('sasanqua')

    const data: EditSiteData = (await storage.getItem("site:" + id))

    return data

  }, {
    // cached 1 hour
    maxAge: 60 * 60,
    name: 'cachedSite',
    getKey: (id: string) => id
  })
  