import * as PIXI from 'pixi.js'

export type PointLike =
  | number
  | [number, number]
  | { x: number; y: number }
  | PIXI.Point
  | PIXI.ObservablePoint

/**
 * Parses a value to a Point
 */
export function parsePoint(point: PointLike): PIXI.Point {
  if (Array.isArray(point)) {
    return new PIXI.Point(point[0], point[1])
  }

  if (typeof point === 'number') {
    return new PIXI.Point(point, point)
  }

  if (point instanceof PIXI.Point || point instanceof PIXI.ObservablePoint) {
    return point
  }

  return new PIXI.Point(point.x, point.y)
}
