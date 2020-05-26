module Main where

import Math (sqrt)
import Prelude

import Effect.Console

diagonal w h = sqrt (w * w + h * h)

main = logShow (diagonal 3.0 4.0)
