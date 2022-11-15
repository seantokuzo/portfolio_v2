import stackIcons from '../../data/stackIcons'

const Stack: React.FC = () => {
  function createIcon(link: string, img: string, name: string) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopener"
        className="stack-icons__link"
        key={name}
      >
        <div className="stack-icons">
          <img className="stack-icons__icon" src={img} alt={`${name} icon`} />
        </div>
        <p className="stack-icons__icon-name">{name}</p>
      </a>
    )
  }

  const myStackEl = (
    <div className="stack-container">
      {stackIcons.map((icon) => {
        const { link, img, name } = icon
        return createIcon(link, img, name)
      })}
    </div>
  )

  return (
    <div className="stack">
      <h2 className="stack__title">Technologies I Use</h2>
      {myStackEl}
    </div>
  )
}

export default Stack
