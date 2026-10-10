interface HeroProps {
  title: string
  image: string
}

export default function Hero({ title, image }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero__overlay" />
      <h1 className="hero__title">{title}</h1>
    </section>
  )
}
