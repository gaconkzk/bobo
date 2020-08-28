import page from 'page'

import Router from './Router'
import Route from './Route'
import NotFound from './NotFound'

const redirect = (path) => page.redirect(path)

export { Router, Route, NotFound, redirect }
