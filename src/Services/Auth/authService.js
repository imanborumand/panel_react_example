
function logout()
{
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin');
    window.location.href = "/login";
}

export default logout