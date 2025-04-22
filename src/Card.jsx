import style from './Card.module.css'

export const Card = ({name, image, ki, maxKi, race, gender, description, affiliation}) => {
    return(
        <>
         <h5 className={style.title}>{name}</h5>
         <img src={image} alt={name} className={style.imgstyle}/>
         
         <p>ki: {ki}</p>
         <p>Ki Maximo: {maxKi}</p>
         <p>Raça: {race}</p>
         <p>Genêro: {gender}</p>
         <p>Descrição: {description}</p>
         <p>Afiliação: {affiliation}</p>

        </>
    )
}