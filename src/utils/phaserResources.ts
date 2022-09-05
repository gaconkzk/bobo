import {
  AtlasFile,
  ImageFile,
  SpriteSheetFile,
} from '@phaserjs/phaser/loader/files'
import type { RequestFileType } from '@phaserjs/phaser/loader/RequestFileType'

export const getResource = ({
  key,
  url,
  spriteSheet,
  atlas,
}: ResourceFile): RequestFileType => {
  const ext = url.substring(url.lastIndexOf('.'))
  if (atlas) {
    const atlasfile = AtlasFile(key, url, atlas)
    return atlasfile
  }
  if (spriteSheet) {
    const ssfile = SpriteSheetFile(key, url, {
      ...spriteSheet,
    })
    return ssfile
  }
  if (ext === '.png') {
    const imgfile = ImageFile(key, url)
    return imgfile
  }

  return null
}
