import React from "react";
import ProyectItem from './ProyectItem/ProyectItem'

const Proyects = () => {
  const titles = ['GTA rides', 'Spanish Grants']
  const descriptions = [
    'Web aplication in which you can buy cars from the GTA videogame universe. Developed with React and nodeJS',
    'Web aplications that displays grants from Spain. Developed with javascript, nodeJS and PUG'
  ]

  const proyects = [
    {
      title: 'GTA rides',
      description: 'Web aplication in which you can buy cars from the GTA videogame universe. Developed with React and nodeJS',
      code_url: 'https://github.com/Alvaro3c/GTA-vehicles-e-comerce',
      img_src: './proyects/gtarides1.png',
      deploy_url: 'https://gta-rides-e-comerce.web.app/register-login'
    },
    {
      title: 'Spanish Grants',
      description: 'Web aplications that displays grants from Spain. Developed with javascript, nodeJS and PUG',
      code_url: 'https://github.com/aerozfx/backend-ayuda-subvenciones',
      img_src: './proyects/fampyme3.png',
      deploy_url: 'https://backend-project-subvenciones.onrender.com/?search=subvenci%C3%B3n'
    }
  ]
  return <>
    <div className="proyect-list" id="section-projects">
      <h2>Proyects</h2>
      {proyects.map((proyect, index) => (
        <ProyectItem
          key={index}
          title={proyect.title}
          description={proyect.description}
          code_url={proyect.code_url}
          img_src={proyect.img_src}
          deploy_url={proyect.deploy_url}
        />
      ))}
    </div>

  </>;
};

export default Proyects;
