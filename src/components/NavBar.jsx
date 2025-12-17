
 import { HeartIcon } from '@heroicons/react/24/outline'

 function NavBar() {
   return (
     <nav className="all-navbar">
     <div className="container">
       <div className="navbar container">
        <span className="navbar__logo">LOGO 😍</span>
        <span></span>
        <div className="">
          <input type="text" className="navbar__search" placeholder="search..."/>
        </div>
        <span className="navbar__result">Found x result</span>
        <span className="navbar__icon">
          <HeartIcon className="navbar__hearticon"/>
          <div className="navbar__badge-icon">3</div>
          </span>
        
      </div>
     </div>
     </nav>
   )
 }
 
 export default NavBar