export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  asideTitle?: string;
  asideBody?: string;
};

/**
 * 通用页面头图区块统一各栏目页的标题和说明表现。
 */
export function PageHero({
  eyebrow,
  title,
  description,
  asideTitle,
  asideBody,
}: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__grid">
        <div className="page-hero__copy">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        {asideTitle || asideBody ? (
          <div className="hero__panel">
            {asideTitle ? <p className="card-kicker">{asideTitle}</p> : null}
            {asideBody ? <p className="section-copy">{asideBody}</p> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
