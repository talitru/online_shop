
exports.get404 = (req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found', path:'/404'});
    //res.status(404).send('<h1>Page not found</h1>');
};