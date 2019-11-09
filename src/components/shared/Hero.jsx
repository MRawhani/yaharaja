import React from 'react'
import {Link } from 'react-router-dom'
export default () => {
  return (
    <div className="header">
        <section >
        
        <div className="header--content">
            <h1 className="display-1 text-muted">ياحراجاة</h1>
            <h5 className="content w-75">انشر بيت قريب من منطقة سياخية في منطقتك، كما يمكنك حجز العرض الذي يعجبك</h5>
            <Link className= "mt-4 p-3 pr-4 pl-4 btn bg-primary text-light" to="/rentals/create">
                انشئ عرض
            </Link>
        </div>
        </section>
    </div>
  )
}
