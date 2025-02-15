import renderPolygon from './polygon.js'
import { WIDTH } from '../constants/index.js'

// Copyright (c) 2018 Nathaniel Wroblewski
//
// I am making my contributions/submissions to this project solely in my
// personal capacity and am not conveying any rights to any intellectual
// property of any third parties.

const render = ({ context, closest, furthest, fill = '#512D08' }) => {
  context.fillStyle = fill
  context.fillRect(
    0,
    furthest.screen.position.y,
    WIDTH,
    closest.screen.position.y - furthest.screen.position.y
  )
}

export default render

