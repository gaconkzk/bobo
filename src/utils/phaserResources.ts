import { ImageFile } from '@phaserjs/phaser/loader/files'
import type { RequestFileType } from '@phaserjs/phaser/loader/RequestFileType'

export const getResource = ({ key, url }): RequestFileType => {
  const ext = url.substr(url.lastIndexOf('.'))
  if (ext === '.png') {
    const ifi = ImageFile(key, url)
    return ifi
  }

  return null
}
