import './loading.css';

function LoadingPanel()
{
    return(
        <div id="loadingIman">
            <div className="loader">Loading...</div>
        </div>
    );
}

export function  showOrHideLoading(context, status)
{
    context.dispatchApp({type: 'change_loading', payload: {
            loading: status,
        }})
}

export default LoadingPanel