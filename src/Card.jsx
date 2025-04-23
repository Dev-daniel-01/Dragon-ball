import style from './Card.module.css'

export const Card = ({name, image, ki, maxKi, race, gender, description, affiliation}) => {
    return(
        <>
         <h5 className={style.title}>{name}</h5>
         <img src={image} alt={name} className={style.imgCard}/>
         <h2 className={style.titleDesc}>ki</h2>
         <p className={style.desc}> {ki}</p>
         <h2 className={style.titleDesc}>Ki Maximo</h2>
         <p className={style.desc}>{maxKi}</p>
         <h2 className={style.titleDesc}>Raça</h2>
         <p className={style.desc}>{race}</p>
         <h2 className={style.titleDesc}>Genêro</h2>
         <p className={style.desc}>{gender}</p>
         <h2 className={style.titleDesc}>Afiliação</h2>
         <p className={style.desc}>{affiliation}</p>
         

        </>
    )
}