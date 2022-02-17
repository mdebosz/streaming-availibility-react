export type Pallete<TVariants extends string, TStyles> = {
  [variant in TVariants]: TStyles
}
