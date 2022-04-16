export default function OffersHeadlinesBox({ offersHeadline }) {
  return(
    <div className="offersHeadlines__box text-center" style={{'--text': offersHeadline.textColor,'--bg': offersHeadline.bg}}>
      <h4>{offersHeadline.title}</h4>
      <p>{offersHeadline.desc}</p>
    </div>
  )
}
