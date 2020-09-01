import test from "tape"
import { i, max } from ".."

test("max", t => {
  t.equals(max([-1, 1, 10, 3]), 10, "Find max in numeric array")
  t.equals(max([]), undefined, "Find max in empty array (=> undefined)")
  t.equals(max([-1, -10, -3]), -1, "Find max in all negative numeric array")
  t.equals(max([1, 10, 3]), 10, "Find max in all positive numeric array")
  t.equals(
    max(i)([]),
    undefined,
    "Find max in empty array using transform function (=> undefined)"
  )

  const fn = element => new Date(element.time)
  const source = [
    { time: "2018-05-15T11:20:07.754110Z" },
    { time: "2018-06-11T09:01:54.337344Z" },
    { time: "2018-06-08T08:26:12.711071Z" },
  ]

  t.deepEquals(
    max(fn)(source),
    { time: "2018-06-11T09:01:54.337344Z" },
    "Custom transform function"
  )

  t.end()
})