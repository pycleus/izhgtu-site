// global
import React from 'react'
// styles and icon
import './StudentNav.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons';
// components
import {Link} from "react-router-dom";

library.add(fas)

function StudentNav() {
  const links: LinkCategory[] = [
    {
      id: 0,
      name: "Школьнику",
      links: [
        {
          id: 0,
          name: "ПРИЁМ",
          description: "Правила приема и зачисления, информация по вступительным испытаниям",
          icon: "graduation-cap",
          image: "/assets/linkGroupBg.jpg",
          href: "/"
        },
        {
          id: 1,
          name: "ПРИЁМ",
          description: "Правила приема и зачисления, информация по вступительным испытаниям",
          icon: "graduation-cap",
          image: "/assets/linkGroupBg.jpg",
          href: "/"
        },
        {
          id: 2,
          name: "ПРИЁМ",
          description: "Правила приема и зачисления, информация по вступительным испытаниям",
          icon: "graduation-cap",
          image: "/assets/linkGroupBg.jpg",
          href: "/"
        },
        {
          id: 3,
          name: "ПРИЁМ",
          description: "Правила приема и зачисления, информация по вступительным испытаниям",
          icon: "graduation-cap",
          image: "/assets/linkGroupBg.jpg",
          href: "/"
        }
      ]
    },
    {
      id: 1,
      name: "Абитуриенту",
      links: [

      ]
    },
    {
      id: 2,
      name: "Студенту",
      links: [

      ]
    },
    {
      id: 3,
      name: "Аспиранту",
      links: [

      ]
    },
    {
      id: 4,
      name: "Сотруднику",
      links: [

      ]
    }
  ]
  
  return (
    <nav aria-label="nav for students" className="student-nav">
      <ul className="student-nav__link-categories">
        { links.map(linkCategory => (
          <li key={linkCategory.id} className="link-categories__category">
            <Link to={`#link-category-${linkCategory.id}`}>{linkCategory.name}</Link>
          </li>
        ))}
      </ul>
      { links.map(linkCategory => (
        <ul key={`link-category-${linkCategory.id}`} id={`link-category-${linkCategory.id}`} className="student-nav__category-links">
          { linkCategory.links.map(link => (
            <li key={`link-${link.id}`} className="category-links__link">
              <Link to={link.href}>
                <img src={link.image} alt="" className="link__bg-image"/>
                <div className="link__main-content">
                  { link.icon &&
                    <FontAwesomeIcon icon={link.icon} />
                  }
                  <h2 className="main-content__name">{link.name}</h2>
                </div>
                <div className="link__focused-content">
                  <p className="focused-content__description">{link.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </nav>
  )
}

export default StudentNav
