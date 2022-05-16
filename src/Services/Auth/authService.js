
function logout()
{
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_info');
    window.location.href = "/login";
}


export default logout