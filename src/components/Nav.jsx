
 import { HeartIcon } from '@heroicons/react/24/outline'
import { children } from 'react'

 function Nav({children}) {
   return (
     <nav className="all-navbar">
     <div className="container">
       <div className="navbar container">
       <Logo/>
  
        {children}
        
       
        
      </div>
     </div>
     </nav>
   )
 }
 
 export default Nav


 export function Logo(){
  return(
     <span className="navbar__logo">LOGO 😍</span>
  )
 }

 export function Search({query, setQuery}){
  return(
     <div className="">
          <input value={query} onChange={(e)=> setQuery(e.target.value)}  type="text" className="navbar__search" placeholder="search..."/>
        </div>
  )
 }

export function NavbarResult({numOfResult}){
  return(
    <span className="navbar__result">Found {numOfResult} result</span>
  )
 }

 export function Favorite({numOfFavorite}){
  return(
     <span className="navbar__icon">
          <HeartIcon className="navbar__hearticon"/>
          <div className="navbar__badge-icon">{numOfFavorite}</div>
          </span>
  )
 }