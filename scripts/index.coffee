uid = require('matthewmueller/uid')
fmt = require('yields/fmt')

msg = fmt('Your unique ID is %s!', uid())
window.alert(msg + "222");