import ajax from './ajax'

export const getSwiperUrl = () => ajax('/swiperData')
export const getMsiteData = () => ajax('/datahome')
export const getTopicData = () => ajax('/datatopic')
export const getNavData = () => ajax('/datanav')
