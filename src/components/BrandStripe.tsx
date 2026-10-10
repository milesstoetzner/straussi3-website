const BRAND_COLOURS = ['#ed7d31', '#5b9bd5', '#70ad47', '#ffc000', '#7030a0', '#f0282d']

/** The six logo colours as an equal-segment stripe, identical to the subtenancy site's header. */
export default function BrandStripe() {
  return (
    <div className="brand-stripe" aria-hidden="true">
      {BRAND_COLOURS.map((c) => (
        <span key={c} style={{ background: c }} />
      ))}
    </div>
  )
}
