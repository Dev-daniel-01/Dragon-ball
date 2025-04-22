import { useEffect, useState } from 'react'
import { apiDB } from './api/api'
import { Card } from './Card'
import style from './Req.module.css'
import { Menu } from './components/menu'

export default function Req(){
    const[data, setData] = useState([])
    const [page, setPage] = useState("1")

    const[erro, setErro] = useState(false)
    
    useEffect(() => {
      apiDB.get(`/characters?page=1`).then((res) => {
        setData(res.data.items)
        console.log(res.data.items)       

      }).catch((error) => {
        if(error.response && error.response.status === 404){
            setErro(true)
        }
        console.log(error)
      }
    ) 
    }, [page])

    return(
    <>
   <Menu option01='Voltar'/>
      
      <section className={style.wrapPage}>
      <h1>Dragon ball Api</h1>
    
      <input type="text" placeholder='Digite uma pagina de 1 a 5' value={page} onChange={(e) => setPage(e.target.value)} /> 
      {erro && <p>Pagina não encontrada</p>}

      <div className={style.wrapCards}>
      {data.map((item, index) => {
          return(
              <div key={index}>
                  <Card name={item.name} image={item.image}  ki={item.ki} maxKi={item.maxKi} race={item.race} gender={item.gender} description={item.description} affiliation={item.affiliation}/>
              </div>
          )
      })}
      </div>
     </section>
    </>
    
    )
    

}