import Markdown from '../components/Markdown'
import datenschutz from '../content/datenschutz.md?raw'
import impressum from '../content/impressum.md?raw'

export function Impressum() {
  return (
    <div className="container">
      <section className="section">
        <Markdown source={impressum} />
      </section>
    </div>
  )
}

export function Datenschutz() {
  return (
    <div className="container">
      <section className="section">
        <Markdown source={datenschutz} />
      </section>
    </div>
  )
}
