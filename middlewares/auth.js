const isLogin = (req, res, next) => {
    if(req.session.user === null || req.session.user === undefined) {
        req.flash("alertMessage", "Session timeout, please sign in");
        req.flash("alertStatus", "danger");
        res.redirect('/admin/signin');
    } else {
        next();
    }
}

module.exports = isLogin;