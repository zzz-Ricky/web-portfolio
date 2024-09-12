
function ViewWidth() {
    let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    return vw
}

export default ViewWidth