import React from 'react'

export default function TopBar() {
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">ArtSen</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Rechercher"/>
                    <button className="btn btn-outline-success" type="submit">Rechercher</button>
                </form>
            </div>
        </nav>
    </>
  )
}
