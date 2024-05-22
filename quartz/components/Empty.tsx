import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  /* links: Record<string, string> */
}

export default ((opts?: Options) => {
  const Empty: QuartzComponent = ({ displayClass, cfg }: QuartzComponentProps) => {
    return (
      <></>
    )
  }

  Empty.css = style
  return Empty
}) satisfies QuartzComponentConstructor
