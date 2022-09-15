import { fetchImg } from '$utils/images'

const kunio = fetchImg('imgs/sprites/head/kunio.png')
const horibata = fetchImg('imgs/sprites/head/horibata.png')
const yoritsune = fetchImg('imgs/sprites/head/yoritsune.png')
const abel = fetchImg('imgs/sprites/head/abel.png')

export const heads = [horibata, kunio, yoritsune, abel]
